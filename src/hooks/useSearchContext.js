import { useContext } from "react";
import { SearchContext } from "../context/searchContext";

export function useSearchContext() {
    const context = useContext(SearchContext)

    if (!context) {
        throw new Error(
            'useSearchContext debe utilizarse dentro de SearchProvider'
        )
    }

    return context
}