import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Arrow1, Exit1 } from "icons-by-heynendo"
import '../styles/multiselect-dropdown.css'
import { getWindowWidth } from "../functions/GetWindowWidth"

export default function MultiselectDropdown({
    options,
    value = [],
    onChange,
    disabled = false,
}) {
    const [isOpen, setIsOpen] = useState(false)
    const [dropdownHeight, setDropdownHeight] = useState(0)
    
    const dropdownRef = useRef(null)
    const listRef = useRef(null)
    const width = getWindowWidth()

    useEffect(() => {
        const a = dropdownRef.current
        if (!a) return

        const observer = new ResizeObserver(([entry]) => {
            setDropdownHeight(entry.contentRect.height + 45)
        })

        observer.observe(a)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const handleClickOutside = (e) => {
            const inDropdown = dropdownRef.current?.contains(e.target)
            const inList = listRef.current?.contains(e.target)
            if (!inDropdown && !inList) setIsOpen(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleToggle = () => {
        if (!disabled) setIsOpen((prev) => !prev)
    }

    const handleSelect = (option) => {
        if (value.includes(option)) {
            onChange?.(value.filter((v) => v !== option))
        } else{
            onChange?.([...value, option])
        }
    }

    const handleDeselect = (option, e) => {
        e.stopPropagation()
        onChange?.(value.filter((v) => v !== option))
    }

    return (
        <>
            <div
                className={`multiselect-dropdown ${disabled ? "disabled" : ""} ${isOpen ? "open" : ""}`}
                ref={dropdownRef}
                onClick={() => width > 700 ? handleToggle() : ''}
            >
                <span className="selected-options">
                    <AnimatePresence mode="popLayout">
                        {value.length === 0 ? (
                            null
                        ) : (
                            value.map((v) => (
                                <motion.div
                                    key={v}
                                    className="option"
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.85 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <span>{v}</span>
                                    <Exit1
                                        size={10}
                                        onClick={(e) => handleDeselect(v, e)}
                                        style={{ cursor: "pointer" }}
                                    />
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </span>
                <div className="dropdown-toggle"
                    onClick={() => width < 700 ? handleToggle() : ''}
                >
                    <Arrow1
                        color="#4281A4"
                        size={15}
                        style={{
                            cursor: disabled ? "default" : "pointer",
                            transition: "transform 0.2s ease-in",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            flexShrink: 0,
                            alignSelf: "center",
                        }}
                    />
                </div>
            </div>
            <AnimatePresence>
            {isOpen && (
                <motion.ul
                    className="mulitselect-dropdown-options"
                    ref={listRef}
                    style={{ top: dropdownHeight }}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                >
                    {options?.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                        >
                            <div className={value.includes(option) ? "selected" : "not-selected"} />
                            {option}
                        </li>
                    ))}
                </motion.ul>
            )}
            </AnimatePresence>
        </>
    )
}