import { useState, useRef } from 'react'
import { Cash1, Exit1 } from 'icons-by-heynendo'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import '../styles/services.css'
import ZelleLogo from '../components/logos/ZelleLogo'
import CashAppLogo from '../components/logos/CashAppLogo'
import VenmoLogo from '../components/logos/VenmoLogo'
import serviceList from '../data/service-list.json'
import WellLifeLogo1 from '../components/WellLifeLogo1'
import { getWindowWidth } from '../functions/GetWindowWidth'
import servicesBackground from '/services-background.png'

export default function Services(){

    const width = getWindowWidth()
    const midRef = useRef(null)

    const [selectedService, setSelectedService] = useState(null)
    const [showMore, setShowMore] = useState(false)

    function handleServiceClick(service){
        setSelectedService(service)

        if (midRef.current) {
            const { top } = midRef.current.getBoundingClientRect()
            if (top < 0 || top > window.innerHeight) {
                window.scrollTo({
                    top: window.scrollY + top - 50,
                    behavior: 'smooth'
                })
            }
        }
    }


    const serviceCards = serviceList.filter((_, index) => showMore || index < 6).map((service, index, arr) => (
        <>
        <div
            className='service'
            key={service.id}
            onClick={() => handleServiceClick(service)}
            style={{width: width > 1000 ? '28%' : width > 600 ? '40%' : '90%'}}
        >
            <h3>{service.title}</h3>
            <p>{service.shortDesc}</p>
        </div>
        {(index + 1) % (width > 1000 ? 3 : width > 600 ? 2 : 1) === 0 && index !== arr.length - 1 && (
            <div className='row-break'/>
        )}
        </>
    ))

    const selectedServiceCard = selectedService && (
    <div className='selected-service'>
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
    </div>
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
                {selectedServiceCard}
                <SearchBar />
                <div className='options'> 
                    {serviceCards}
                </div>
                <button
                    onClick={() => setShowMore(prev => !prev)}
                ><h3>{showMore ? 'Show Less' : 'Show More'}</h3></button>
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