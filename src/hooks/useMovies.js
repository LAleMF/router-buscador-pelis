import { useState, useEffect } from 'react'


export function useMovies() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        async function fetchMovies() {
            try {
                setLoading(true)
                setError(null)

                const res = await fetch('https://devsapihub.com/api-movies')

                if (!res.ok) {
                    throw new Error('Error al obtener las películas')
                }

                const data = await res.json()
                setMovies(data)

            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()
    }, [])

    return { movies, loading, error }
}