import { useSearchContext } from "./useSearchContext"

export function useSearch(movies) {
    const { search } = useSearchContext()

    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))

    return { filteredMovies }
}