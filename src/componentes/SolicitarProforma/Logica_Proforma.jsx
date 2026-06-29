import { useState } from 'react'

function Logica_Proforma() {
  const [tipo, setTipo] = useState('')
  const [fecha, setFecha] = useState('')
  const [lugar, setLugar] = useState('')
  const [invitados, setInvitados] = useState('')
  const [presupuesto, setPresupuesto] = useState('')
  const [paquete, setPaquete] = useState('')
  const [servicios, setServicios] = useState([])
  const [notas, setNotas] = useState('')
  const marcarServicio = (e) => {
    const valor = e.target.value
    const checked = e.target.checked
    if (checked === true) {
      setServicios([...servicios, valor])
    } else {
      setServicios(servicios.filter((s) => s !== valor))
    }
  }
  const enviar = (e) => {
    e.preventDefault()
    if (tipo === '' || fecha === '' || lugar === '') {
      alert('Completa los campos obligatorios')
      return
    }
    if (invitados === '' || isNaN(invitados) === true) {
      alert('Ingresa un número de invitados válido')
      return
    }
    const datos = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      invitados: invitados,
      presupuesto: presupuesto,
      paquete: paquete,
      servicios: servicios,
      notas: notas,
    }
    console.log('Proforma enviada:', datos)
    alert('Proforma enviada')
  }
  return {
    tipo,
    setTipo,
    fecha,
    setFecha,
    lugar,
    setLugar,
    invitados,
    setInvitados,
    presupuesto,
    setPresupuesto,
    paquete,
    setPaquete,
    servicios,
    notas,
    setNotas,
    marcarServicio,
    enviar,
  }
}
export default Logica_Proforma
