import { useState, useRef, Fragment } from 'react'
import { Cash1, Exit1 } from 'icons-by-heynendo'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import '../styles/services.css'
import ZelleLogo from '../components/icons/ZelleLogo'
import CashAppLogo from '../components/icons/CashAppLogo'
import VenmoLogo from '../components/icons/VenmoLogo'
import serviceList from '../data/service-list.json'
import WellLifeLogo1 from '../components/icons/WellLifeLogo1'
import { getWindowWidth } from '../functions/GetWindowWidth'
import servicesBackground from '/services-background.png'
import { AnimatePresence, motion } from 'framer-motion'

export default function Services(){

    const width = getWindowWidth()
    const midRef = useRef(null)

    const [selectedService, setSelectedService] = useState(null)
    const [showMore, setShowMore] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    function handleServiceClick(service){
        setSelectedService(service)

        setTimeout(() => {
            if (midRef.current) {
                const { top } = midRef.current.getBoundingClientRect()
                if (top < 0 || top > window.innerHeight) {
                    window.scrollTo({
                        top: window.scrollY + top - 50,
                        behavior: 'smooth'
                    })
                }
            }
        }, 300)
    }


    const serviceCards = serviceList
        .filter(service => {
            const term = searchTerm.toLowerCase()
            return (
                service.title.toLowerCase().includes(term) ||
                service.shortDesc.toLowerCase().includes(term) ||
                service.keywords.some(k => k.toLowerCase().includes(term))
            )
        })
        .filter((_, index) => showMore || index < 6)
        .map((service, index, arr) => (
        <Fragment key={`${service.id}-${index}`}>
        <motion.div
            className='service'
            onClick={() => handleServiceClick(service)}
            style={{width: width > 1000 ? '28%' : width > 600 ? '40%' : '90%'}}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.1, delay: index * 0.075, ease: 'easeOut' }}
        >
            <h3>{service.title}</h3>
            <p>{service.shortDesc}</p>
        </motion.div>
        {(index + 1) % (width > 1000 ? 3 : width > 600 ? 2 : 1) === 0 && index !== arr.length - 1 && (
            <div className='row-break'/>
        )}
        </Fragment>
    ))

    const selectedServiceCard = selectedService && (
    <motion.div
        className='selected-service'
        key="selected-service"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
    >
        <div className='header'>
            <div className='left'>
                <Exit1 
                    size={20}
                    color='#4281A4'
                    onClick={() => setSelectedService(null)}
                    style={{cursor: 'pointer'}}
                />
                <h3>{selectedService.title}</h3>
            </div>
            {width > 600 &&
            <div className='right'>
                <span className='cost'>Cost:</span>
                <h3>${selectedService.cost}</h3>
            </div>
            }
        </div>
        <div className='container'>
            <div className='left'>
                <p>{selectedService.longDesc}</p>
            </div>
            {width > 600 &&
            <div className='right'>
                <WellLifeLogo1 />
            </div>
            }
        </div>
        {width < 600 &&
        <div className='bottom-cost'>
            <span className='cost'>Cost:</span>
            <h3>${selectedService.cost}</h3>
        </div>
        }
    </motion.div>
)

    return(
        <div className="services page-layout">
            <div className='top'
                style={{
                    backgroundImage: `url(${servicesBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1>Care Designed for You</h1>
                <h3>Flexible, one-on-one nursing support tailored to your health journey. Ready to provide guidance you can trust and care you can rely on.</h3>
            </div>
            <div className='mid' ref={midRef}>
                <AnimatePresence>
                    {selectedServiceCard}
                </AnimatePresence>
                <SearchBar searchValue={searchTerm} setSearchValue={setSearchTerm} />
                <div className='options'> 
                    {serviceCards.length > 0 ? serviceCards : <h3>No matching services found.</h3>}
                </div>
                <button onClick={() => setShowMore(prev => !prev)} >
                    <h3>{showMore ? 'Show Less' : 'Show More'}</h3>
                </button>
                <div className='break'/>
                <h1 className='pricing-tagline'>Flexible Pricing Options</h1>
                <div className='pricing'>
                {[
                    {
                        title: "Initial Virtual Consultation Rate",
                        text: "Your first virtual visit typically lasts 30 to 60 minutes and includes a comprehensive health assessment, review of your medical history, and a personalized care plan tailored to your needs.",
                        price: "$150-200"
                    },
                    {
                        title: "Quick Care Rate",
                        text: "pricing info",
                        price: "$100-200+"
                    },
                    {
                        title: "Insurance Approval Project",
                        text: "pricing info",
                        price: "$200-300+"
                    }
                ].map((card, index) => (
                    <motion.div
                        className='pricing-card'
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
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                        <h1>{card.price}</h1>
                    </motion.div>
                ))}
            </div>
            </div>
            <div className='lower'>
                <div className='payment-options'>
                    <h2>Payment Types Accepted</h2>
                    <div className='break'/>
                    <div className='option-cards'>
                        <div className='card'>
                            <ZelleLogo />
                            <h3>Zelle</h3>
                        </div>
                        <div className='card'>
                            <CashAppLogo />
                            <h3>Cashapp</h3>
                        </div>
                        <div className='card'>
                            <VenmoLogo/>
                            <h3>Venmo</h3>
                        </div>
                        <div className='card'>
                            <Cash1 
                                size={75}
                                color='#E5F0F6'
                            />
                            <h3>Cash or Check</h3>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}