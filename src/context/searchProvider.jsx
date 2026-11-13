import { useState } from 'react'
import { SearchContext } from './searchContext'

export function SearchProvider({ children }) {
    const [search, setSearch] = useState('')

    function onUpdateSearch(text) {
        setSearch(text)
    }

    return (
        <SearchContext.Provider value={{ search, onUpdateSearch }}>
            {children}
        </SearchContext.Provider>
    )

}