import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import MotionWrapper from "./functions/MotionWrapper"
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

function AppRoutes(){
  const location = useLocation()

  function ScrollToTop() {
      const { pathname } = useLocation()

      useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
      }, [pathname])

      return null
  }

  return(
    <>
    <ScrollToTop />
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<MotionWrapper> <Home /> </MotionWrapper>}/>
        <Route path='/about' element={<MotionWrapper> <About/> </MotionWrapper>}/>
        <Route path='/services' element={<MotionWrapper> <Services/> </MotionWrapper>}/>
        <Route path='/contact' element={<MotionWrapper> <Contact/> </MotionWrapper>}/>
      </Route>
    </Routes>
    </AnimatePresence>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
