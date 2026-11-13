import { useParams, useNavigate } from "react-router"

export function MovieDetail({ movies, error, loading }) {
    const navigate = useNavigate()
    const { id } = useParams()

    if (error) {
        return (
            <p style={{ color: 'red' }}>{error}</p>
        )
    }

    if (loading) {
        return (
            <p>Cargando películas...</p>
        )
    }

    const movie = movies.find((movie) => movie.id === parseInt(id))

    if (!movie) {
        return <p>Película no encontrada</p>
    }

    return (
        <section className="movie-detail">
            <img src={movie.image_url} alt={`Póster de ${movie.title}`} />

            <div className="movie-detail-content">
                <button className="btn" onClick={() => navigate(-1)}>
                    ← Volver
                </button>

                <h2>{movie.title}</h2>
                <p>{movie.year}</p>

                <span className="movie-rating">
                    ⭐ {movie.stars}
                </span>

                <p>{movie.description}</p>
            </div>
        </section>
    )
}
