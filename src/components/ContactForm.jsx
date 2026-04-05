import { useState, useEffect, useRef, Fragment } from "react"
import '../styles/contact-form.css'
import Dropdown from "./Dropdown"
import '../styles/custom-dropdown.css'
import MultiselectDropdown from "./MultiselectDropdown"
import ServicesList from '../data/service-list.json'
import { AnimatePresence, motion } from "motion/react"

const SERVICES = [...ServicesList.map((service) => service.title), "Other"]

const PREFERRED_CONTACT_OPTIONS = ["Email", "Text", "Call"]

const defaultFormData = {
  fullName: "",
  phoneNumber: "",
  emailAddress: "",
  preferredContact: "",
  servicesOfInterest: [],
  healthJourneyPriority: "",
  message: "",
}

const defaultErrors = {
  fullName: false,
  phoneNumber: false,
  emailAddress: false,
  preferredContact: false,
  healthJourneyPriority: false,
  message: false,
}
 
const ERROR_MESSAGES = {
  fullName: "Full name must be at least 2 characters.",
  phoneNumber: "Phone number must be 10 digits.",
  emailAddress: "Please enter a valid email address.",
  preferredContact: "Please select a preferred contact method.",
  healthJourneyPriority: "Please share what's most important to you (at least 5 characters).",
  message: "Message must be at least 10 characters.",
}

function validateForm(formData) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneDigits = formData.phoneNumber.replace(/\D/g, "")
 
  return {
    fullName: !formData.fullName.trim() || formData.fullName.trim().length < 2,
    phoneNumber: phoneDigits.length !== 10,
    emailAddress: !emailRegex.test(formData.emailAddress),
    preferredContact: !formData.preferredContact,
    healthJourneyPriority: !formData.healthJourneyPriority.trim() || formData.healthJourneyPriority.trim().length < 5,
    message: !formData.message.trim() || formData.message.trim().length < 10,
  }
}

export default function ContactForm() {

    const errorRef = useRef(null)

    const API_URL = import.meta.env.DEV
    ? "http://localhost:8787/" // localhost dev
    : "https://emailserver-resend.heynen-donovan.workers.dev/"

    const [formData, setFormData] = useState(defaultFormData)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(defaultErrors)
    const [submit, setSubmit] = useState(null)

    useEffect(() => {
        if (submit !== null) {
            document.body.style.overflow = "hidden"
            document.documentElement.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
            document.documentElement.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
            document.documentElement.style.overflow = ""
        }
    }, [submit])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }))
    }

    const handlePhoneChange = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 10)
        let formatted = digits
        if (digits.length >= 7) {
        formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
        } else if (digits.length >= 4) {
        formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`
        }
        setFormData((prev) => ({ ...prev, phoneNumber: formatted }))
        if (errors.phoneNumber) setErrors((prev) => ({ ...prev, phoneNumber: false }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
 
        const validationErrors = validateForm(formData)
        const hasErrors = Object.values(validationErrors).some(Boolean)
        if (hasErrors) {
            setErrors(validationErrors)
            if (errorRef.current) {
                const top = errorRef.current.getBoundingClientRect().top + window.scrollY - 50
                window.scrollTo({ top, behavior: "smooth" })
            }
            return
        }
 
        const payload = {
            site: 'welllifenursingcare',
            name: formData.fullName,
            phone: formData.phoneNumber,
            email: formData.emailAddress,
            preferredContact: formData.preferredContact,
            servicesOfInterest: formData.servicesOfInterest,
            mostImportant: formData.healthJourneyPriority,
            message: formData.message,
        }

        setLoading(true)
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })
 
            if (response.ok) {
                setFormData(defaultFormData)
                setErrors(defaultErrors)
                setSubmit(true)
            } else {
                console.error("Failed to send message:", await response.text())
                setSubmit(false)
            }
        } catch (err) {
            console.error("Error submitting form:", err)
            setSubmit(false)
        } finally {
            setLoading(false)
        }
    }
 
    const activeErrors = Object.entries(errors).filter(([, hasError]) => hasError)

    return (
        <div ref={errorRef}>
        {activeErrors.length > 0 && (
            <>
            <h3 className="error-title">Errors:</h3>
            <ul className="error-list">
                {activeErrors.map(([field]) => (
                    <li key={field}>{ERROR_MESSAGES[field]}</li>
                ))}
            </ul>
            </>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="container-1">
                <label htmlFor="fullName">Full Name</label>
                <input
                    id="fullName"
                    name="fullName"
                    className={errors.fullName ? "input-error" : ""}
                    value={formData.fullName}
                    onChange={handleChange}
                />
            </div>
            <div className="container-1">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    className={errors.phoneNumber ? "input-error" : ""}
                    value={formData.phoneNumber}
                    onChange={handlePhoneChange}
                />
            </div>
            <div className="container-1">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                    id="emailAddress"
                    name="emailAddress"
                    className={errors.emailAddress ? "input-error" : ""}
                    value={formData.emailAddress}
                    onChange={handleChange}
                />
            </div>
            <div className="container-1">
                <label >Preferred Contact</label>
                <Dropdown
                    options={PREFERRED_CONTACT_OPTIONS}
                    value={formData.preferredContact}
                    className={errors.preferredContact ? "input-error" : ""}
                    onChange={(selected) =>
                        setFormData((prev) => ({ ...prev, preferredContact: selected }))
                    }
                    placeholder="Select one"
                />
            </div>
            <div className="container-2">
                <label >Service(s) of Interest </label>
                <MultiselectDropdown
                    options={SERVICES}
                    value={formData.servicesOfInterest}
                    onChange={(selected) =>
                        setFormData((prev) => ({ ...prev, servicesOfInterest: selected }))
                    }
                />
            </div>
            <div className="container-2">
                <label htmlFor="healthJourneyPriority">What's most important to you on your health journey?</label>
                <textarea
                    id="healthJourneyPriority"
                    className={`health-journey${errors.healthJourneyPriority ? " input-error" : ""}`}
                    name="healthJourneyPriority"
                    value={formData.healthJourneyPriority}
                    onChange={handleChange}
                />
            </div>
            <div className="container-2">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className={`message${errors.message ? " input-error" : ""}`}
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" disabled={loading}>
                <h3>{loading ? "Sending..." : "Send"}</h3>
            </button>
            <AnimatePresence>
                {submit !== null &&
                    <motion.div
                        className="popout"
                        onClick={() => setSubmit(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="window"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h1>{submit === true ? 'Message Sent!' : 'Message Failed to Send'}</h1>
                            {submit === false &&
                                <span>Looks like there was an issue, try again or contact us directly by phone or email.</span>
                            }
                            <button type="button" onClick={() => setSubmit(null)}><h3>Close</h3></button>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </form>
        </div>
    )
}