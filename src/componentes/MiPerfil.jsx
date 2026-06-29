import { User, Save } from 'lucide-react'
import campos from './MiPerfil/datos'
import Estilo from '../estilos/MiPerfil.module.css'
import CampoInput from './comunes/CampoInput'

// PRINCIPIO DE RESPONSABILIDAD UNICA : SOLO COMONE CAMPOS DEL PERFIL
// PRINCIPIO OPEN CLOSE : PARA AGREGAR UN CAMPO NUEVO SOLO SE AÑADE UN OBJETO EN datos.js
function MiPerfil() {
  return (
    <>
      <div className="text-center mb-4">
        <div className={Estilo.avatar}>
          <User size={40} color="#A44949" />
        </div>
        <h2 className={`fw-bold m-0 ${Estilo.titulo}`}>MI PERFIL</h2>
        <p className="text-muted">ADMINISTRA TU INFO PERSONAL</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className={`card ${Estilo.tarjeta}`}>
            <div className="card-body p-4">
              <form onSubmit={e => e.preventDefault()}>
                {campos.map(({ etiqueta, icono, nombre, tipo }) => (
                  <CampoInput
                    key={nombre}
                    etiqueta={etiqueta}
                    icono={icono}
                    tipo={tipo}
                    nombre={nombre}
                  />
                ))}
                <div className="d-grid"><button type="submit" className={`btn ${Estilo.boton}`}><Save size={18} className="me-1" /> Guardar cambios</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MiPerfil
