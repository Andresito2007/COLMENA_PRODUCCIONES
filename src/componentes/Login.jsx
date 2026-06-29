// 1ER COMPONENTE
// IMPORTAMOS DEPENCIA INTERNA
import { Link } from 'react-router-dom'
// DEPENDENCIA  DEPENDENCIA EXTERNA
import { Eye, EyeOff, LogIn, UserPlus } from 'lucide-react'
// IMPORTAMOS COMPONENTES
import Logo_login from './Login/Logo_login'
import Logica_login from './Login/Logica_login'
// IMPORTAMOS EL ESTILO
import Estilo from '../estilos/Login.module.css'

function Login() {
  // DESEMPAQUETAMOS LOS ESTADOS Y EL METODO Y EL &&= if
  const {nombre, setNombre,correo, setCorreo,contraseña, setContraseña,esRegistro, setEsRegistro,mostrarContraseña, setMostrarContraseña,apellido,setApellido,dni,setDni,telefono,setTelefono,enviar}= Logica_login()
  return (
    <div className={Estilo.contenedor}>
      <div className={`card ${Estilo.tarjeta}`}>
        <div className="card-body p-5">
          <Logo_login/>
          <form onSubmit={enviar}>
            {
             esRegistro === true && (
             <div>
              <div className="mb-3">
                <label className="form-label">NOMBRE</label>
                <input type="text" name="nombre" className="form-control" value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">DNI</label>
                <input type="text" name="nombre" className="form-control" value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">TELEFONO</label>
                <input type="text" name="nombre" className="form-control" value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">APELLIDO</label>
               <input
                type="text"
                name="apellido"
                className="form-control"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
               />
              </div>
            </div>
            )}
            <div className="mb-3">
              <label className="form-label">CORREO</label>
              <input
                type="email"
                name="correo"
                className="form-control"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CONTRASEÑA</label>
              <div className="input-group">
                <input
                  type={mostrarContraseña === true ? 'TEXT' : 'PASSWORD'}
                  name="contraseña"
                  className="form-control"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setMostrarContraseña(!mostrarContraseña)}
                >
                  {mostrarContraseña === true ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <button type="submit" className={`btn mb-3 ${Estilo.boton}`}>
              {esRegistro === true
                ? <><UserPlus size={18} className="me-1" /> REGISTRARSE</>
                : <><LogIn size={18} className="me-1" /> INICIA SESION</>}
            </button>
          </form>
          <div className="text-center">
            <span className="text-muted">
              {esRegistro === true ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
            </span>
            <button
              className={`btn btn-link ${Estilo.link}`}
              onClick={() => setEsRegistro(esRegistro === false)}
            >
              {esRegistro === true ? 'INICIA SESION' : 'REGISTRATE'}
            </button>
          </div>
          <hr />
          <div className="text-center">
            <Link to="/inicio" className="btn btn-outline-secondary w-100">ENTRAR COMO INVITADO</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
