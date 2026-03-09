import { useState } from 'react'
import { Cash1, Exit1 } from 'icons-by-heynendo'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import '../styles/services.css'
import ZelleLogo from '../components/logos/ZelleLogo'
import CashAppLogo from '../components/logos/CashAppLogo'
import VenmoLogo from '../components/logos/VenmoLogo'
import serviceList from '../data/service-list.json'
import WellLifeLogo1 from '../components/WellLifeLogo1'

export default function Services(){

    const serviceCards = serviceList.map(service => (
        <div
            className='service'
            key={service.id}
            onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
        >
            <h3>{service.title}</h3>
            <p>{service.shortDesc}</p>
        </div>
    ))

    const [selectedService, setSelectedService] = useState(null)

    return(
        <div className="services page-layout">
            <div className='top'>
                <h1>Care Designed for You</h1>
                <h3>Flexible, one-on-one nursing support tailored to your health journey. Ready to provide guidance you can trust and care you can rely on.</h3>
            </div>
            <div className='mid'>
                {selectedService && ''}
                <div className='selected-service'>
                    <div className='header'>
                        <div className='left'>
                            <Exit1 
                                size={20}
                                color='#4281A4'
                            />
                            <h3>Service Title</h3>
                        </div>
                        <div className='right'>
                            <span className='cost'>
                                Cost:
                            </span>
                            <h3>$150</h3>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='left'>
                            <p>Longer summary of the services, this should be about 3-4 about what the service includes. We include details like if this can be done virtually, or if this could be done at home. Explain why customers decide this service</p>
                        </div>
                        <div className='right'>
                            <WellLifeLogo1 />
                        </div>
                    </div>
                </div>
                <SearchBar />
                <div className='options'>
                    {serviceCards}
                    {serviceCards}
                </div>
                <button><h3>Show More</h3></button>
            </div>
            <div className='lower'>
                <div className='payment-options'>
                    <h2>Payment Types Accepted</h2>
                    <div className='break'/>
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
                <Footer />
            </div>
        </div>
    )
}