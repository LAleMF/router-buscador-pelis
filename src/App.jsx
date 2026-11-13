import './App.css'
import { Routes, Route } from 'react-router'
import { Movies } from './components/Movies'
import { MovieDetail } from './components/MovieDetail'
import { Favorites } from './components/Favorites'
import { Layout } from './components/Layout'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useFavorites } from './hooks/useFavorites'


function App() {

  const { movies, error, loading } = useMovies()
  const { filteredMovies } = useSearch(movies)
  const { favorites, alreadyExists, onAddToFavorites, onRemoveFromFavorites } = useFavorites()

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"
            element={<Movies
              filteredMovies={filteredMovies}
              error={error}
              loading={loading}
              alreadyExists={alreadyExists}
              onAddToFavorites={onAddToFavorites}
              onRemoveFromFavorites={onRemoveFromFavorites}
            />} />
          <Route path='/favorites' element={<Favorites currentFavorites={favorites} onRemoveFromFavorites={onRemoveFromFavorites} />} />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} error={error} loading={loading} />} />
        </Route>
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </>
  )
}

export default App
