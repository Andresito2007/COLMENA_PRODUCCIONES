import { User, Mail, Phone, MapPin } from 'lucide-react'

// PRINCIPIO OPEN CLOSE : PARA AGREGAR UN CAMPO NUEVO SOLO SE AÑADE UN OBJETO AQUI
// PRINCIPIO DE RESPONSABILIDAD UNICA : SOLO DEFINE LA ESTRUCTURA DE LOS CAMPOS DEL PERFIL
const campos = [
  { etiqueta: 'Nombre', icono: User, nombre: 'nombre', tipo: 'text' },
  { etiqueta: 'Apellido', icono: User, nombre: 'apellido', tipo: 'text' },
  { etiqueta: 'DNI', icono: User, nombre: 'dni', tipo: 'text' },
  { etiqueta: 'Correo electrónico', icono: Mail, nombre: 'email', tipo: 'email' },
  { etiqueta: 'Teléfono', icono: Phone, nombre: 'telefono', tipo: 'tel' },
  { etiqueta: 'Dirección', icono: MapPin, nombre: 'direccion', tipo: 'text' },
]

export default campos
