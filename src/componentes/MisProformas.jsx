import { Link } from 'react-router-dom'
import { FileText, Plus, Pencil, Trash2 } from 'lucide-react'
import misProformas from './MisProformas/datos'
import Estilo from '../estilos/MisProformas.module.css'
import EstadoProforma from './MisProformas/EstadoProforma'
function MisProformas() {
  return (
    <>
      <div className="text-center mb-4">
        <h2 className={`fw-bold ${Estilo.titulo}`}>MIS PROFORMAS</h2>
        <p className="text-muted">AQUI PUEDES VER EL ESTADO DE TUS SOLICITUDES</p>
      </div>
      {misProformas.length === 0 ? (
        <div className={Estilo.vacio}>
          <FileText size={48} className="mb-3" />
          <p>AUN NO HAS ENVIADO NINGUNA PROFORMA</p>
          <Link to="/proformas" className={`btn ${Estilo.vacioBoton}`}>
            <Plus size={18} className="me-1" /> SOLICITAR UNA
          </Link>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center gap-3">
          {misProformas.map(p => (
            <div className="w-100" style={{ maxWidth: '500px' }} key={p.id}>
              <div className={`card ${Estilo.tarjeta}`}>
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="fw-bold m-0">{p.tipo}</h5>
                    <span className={`${Estilo.estado} ${EstadoProforma(p.estado)}`}>
                      {p.estado}
                    </span>
                  </div>
                  <p className="text-muted small m-0">FECHA: {p.fecha}</p>
                  <p className="text-muted small m-0">LUGAR: {p.lugar}</p>
                  <p className="text-muted small m-0">INVITADOS: {p.invitados}</p>
                  <p className="text-muted small">PAQUETE: {p.paquete}</p>
                  <div className="d-flex gap-2 mt-3">
                    <button type="button" className={`btn btn-sm ${Estilo.botonEditar}`}>
                      <Pencil size={14} className="me-1" /> EDITAR
                    </button>
                    <button type="button" className={`btn btn-sm ${Estilo.botonEliminar}`}>
                      <Trash2 size={14} className="me-1" /> ELIMINAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
export default MisProformas
