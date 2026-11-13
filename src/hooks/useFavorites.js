import { useEffect, useState } from "react"

export function useFavorites() {
    const [favorites, setFavorites] = useState(() => {
        try {
            const savedFavorites = JSON.parse(localStorage.getItem('favorites'))
            return Array.isArray(savedFavorites) ? savedFavorites : []
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    function alreadyExists(movie) {
        return favorites.some(fav => fav.id === movie.id)
    }

    function onAddToFavorites(movie) {
        setFavorites(prevFavorites => {
            const exists = prevFavorites.some(fav => fav.id === movie.id)

            if (exists) return prevFavorites

            return [...prevFavorites, movie]
        })
    }

    function onRemoveFromFavorites(movie) {
        setFavorites(prevFavorites =>
            prevFavorites.filter(fav => fav.id !== movie.id)
        )
    }

    return { favorites, alreadyExists, onAddToFavorites, onRemoveFromFavorites }
}
