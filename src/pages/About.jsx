import { FingerPrint1, HeartMedical1, MedicalBadge1, PiggyBank3 } from 'icons-by-heynendo'
import Footer from '../components/Footer'
import '../styles/about.css'
import { motion } from 'framer-motion'

export default function About(){
    return(
        <main className="about page-layout">
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
                        <p>I'm Lynnette, a board-certified and licensed Registered Nurse with 20 years of experience in both inpatient and outpatient nursing care, with a strong focus on community health. Throughout my career, I've seen how overwhelming and confusing healthcare can be - even for people who know the system. That's why I started Well Life Nursing Care.</p>
                        <p>I believe everyone deserves a healthcare advocate; someone who takes the time to listen, explain your options clearly, and help you navigate the complexities of the medical world. I can help with hands-on care at home, guidance finding the right specialist, or just someone to answer your health questions without judgment.</p>
                        <p>My approach is simple: treat every client like family. That means personalized attention, honest communication, and care that fits your life and your needs.</p>
                    </div>
                </div>
            </div>
            <div className='mid'>
                <div className='about-cards'>
                    <div className='card'>
                        <motion.div className='container'
                            initial={{ opacity: 0, x: '-5vw' }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <h3>Care Delivered to You</h3>
                            <p>Your health, your schedule. We primarily offer virtual care, with in-person visits available in select areas. Whether online or face-to-face, you'll get the same attentive, personalized care — when and where it works for you.</p>
                            <div/>
                        </motion.div>
                        <MedicalBadge1 />
                    </div>
                    <div className='card'>
                        <motion.div className='container'
                            initial={{ opacity: 0, x: '5vw' }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <h3>Clinical Care and Healthcare Navigation</h3>
                            <p>Hands-on clinical support meets expert guidance. I manage the details — lab work, post-op follow-ups, finding the right doctors — so you can focus on getting better, not figuring out the system.</p>
                        </motion.div>
                        <HeartMedical1 />
                    </div>
                    <div className='card'>
                        <motion.div className='container'
                            initial={{ opacity: 0, x: '-5vw' }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <h3>Simple Transparent Pricing</h3>
                            <p>No insurance headaches, no surprise bills, no hidden fees. All services are straightforward cash-pay rates so you know what to expect. With Well Life you will receive quality care without delays and added confusion. Lab tests and diagnostics are billed directly to your insurance when applicable.</p>
                        </motion.div>
                        <PiggyBank3 />
                    </div>
                    <div className='card'>
                        <motion.div className='container'
                            initial={{ opacity: 0, x: '5vw' }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <h3>Personalized Care for Every Age</h3>
                            <p>You're not a number in a waiting room - you're a person with unique health needs. I take the time to understand your situation, answer questions thoroughly, and create care plans that fit your life. From pediatric care to supporting aging parents, I work with patients of all ages.</p>
                        </motion.div>
                        <FingerPrint1 />
                    </div>
                </div>
            </div>
            <div className='lower'>
                <Footer />
            </div>
        </main>
    )
}