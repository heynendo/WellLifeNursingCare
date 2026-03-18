import { Contact1 } from 'icons-by-heynendo'
import Footer from '../components/Footer'
import WellLifeLogo1 from '../components/WellLifeLogo1'
import '../styles/contact.css'
import ContactForm from '../components/ContactForm'
import EmailLogo from '../components/logos/EmailLogo'

export default function Contact(){
    return(
        <div className="contact page-layout">
            <div className="top">
                <h1>Support Starts Here</h1>
                <h3>Contact to discuss services, availability, or the next steps in your care.</h3>
            </div>
            <div className="mid">
                <div className='info-cards'>
                    <div className='card contact-card'>
                        <h2>Contact Options</h2>
                        <div className='break'/>
                        <div className='options'>
                            <div className='phone'
                                onClick={() => window.location.href = 'tel:7089298515'}
                            >
                                <h3>Phone</h3>
                                <Contact1 rotation='45' size="40px"/>
                                <span>708-929-8515</span>
                            </div>
                            <div className='email'
                                onClick={() => window.location.href = 'mailto:info@welllifenursingcare.com'}
                            >
                                <h3>Email</h3>
                                <EmailLogo size='35px' color='#4281A4'/>
                                <span>info@welllifenursingcare.com</span>
                            </div>
                        </div>
                    </div>
                    <div className='card availability-card'>
                        <h2>Availability</h2>
                        <div className='break'/>
                        <div className='availability'>
                            <h3>Available by appointment any day of the week.</h3>
                            <WellLifeLogo1 />
                        </div>
                    </div>
                </div>
                <p>Getting in touch is easy. Use the contact form, send an email, or call during available hours. Now explain more info about preferences of contact and availability. This would be a good place to add any other info you think is important for clients to know that they should include in their message that isn't already specified. </p>
            </div>
            <div className="lower">
                <ContactForm />
                <Footer />
            </div>
        </div>
    )
}