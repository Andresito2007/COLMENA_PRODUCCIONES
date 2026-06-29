// 2DO COMPONENTE
import { Link, useLocation } from 'react-router-dom'
import { LogOut, Menu } from 'lucide-react'
import links from './Navegacion/links'
import Estilo from '../estilos/Navegacion.module.css'

function Navegacion() {
  const { pathname } = useLocation()
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark sticky-top ${Estilo.navbar}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/inicio">
          <img src="/LOGO_COLMENAD.svg" alt="" width="28" height="28" className="me-2" />
          COLMENA PRODUCTIONS
        </Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <Menu color="#fff" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1">
            {links.map(({ link, label, icon: Icon }) => (
              <li className="nav-item" key={link}>
                <Link className={`nav-link d-flex align-items-center gap-1 rounded px-3 ${pathname === link ? 'active' : ''}`} to={link}>
                  <Icon size={16} /> {label}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-1 rounded px-3 text-danger" to="/">
                <LogOut size={16} /> SALIR
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navegacion
