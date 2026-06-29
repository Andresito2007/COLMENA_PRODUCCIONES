//IMPORTAMOS ESTILOS COMO VARIABLES CON .MODULE
import Estilo from '../../estilos/LogoLogin.module.css'
// /* OPERADOR TERNARIO ( SI ESTA REGISTRADO INICIO SESION SI NO REGISTRATE) */
// CREAMOS NUESTRA FUNCION LOGO QUE RETORNARA
function Logo() {
  return (
    <div className="text-center mb-4">
      <img src="/LOGO_COLMENAD.svg" alt="" width="48" height="48" />
      <h3 className={`fw-bold mt-2 ${Estilo.titulo}`}>COLMENA PRODUCTIONS</h3>
    </div>
  )
}
// EXPORTAMOS POR DEFECTO
export default Logo
