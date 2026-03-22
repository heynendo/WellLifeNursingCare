import { useState, useEffect, useRef } from "react"
import '../styles/custom-dropdown.css'
import { motion, AnimatePresence } from "framer-motion"
import { Arrow1 } from "icons-by-heynendo"

export default function Dropdown({
    options,
    value = options[0],
    onChange,
    disabled = false,
}) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleToggle = () => {
        if (!disabled) setIsOpen((prev) => !prev)
    }

    const handleSelect = (option) => {
        onChange?.(option)
        setIsOpen(false)
    }

    return (
        <>
            <div
                className={`custom-dropdown ${disabled ? "disabled" : ""} ${isOpen ? "open" : ""}`}
                onClick={handleToggle}
                ref={dropdownRef}
            >
                <span className='selected-option'>
                    {value}
                </span>
                <Arrow1
                    color="#4281A4"
                    size={15}
                    style={{
                        cursor: disabled ? 'default' : 'pointer',
                        transition: 'transform 0.2s ease-in',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className="dropdown-options"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        {options?.map((option) => (
                            <li
                                key={option}
                                className={value === option ? "selected" : ""}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </>
    )
}