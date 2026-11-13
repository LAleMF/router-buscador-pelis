import { Link } from 'react-router'

export function Movies({ filteredMovies, error, loading,
    alreadyExists, onAddToFavorites, onRemoveFromFavorites }) {

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

    if (filteredMovies.length === 0) {
        return (
            <p className='no-matches'>No hay coincidencias</p>
        )
    }

    return (
        <>
            <div className="movie-grid">
                {filteredMovies.map((movie) => (
                    <article key={movie.id} className="movie-card">
                        <img
                            src={movie.image_url}
                            alt={`Póster de ${movie.title}`}
                            loading="lazy"
                            className="movie-poster"
                        />

                        <div className="movie-card-content">
                            <h2>{movie.title}</h2>
                            <p className="movie-year">{movie.year}</p>

                            <div className="movie-card-actions">
                                {alreadyExists(movie) ?
                                    <button className='btn remove' onClick={() => onRemoveFromFavorites(movie)}>
                                        Remove favorite
                                    </button> :
                                    <button className='btn' onClick={() => onAddToFavorites(movie)}>
                                        add to favorites
                                    </button>
                                }
                                <Link className='btn' to={`/movie/${movie.id}`}>Ver detalles</Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </>
    )
}

