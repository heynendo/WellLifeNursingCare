import { Contact2, HeartMedical1, MedicalBadge1, Stethoscope1 } from "icons-by-heynendo"
import WellLifeLogo1 from "../components/WellLifeLogo1"
import '../styles/home.css'
import Footer from "../components/Footer"

export default function Home(){

    return(
        <div className="home page-layout">
            <div className="hero">
                <div className="left">
                    <WellLifeLogo1 size="450px"/>
                    <span className="title">
                        Your Trusted Guide Through Every Health Decision
                    </span>
                    <div className="cta-buttons">
                        <button className="button-lg contact-btn">
                            Contact Now
                            <Contact2
                                size="25px"
                                rotation="45"
                            />
                        </button>
                        <button className="button-lg more-btn">
                            Learn More
                        </button>   
                    </div>
                </div>
                <div className="right">
                    <img className="headshot" src="/headshot.png"/>
                </div>
            </div>
            <div className="mid">
                <div className="intro">
                    <h3>The nursing support system you deserve</h3>
                    <p>I believe everyone deserves a healthcare advocate; someone who takes the time to listen, explain your options clearly, and help you navigate the complexities of the medical world. I can help with hands-on care at home, guidance finding the right specialist, or just someone to answer your health questions without judgment.</p>
                </div>
                <div className="about-cards">
                    <div className="card">
                        <div className="container">
                            <h3>In-Home or Virtual Care</h3>
                            <p>Healthcare on your terms. I offer in-person visits throughout [Chicagoland area? Or more specific?] and virtual consultations for clients nationwide. Whether you prefer face-to-face care or the ease of an online appointment, I'm ready to help when and where you need it.</p>
                        </div>
                        <MedicalBadge1 />
                    </div>
                    <div className="card">
                        <div className="container">
                            <h3>Concierge & Medical Services</h3>
                            <p>I provide the full spectrum of nursing support - clinical services like lab draws and post-op care, plus the guidance you need to find good doctors and navigate the healthcare system. Consider me your all-in-one healthcare resource.</p>
                        </div>
                        <HeartMedical1 />
                    </div>
                    <div className="card">
                        <div className="container">
                            <h3>More</h3>
                            <p>Check out the about page to learn more information.</p>
                            <button><h3>About Well Life</h3></button>
                        </div>
                        <Stethoscope1 />
                    </div>
                </div>
            </div>
            <div className="lower">
                <div className="reviews">
                    <h2>See Why Patients Trust Us</h2>
                    <div className="break"/>
                    <div className="main-review">
                        <div className="container">
                            <div className="head">
                                <h3>John Doe</h3>
                                <h4>4 stars</h4>
                            </div>
                            <p>This is the full review from a customer. This one is highlighted above the others</p>
                        </div>
                        <WellLifeLogo1 
                        color="#E5F0F6"/>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}