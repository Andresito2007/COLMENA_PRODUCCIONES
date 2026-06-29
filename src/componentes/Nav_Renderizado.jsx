import { Outlet } from 'react-router-dom'
import Navegacion from './Navegacion.jsx'
function Nav_Renderizado() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navegacion />
      <main className="flex-grow-1" style={{ background: '#ffffff' }}>
        <div className="container py-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
export default Nav_Renderizado
