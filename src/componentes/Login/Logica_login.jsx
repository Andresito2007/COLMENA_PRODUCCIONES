// IMPORTAMOS USESTATE DE REACT
import { useState } from 'react'
// DEPENDENCIA INTERNA DE REACT
import { useNavigate } from 'react-router-dom'
// CREAMOS NUESTRA FUNCION LOGICA QUE RETORNARA
function Logica_login() {
  // INSTANCIAMOS NAVIGATE
  const Navegacion= useNavigate();
  // CREANDO NUESTROS ESTADOS
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [dni, setDni] = useState(''); // char caract minimos 8 nomas
  const [telefono, setTelefono] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [esRegistro, setEsRegistro] = useState(false);
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  //CREAMOS NUESTRA FUNCION ENVIAR
  const enviar = (e) => {
    e.preventDefault()

    if (correo === '' || contraseña === '') {
      alert('Completa todos los campos')
      return
    }
    if (contraseña.length < 6) {
      alert('LA CONTRASEÑA DEBE TENER MINIMO 6 CARACTERES')
      return
    }
    // DESPUES DE DARLE AL BOTON REGISTRARSE
    if (esRegistro === true) {
      if (nombre === '' || apellido === '') {
        alert('INGRESA TU NOMBRE Y APELLIDO')
        return
      }
      if (dni === '' || dni.length < 8) {
        alert('INGRESA UN DNI VALIDO (MINIMO 8 DIGITOS)')
        return
      }
      if (telefono === '' || telefono.length < 9) {
        alert('INGRESA UN TELEFONO VALIDO (MINIMO 9 DIGITOS)')
        return
      }
      alert('REGISTRO EXITOSO')
    }

    Navegacion('/inicio')
  }
  //
  return{
    nombre, setNombre,
    apellido, setApellido,
    correo, setCorreo,
    dni, setDni,
    telefono, setTelefono,
    contraseña, setContraseña,
    esRegistro, setEsRegistro,
    mostrarContraseña, setMostrarContraseña,
    enviar,
  }
}

export default Logica_login
