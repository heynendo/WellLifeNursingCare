import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import '../styles/navigation.css'
import WellLifeLogo1 from "./icons/WellLifeLogo1"
import { Contact1, Contact2, Exit2, HamburgerMenu2, MedicalBadge1, Profile2 } from "icons-by-heynendo"
import { getWindowWidth } from "../functions/GetWindowWidth"
import HouseIcon from "./icons/HouseIcon"
import ProfileIcon from "./icons/ProfileIcon"

export default function Navigation(){

    const colorSet = {
        color1: "#9CAFB7",
        color2: "#E5F0F6",
        color3: "#4281A4",
        color4: "#D9966D"
    }

    const pathname = window.location.pathname.replace("/", "")
    const currentPage = pathname === "" ? "Home" : 
        pathname.charAt(0).toUpperCase() + pathname.slice(1).toLowerCase()

    const width = getWindowWidth()
    const [navOptions, setNavOptions] = useState(false)

    useEffect(() => {
        if (width > 700){
            setNavOptions(false)
        }
    }, [width])

    const [colorSwitch, setColorSwitch] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const mid = document.querySelector(".mid")
            if (!mid) return
            const rect = mid.getBoundingClientRect()
            setColorSwitch(rect.top <= 55)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (navOptions) {
            document.body.style.overflow = "hidden"
            document.documentElement.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
            document.documentElement.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
            document.documentElement.style.overflow = ""
        }
    }, [navOptions])

    return(
        <>
        <nav className="navigation"
            style={{ background: colorSwitch ? colorSet.color2 : colorSet.color1}} 
        >
            <div className="left">
                {width > 700 ?
                <Link to='/'><h3 style={{color: colorSwitch ? colorSet.color3 : colorSet.color2}}>Well Life Nursing Care</h3></Link>
                :
                <WellLifeLogo1 
                    size="125px"
                    color={colorSwitch ? colorSet.color3 : colorSet.color2}
                />
                }
            </div>
            <div className="right" >
                {width > 700 ?
                <>
                <Link to='/'><h4 style={{color: colorSwitch ? colorSet.color3 : colorSet.color2}} className={currentPage === 'Home' ? 'selected' : ''}>Home</h4></Link>
                <Link to='/about'><h4 style={{color: colorSwitch ? colorSet.color3 : colorSet.color2}} className={currentPage === 'About' ? 'selected' : ''}>About</h4></Link>
                <Link to='/services'><h4 style={{color: colorSwitch ? colorSet.color3 : colorSet.color2}} className={currentPage === 'Services' ? 'selected' : ''}>Services</h4></Link>
                <Link to='/contact'><h4 style={{color: colorSwitch ? colorSet.color3 : colorSet.color2}} className={currentPage === 'Contact' ? 'selected' : ''}>Contact</h4></Link>
                </>
                :
                <div className="mobile"
                    style={{justifyContent: navOptions ? 'space-between' : 'end', 
                            width: navOptions ? 'calc(45vw - 50px)' : '55vw'}}
                >
                    <AnimatePresence mode="wait">
                        {navOptions && 
                            <motion.div
                                className="icon-container"
                                key="exit-icon"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.3 } }}
                                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                            >
                                <Exit2
                                    color={colorSwitch ? colorSet.color3 : colorSet.color2}
                                    size="20px"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setNavOptions(prev => !prev)}
                                />
                            </motion.div>
                        }
                    </AnimatePresence>

                    <motion.h4
                        key={navOptions ? "nav-open" : "nav-closed"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.3 } }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        style={{color: colorSwitch ? colorSet.color3 : colorSet.color2}}
                    >
                        {currentPage}
                    </motion.h4>

                    <AnimatePresence mode="wait">
                        {!navOptions && 
                            <motion.div
                                className="icon-container"
                                key="hamburger-icon"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.3 } }}
                                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                            >
                                <HamburgerMenu2
                                    color={colorSwitch ? colorSet.color3 : colorSet.color2}
                                    size="30px"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setNavOptions(prev => !prev)}
                                />
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
                }
            </div>
        </nav>
            <AnimatePresence>
            {navOptions && width < 700 && (
                <motion.div
                key="blur"
                className="blur"
                onClick={() => setNavOptions(prev => !prev)}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.25, delay: 0.25 } }}
                exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.15 } }}
                />
            )}
            </AnimatePresence>
            <AnimatePresence>
            {navOptions && width < 700 && (
                <motion.div
                    className="nav-options"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    style={{ background: colorSwitch ? colorSet.color2 : colorSet.color1}} 
                >
                    {currentPage !== 'Home' &&
                    <Link to='/'
                    onClick={() => setNavOptions(false)}
                    style={{ background: colorSwitch ? colorSet.color3 : colorSet.color4}}
                    >
                        <HouseIcon 
                            className='nav-icons'
                            size="25px"
                            color="white"
                        />
                        <h4>Home</h4>
                    </Link>
                    }
                    {currentPage !== 'About' &&
                    <Link to='/about'
                    onClick={() => setNavOptions(false)}
                    style={{ background: colorSwitch ? colorSet.color3 : colorSet.color4}} 
                    >
                        <ProfileIcon 
                            className='nav-icons'
                            size="25px"
                            color="white"
                        />
                        <h4>About</h4>
                    </Link>
                    }
                    {currentPage !== 'Services' &&
                    <Link to='/services'
                    onClick={() => setNavOptions(false)}
                    style={{ background: colorSwitch ? colorSet.color3 : colorSet.color4}}
                    >
                        <MedicalBadge1
                            className='nav-icons'
                        />
                        <h4>Services</h4>
                    </Link>
                    }
                    {currentPage !== 'Contact' &&
                    <Link to='/contact'
                    onClick={() => setNavOptions(false)}
                    style={{ background: colorSwitch ? colorSet.color3 : colorSet.color4}}
                    >
                        <Contact1 
                            rotation="45"
                            className='nav-icons'
                        />
                        <h4>Contact</h4>
                    </Link>
                    }
                </motion.div>
            )}
            </AnimatePresence>
        </>
    )
}