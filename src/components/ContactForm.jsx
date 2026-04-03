import { useState } from "react"
import '../styles/contact-form.css'
import Dropdown from "./Dropdown"
import { Arrow1 } from "icons-by-heynendo"
import '../styles/custom-dropdown.css'
import MultiselectDropdown from "./MultiselectDropdown"
import ServicesList from '../data/service-list.json'

const SERVICES = ServicesList.map((service) => service.title)

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

export default function ContactForm() {
  const [formData, setFormData] = useState(defaultFormData)
  const [submit, setSubmit] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
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
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
 
    const payload = {
      name: formData.fullName,
      phone: formData.phoneNumber,
      email: formData.emailAddress,
      preferredContact: formData.preferredContact,
      servicesOfInterest: formData.servicesOfInterest,
      mostImportant: formData.healthJourneyPriority,
      message: formData.message,
    }
 
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
 
      if (response.ok) {
        setFormData(defaultFormData)
        setSubmit(true)
      } else {
        console.error("Failed to send message:", await response.text())
        setSubmit(false)
      }
    } catch (err) {
      console.error("Error submitting form:", err)
      setSubmit(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
        <div className="container-1">
            <label htmlFor="fullName">Full Name</label>
            <input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
            />
        </div>
        <div className="container-1">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                pattern="\d{3}-\d{3}-\d{4}"
                required
            />
        </div>
        <div className="container-1">
            <label htmlFor="emailAddress">Email Address</label>
            <input
                id="emailAddress"
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                required
            />
        </div>
        <div className="container-1">
            <label >Preferred Contact</label>
            <Dropdown
                options={PREFERRED_CONTACT_OPTIONS}
                value={formData.preferredContact}
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
                className="health-journey"
                name="healthJourneyPriority"
                value={formData.healthJourneyPriority}
                onChange={handleChange}
                required
            />
        </div>
        <div className="container-2">
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                className="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            />
        </div>
        <button type="submit"><h3>Send</h3></button>
    </form>
  )
}