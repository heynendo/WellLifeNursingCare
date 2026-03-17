import { FingerPrint1, HeartMedical1, MedicalBadge1, PiggyBank3 } from 'icons-by-heynendo'
import Footer from '../components/Footer'
import '../styles/about.css'

export default function About(){
    return(
        <div className="about page-layout">
            <div className='top'>
                <h1>Professional Nursing Care with a Personal Touch</h1>
                <div className='bio'>
                    <img className="headshot" src="/headshot.png"/>
                    <div className='container'>
                        <div className='head'>
                            <h4>Lynnette Kwiatt</h4>
                            <div className='break' />
                            <h4 className='credentials'> RN MSN CMM AMC-BC</h4>
                        </div>
                        <p>I'm Lynnette, a [board-certified/licensed] Registered Nurse with [X] years of experience in [specialties - ICU, pediatrics, home health, etc.]. Throughout my career, I've seen how overwhelming and confusing healthcare can be - even for people who know the system. That's why I started Well Life Nursing Care.</p>
                        <p>I believe everyone deserves a healthcare advocate; someone who takes the time to listen, explain your options clearly, and help you navigate the complexities of the medical world. I can help with hands-on care at home, guidance finding the right specialist, or just someone to answer your health questions without judgment.</p>
                        <p>My approach is simple: treat every client like family. That means personalized attention, honest communication, and care that fits your life and your needs.</p>
                    </div>
                </div>
            </div>
            <div className='mid'>
                <div className='about-cards'>
                    <div className='card'>
                        <div/>
                        <div className='container'>
                            <h3>In-Person or Virtual Care, Your Choice</h3>
                            <p>Healthcare on your terms. I offer in-person visits throughout [Chicagoland area? Or more specific?] and virtual consultations for clients nationwide. Whether you prefer face-to-face care or the ease of an online appointment, I'm ready to help when and where you need it.</p>
                            <div/>
                        </div>
                        <MedicalBadge1 />
                        <div/>
                    </div>
                    <div className='card'>
                        <div/>
                        <div className='container'>
                            <h3>Clinical Care and Healthcare Navigation</h3>
                            <p>I provide the full spectrum of nursing support - clinical services like lab draws and post-op care, plus the guidance you need to find good doctors and navigate the healthcare system. Consider me your all-in-one healthcare resource.</p>
                        </div>
                        <HeartMedical1 />
                        <div/>
                    </div>
                    <div className='card'>
                        <div/>
                        <div className='container'>
                            <h3>Simple Transparent Pricing</h3>
                            <p>No insurance headaches, no surprise bills, no hidden fees. All services are straightforward cash-pay rates, so you know exactly what you're paying. With Well Life you will receive quality care without delays and added confusion. Lab tests and diagnostics are billed directly to your insurance when applicable.</p>
                        </div>
                        <PiggyBank3 />
                        <div/>
                    </div>
                    <div className='card'>
                        {/**update to use placeholder divs as our gradient 
                         * width going to the end of the page*/}
                        <div/>
                        <div className='container'>
                            <h3>Personalized Care for Every Age</h3>
                            <p>You're not a number in a waiting room - you're a person with unique health needs. I take the time to understand your situation, answer questions thoroughly, and create care plans that fit your life. From pediatric care to supporting aging parents, I work with patients of all ages.</p>
                        </div>
                        <FingerPrint1 />
                        <div/>
                    </div>
                </div>
            </div>
            <div className='lower'>
                <Footer />
            </div>
        </div>
    )
}