import { useState, useEffect, useRef, Fragment } from "react"
import '../styles/custom-dropdown.css'
import { motion, AnimatePresence } from "framer-motion"
import { Arrow1 } from "icons-by-heynendo"

export default function Dropdown(){
/**{
    options,
    value = options[0],
    onChange,
    placeholder = 'Select an option',
    disabled = false,
    isOpen,
    onToggle
} */
    return(
        <>
        <div className="custom-dropdown">
            <span className="selected-option"></span>
            <Arrow1 
                color="#4281A4"
                size={15}
            />
        </div>
        <ul className="dropdown-options">
            <li>Email</li>
            <li>Text</li>
            <li>Call</li>
        </ul>
        </>
    )
}