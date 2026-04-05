import { Contact1 } from 'icons-by-heynendo'
import Footer from '../components/Footer'
import WellLifeLogo1 from '../components/icons/WellLifeLogo1'
import '../styles/contact.css'
import ContactForm from '../components/ContactForm'
import EmailLogo from '../components/icons/EmailLogo'

export default function Contact(){
    return(
        <main className="contact page-layout">
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
                            <div className='phone'>
                                <h3>Phone</h3>
                                <Contact1 rotation='45' size="40px"/>
                                <a href="tel:7089298515">708-929-8515</a>
                            </div>
                            <div className='email'>
                                <h3>Email</h3>
                                <EmailLogo size='35px' color='#4281A4'/>
                                <a href="mailto:info@welllifenursingcare.com">info@welllifenursingcare.com</a>
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
                <p>Getting in touch is easy. Use the contact form, send an email, or feel free to text or call. Filling out the form below gives us the best chance to understand your needs from the start. Every inquiry is responded to personally — no automated replies, no call centers.</p>
            </div>
            <div className="lower">
                <ContactForm />
                <Footer />
            </div>
        </main>
    )
}