// PRINCIPIO OPEN CLOSE : COMPONENTE REUTILIZABLE, SE PUEDEN AGREGAR NUEVOS CAMPOS SIN MODIFICARLO
// PRINCIPIO DE RESPONSABILIDAD UNICA : SOLO RENDERIZA UN CAMPO DE TEXTO CON ETIQUETA E ICONO
function CampoInput({ etiqueta, icono: Icono, tipo = 'text', valor, alCambiar, nombre }) {
  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">
        {Icono && <Icono size={35} className="me-1" />} {etiqueta}
      </label>
      <input
        type={tipo}
        className="form-control"
        name={nombre}
        value={valor}
        onChange={alCambiar}
        placeholder='INGRESE CAMPO A ACTUALIZAR'
      />
    </div>
  )
}

export default CampoInput
