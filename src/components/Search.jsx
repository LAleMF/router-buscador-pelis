import { useSearchContext } from "../hooks/useSearchContext"

export function Search() {
    const { search, onUpdateSearch } = useSearchContext()

    return (
        <div className="search-container">
            <input
                aria-label="Buscar películas"
                type="search"
                placeholder="Buscar películas..."
                value={search}
                className="search-input"
                onChange={(e) => onUpdateSearch(e.target.value)}
            />
            <span className="search-icon" aria-hidden="true">🔍</span>
        </div>
    )
}