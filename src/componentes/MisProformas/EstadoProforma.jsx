import Estilo from '../../estilos/MisProformas.module.css'

// PRINCIPIO OPEN CLOSE : ESTADOS, PARA AGREGAR UNO NUEVO SOLO SE AÑADE UNA LINEA
// PRINCIPIO DE RESPONSABILIDAD UNICA : SOLO MAPEA ESTADOS A CLASES CSS
const clasesEstado = {
  APROBADA: Estilo.aprobada,
  RECHAZADA: Estilo.rechazada,
  PENDIENTE: Estilo.pendiente,
}

function EstadoProforma({estado}) {
  return clasesEstado[estado] || Estilo.pendiente
}

export default EstadoProforma
