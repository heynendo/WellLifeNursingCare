import { useState, useRef } from 'react'
import '../styles/search-bar.css'
import { Search1 } from "icons-by-heynendo"

export default function SearchBar({ searchValue, setSearchValue }){
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)

    return(
        <div className={`search-bar ${isFocused ? 'focused' : ''}`}
            onClick={() => inputRef.current?.focus()}
        >
            <Search1 
                size={25}
                color='#4281A4'
            />
            <input 
                id='search'
                ref={inputRef}
                placeholder="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    )
}