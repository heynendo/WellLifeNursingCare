/*import '../styles/contact-form.css'

export default function ContactForm(){
    return(
        <form className='contact-form'>
            <div className='container-1'>
                <label>Full Name</label>
                <input />
            </div>
            <div className='container-1'>
                <label>Phone Number</label>
                <input />
            </div>
            <div className='container-1'>
                <label>Email Address</label>
                <input />
            </div>
            <div className='container-1'>
                <label>Preferred Contact</label>
                <input />
            </div>
            <div className='container-2'>
                <label>Service(s) of Interest</label>
                <input />
            </div>
            <div className='container-2'>
                <label>What's most important to you on your health journey?</label>
                <textarea/>
            </div>
            <div className='container-2'>
                <label>Message</label>
                <textarea/>
            </div>
            <button><h3>Send</h3></button>
        </form>
    )
}*/
import { useState } from "react"
import '../styles/contact-form.css'

const SERVICES = [
  "Primary Care",
  "Mental Health",
  "Nutrition Counseling",
  "Physical Therapy",
  "Chronic Disease Management",
  "Preventive Care",
  "Women's Health",
  "Pediatrics",
]

const PREFERRED_CONTACT_OPTIONS = ["Email", "Phone", "Text"]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    preferredContact: "",
    servicesOfInterest: "",
    healthJourneyPriority: "",
    message: "",
  })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
        <div className="container-1">
            <label>Full Name</label>
            <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
            />
        </div>
        <div className="container-1">
            <label>Phone Number</label>
            <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                placeholder="XXX-XXX-XXXX"
                pattern="\d{3}-\d{3}-\d{4}"
                required
            />
        </div>
        <div className="container-1">
            <label>Email Address</label>
            <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                required
            />
        </div>
        <div className="container-1">
            <label>Preferred Contact</label>
            <select
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                required
            >
                <option value="" disabled></option>
                {PREFERRED_CONTACT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
        <div className="container-2">
            <label>Service(s) of Interest</label>
            <select
                name="servicesOfInterest"
                value={formData.servicesOfInterest}
                onChange={handleChange}
                required
            >
                <option value="" disabled></option>
                {SERVICES.map((service) => (
                <option key={service} value={service}>{service}</option>
                ))}
            </select>
        </div>
        <div className="container-2">
            <label>What's most important to you on your health journey?</label>
            <textarea
                className="health-journey"
                name="healthJourneyPriority"
                value={formData.healthJourneyPriority}
                onChange={handleChange}
                required
            />
        </div>
        <div className="container-2">
            <label>Message</label>
            <textarea
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