import { Contact1, HeartMedical1, MedicalBadge1, Stethoscope1 } from "icons-by-heynendo"
import WellLifeLogo1 from "../components/icons/WellLifeLogo1"
import '../styles/home.css'
import Footer from "../components/Footer"
import { getWindowWidth } from "../functions/GetWindowWidth"
import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export default function Home(){

    const navigate = useNavigate()

    const width = getWindowWidth()

    const [headshotLoaded, setHeadshotLoaded] = useState(false)

    return(
        <main className="home page-layout">
            <div className="hero">
                <div className="left">
                    {width > 700 ? <WellLifeLogo1 size="450px"/> : <h1>Well Life Nursing Care</h1>}
                    <span className="title">
                        Your Trusted Guide Through Every Health Decision
                    </span>
                    {width < 700 &&
                        <div className="headshot-container">
                            <img
                                className="headshot"
                                src="/headshot.png"
                                onLoad={() => setHeadshotLoaded(true)}
                            />
                            <AnimatePresence>
                                {!headshotLoaded && (
                                    <motion.div
                                        className="headshot-loader"
                                        key="loader"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    }
                    <div className="cta-buttons">
                        <button className="button-lg contact-btn"
                            onClick={() => navigate('/contact')}
                        >
                            Contact Now
                            <Contact1
                                size="25px"
                                rotation="45"
                            />
                        </button>
                        <button className="button-lg more-btn"
                            onClick={() => navigate('/about')}
                        >
                            Learn More
                        </button>   
                    </div>
                </div>
                {width > 700 &&
                <div className="right">
                    <div className="headshot-container">
                        <img
                            className="headshot"
                            src="/headshot.png"
                            onLoad={() => setHeadshotLoaded(true)}
                        />
                        <AnimatePresence>
                            {!headshotLoaded && (
                                <motion.div
                                    className="headshot-loader"
                                    key="loader"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                }
            </div>
            <div className="mid">
                <div className="intro">
                    <h3>The nursing support system you deserve</h3>
                    <p>I believe everyone deserves a healthcare advocate; someone who takes the time to listen, explain your options clearly, and help you navigate the complexities of the medical world. I can help with hands-on care at home, guidance finding the right specialist, or just someone to answer your health questions without judgment.</p>
                </div>
                <div className="about-cards">
                    {[
                        {
                            title: "Care Delivered to You",
                            text: "Your health, your schedule. We primarily offer virtual care, with in-person visits available in select areas. Whether online or face-to-face, you'll get the same attentive, personalized care — when and where it works for you.",
                            icon: <MedicalBadge1 />
                        },
                        {
                            title: "Concierge & Medical Services",
                            text: "Hands-on clinical support meets expert guidance. I manage the details — lab work, post-op follow-ups, finding the right doctors — so you can focus on getting better, not figuring out the system.",
                            icon: <HeartMedical1 />
                        },
                        {
                            title: "More",
                            text: "Check out the about page to learn more information.",
                            icon: <Stethoscope1 />,
                            button: true
                        }
                    ].map((card, index) => (
                        <motion.div
                            className="card"
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="container">
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                                {card.button && (
                                    <button onClick={() => navigate('/about')}>
                                        <h3>About Well Life</h3>
                                    </button>
                                )}
                            </div>
                            {card.icon}
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="lower">
                <div className="reviews">
                    <h2>See Why Patients Trust Us</h2>
                    <div className="break"/>
                    <div className="main-review">
                        <div className="container">
                            <div className="head">
                                <h3>Kelly Riney</h3>
                                <h4></h4>
                            </div>
                            <p>Lynnette is the very best, she has helped me for years with my aging mother. She has helped with navigating doctors and nurses, nursing facilities after surgeries and understanding some of the medications. Lynnette has helped lighten the stress level in some of my most difficult times. Don't be afraid to ask for help she is truly wonderful!!</p>
                        </div>
                        <WellLifeLogo1 
                        color="#E5F0F6"/>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}