// 5QUINTO COMPONENTE
import { Send, Type, Calendar, MapPin, Users, DollarSign } from 'lucide-react'
import { tiposEvento, paquetesOpciones, serviciosAdicionales } from './SolicitarProforma/datos'
import Logica_Proforma from './SolicitarProforma/Logica_Proforma'
import Estilo from '../estilos/SolicitarProforma.module.css'

function SolicitarProforma() {
  const {tipo, setTipo,fecha, setFecha,lugar, setLugar,invitados, setInvitados,presupuesto, setPresupuesto,paquete, setPaquete,servicios,notas, setNotas,marcarServicio,enviar,}= Logica_Proforma()
  return (
    <>
      <div className="text-center mb-4">
        <h2 className={`fw-bold ${Estilo.titulo}`}>SOLICITAR PROFORMA</h2>
        <p className="text-muted">CUENTANOS DE TU EVENTO Y SOLICITALO AQUI</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className={`card ${Estilo.tarjeta}`}>
            <div className="card-body p-4">
              <form onSubmit={enviar}>
                <div className="mb-3">
                  <label className="form-label fw-semibold"><Type size={16} className="me-1" /> TIPO DE EVENTO</label>
                  <select
                    className="form-select"
                    name="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  >
                    <option value="">TIPO</option>
                    {tiposEvento.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold"><Calendar size={16} className="me-1" /> FECHA</label>
                    <input
                      type="date"
                      className="form-control"
                      name="fecha"
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold"><MapPin size={16} className="me-1" /> LUGAR</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lugar"
                      placeholder="Ciudad, dirección"
                      value={lugar}
                      onChange={(e) => setLugar(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold"><Users size={16} className="me-1" /> INVITADOS</label>
                    <input
                      type="number"
                      className="form-control"
                      name="invitados"
                      placeholder="Ej: 100"
                      value={invitados}
                      onChange={(e) => setInvitados(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold"><DollarSign size={16} className="me-1" /> PRESUPUESTO</label>
                    <input
                      type="number"
                      className="form-control"
                      name="presupuesto"
                      placeholder="Ej: 1000"
                      value={presupuesto}
                      onChange={(e) => setPresupuesto(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">PAQUETE</label>
                  <div className="d-flex gap-2 flex-wrap">
                    {paquetesOpciones.map(p => (
                      <div className="form-check" key={p}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paquete"
                          id={p}
                          value={p}
                          checked={paquete === p}
                          onChange={(e) => setPaquete(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor={p}>{p}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">SERVICIO ADICIONAL</label>
                  <div className="row g-2">
                    {serviciosAdicionales.map(s => (
                      <div className="col-6 col-md-3" key={s}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={s}
                            value={s}
                            checked={servicios.includes(s)}
                            onChange={marcarServicio}
                          />
                          <label className="form-check-label" htmlFor={s}>{s}</label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">COMENTARIO</label>
                  <textarea
                    className="form-control"
                    name="notas"
                    rows={3}
                    placeholder="Comentario"
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className={`btn ${Estilo.boton}`}>
                    <Send size={18} className="me-1" /> ENVIAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SolicitarProforma
