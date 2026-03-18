/**import { Arrow1, Exit1 } from "icons-by-heynendo"
import '../styles/multiselect-dropdown.css'

export default function MultiselectDropdown(){
    return(
        <>
        <div className="multiselect-dropdown">
            <span className="selected-options">
                <div className="option">
                    <span>option</span>
                    <Exit1/>
                </div>
            </span>
            <Arrow1
                color="#4281A4"
                size={15}
            />
        </div>
        <ul className="mulitselect-dropdown-options">
            <li>
                <div className="not-selected" />
                option 1
            </li>
            <li>
                <div className="selected" />
                option 2
            </li>
            <li>
                <div className="selected" />
                option 3
            </li>
        </ul>
        </>
    )
}*/
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Arrow1, Exit1 } from "icons-by-heynendo"
import '../styles/multiselect-dropdown.css'

export default function MultiselectDropdown({
    options,
    value = [],
    onChange,
    disabled = false,
}) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)
    const listRef = useRef(null)

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
        } else if (value.length < 3) {
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
                onClick={handleToggle}
                ref={dropdownRef}
            >
                <span className="selected-options">
                    <AnimatePresence mode="popLayout">
                        {value.length === 0 ? (
                            ''
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

            <ul
                className="mulitselect-dropdown-options"
                ref={listRef}
                style={{ display: isOpen ? "block" : "none" }}
            >
                {options?.map((option, i) => (
                    <motion.li
                        key={option}
                        onClick={() => handleSelect(option)}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15, delay: i * 0.05 }}
                    >
                        <div className={value.includes(option) ? "selected" : "not-selected"} />
                        {option}
                    </motion.li>
                ))}
            </ul>
        </>
    )
}