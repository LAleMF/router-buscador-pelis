import { Link, Outlet } from 'react-router'
import { Search } from './Search'

export function Layout() {
    return (
        <>
            <header className="site-header">
                <Link to="/" className="brand">
                    CineFinder
                </Link>

                <nav className="main-nav">
                    <Link to="/" className="nav-link">Películas</Link>
                    <Link to="/favorites" className="nav-link">Mis favoritos</Link>
                </nav>

                <Search />
            </header>

            <main className="page-container">
                <Outlet />
            </main>
        </>
    )
}