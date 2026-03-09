import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import '../styles/navigation.css'
import WellLifeLogo1 from "./WellLifeLogo1"
import { Contact2, Exit2, HamburgerMenu2, MedicalBadge1, Profile2 } from "icons-by-heynendo"

export default function Navigation(){

    const colorSet = {
        color1: "#9CAFB7",
        color2: "#E5F0F6",
        color3: "#4281A4",
        color4: "#D9966D"
    }

    const pathname = window.location.pathname.replace("/", "")
    const currentPage = pathname === "" ? "Home" : pathname

    const [width, setWidth] = useState(window.innerWidth)
    const [navOptions, setNavOptions] = useState(false)
    
    useEffect(() => {
        const handleResize = () =>
        setWidth(window.innerWidth)

        window.addEventListener("resize", handleResize)

        return () =>
        window.removeEventListener("resize", handleResize)
    }, [])

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
            setColorSwitch(rect.top <= 0)
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
        <header className="navigation"
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
                <Link to='/about'><h4 style={{color: colorSwitch ? colorSet.color3 : colorSet.color2}} className={currentPage === 'about' ? 'selected' : ''}>About</h4></Link>
                <Link to='/services'><h4 style={{color: colorSwitch ? colorSet.color3 : colorSet.color2}} className={currentPage === 'services' ? 'selected' : ''}>Services</h4></Link>
                <Link to='/contact'><h4 style={{color: colorSwitch ? colorSet.color3 : colorSet.color2}} className={currentPage === 'contact' ? 'selected' : ''}>Contact</h4></Link>
                </>
                :
                <>
                <motion.div
                    className="mobile"
                    animate={{ width: navOptions ? "38.5vw" : "25vw" }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                    <div style={{ width: "30px", display: "flex", justifyContent: "end" }}>
                        <AnimatePresence mode="wait">
                        {navOptions && 
                            <motion.div
                                key="exit-icon"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -20, opacity: 0 }}
                                transition={{ duration: 0.2 }}
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
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.h4
                            key={currentPage}
                            initial={{ y: 8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{color: colorSwitch ? colorSet.color3 : colorSet.color2}} 
                        >
                            {currentPage}
                        </motion.h4>
                    </AnimatePresence>
                    <div style={{ width: "30px", display: "flex", justifyContent: "center" }}>
                        <AnimatePresence mode="wait">
                        {!navOptions && 
                            <motion.div
                                key="hamburger-icon"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 20, opacity: 0 }}
                                transition={{ duration: 0.2 }}
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
                </motion.div>
                {/*<motion.div
                    className="mobile"
                    animate={{ width: navOptions ? "38.5vw" : "25vw" }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                    <AnimatePresence mode="wait">
                    {navOptions && 
                    <motion.div
                        key="exit-icon"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.25, delay: 0.25 }  }}
                        exit={{ opacity: 0, transition: { duration: 0.25} }}
                    >
                        <Exit2
                            color="#E5F0F6"
                            size="20px"
                            style={{ cursor: "pointer" }}
                            onClick={() => setNavOptions(prev => !prev)}
                        />
                    </motion.div>
                    }
                    </AnimatePresence>
                    <motion.h4
                        animate={{ x: navOptions ? 0 : 0 }}
                        layout
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    >
                        {currentPage}
                    </motion.h4>
                    <AnimatePresence mode="wait">
                    {!navOptions && 
                    <motion.div
                        key="hamburger-icon"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 20, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <HamburgerMenu2
                            color="#E5F0F6"
                            size="30px"
                            style={{ cursor: "pointer" }}
                            onClick={() => setNavOptions(prev => !prev)}
                        />
                    </motion.div>
                    }
                    </AnimatePresence>
                </motion.div>*/}
                </>
                }
            </div>
        </header>
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
                    style={{ background: colorSwitch ? colorSet.color3 : colorSet.color4}}
                    >

                        <h4>Home</h4>
                    </Link>
                    }
                    {currentPage !== 'about' &&
                    <Link to='/'
                    style={{ background: colorSwitch ? colorSet.color3 : colorSet.color4}} 
                    >
                        <Profile2 
                            className='nav-icons'
                        />
                        <h4>About</h4>
                    </Link>
                    }
                    {currentPage !== 'services' &&
                    <Link to='/'
                    style={{ background: colorSwitch ? colorSet.color3 : colorSet.color4}}
                    >
                        <MedicalBadge1
                            className='nav-icons'
                        />
                        <h4>Services</h4>
                    </Link>
                    }
                    {currentPage !== 'contact' &&
                    <Link to='/'
                    style={{ background: colorSwitch ? colorSet.color3 : colorSet.color4}}
                    >
                        <Contact2 
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