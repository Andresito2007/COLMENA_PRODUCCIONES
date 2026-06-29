// 4TO COMPONENTE
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import paquetes from './Paquetes/datos'
import Estilo from '../estilos/Paquetes.module.css'

function Paquetes() {
  return (
    <>
      <div className="text-center mb-5">
        <h2 className={`fw-bold ${Estilo.titulo}`}>NUESTROS PAQUETES</h2>
        <p className="text-muted">ELIGE EL MEJOR PAQUETE QUE TE GUSTE</p>
      </div>
      <div className="row g-4 justify-content-center">
        {paquetes.map(pkg => (
          <div className="col-md-6 col-lg-4" key={pkg.nombre}>
            <div className={`card h-100 ${Estilo.tarjetaNormal}`}>
              <div className="card-body p-4 text-center">
                <div className={Estilo.icono} style={{ background: pkg.bg }}>
                  <pkg.icon size={32} color={pkg.color} />
                </div>
                <h4 className="fw-bold">{pkg.nombre}</h4>
                <p className="text-muted small">{pkg.desc}</p>
                <div className="mb-3">
                  <span className={Estilo.precio}>${pkg.precio}</span>
                </div>
                <ul className="list-unstyled text-start mb-4">
                  {pkg.incluye.map(item => (
                    <li key={item} className={Estilo.item}>
                      <CheckCircle size={16} className={Estilo.check} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/proformas" className={`btn ${Estilo.botonPrimario}`}>
                  Seleccionar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Paquetes
