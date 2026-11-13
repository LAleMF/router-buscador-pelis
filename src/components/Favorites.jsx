import { Link } from "react-router"

export function Favorites({ currentFavorites, onRemoveFromFavorites }) {

    const hasFavorites = currentFavorites.length > 0

    return (
        <>
            {hasFavorites ?
                <div className='movie-grid'>
                    {
                        currentFavorites.map(movie => (
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
                                        <button className='btn remove' onClick={() => onRemoveFromFavorites(movie)}>
                                            Remove favorite
                                        </button>
                                        <Link className="btn" to={`/movie/${movie.id}`}>Ver detalles</Link>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </div> :
                <p>Todavía no tienes películas favoritas</p>
            }
        </>

    )
}