// 2DO COMPONENTE
import { Link } from 'react-router-dom'
import {ArrowRight } from 'lucide-react'
import Estilo from '../estilos/Inicio.module.css'
import Datitos from './Inicio/Datitos'
function Inicio() {
  return (
    <>
      <div className={`rounded-4 p-4 mb-4 text-white ${Estilo.banner}`}>
        <div className="row align-items-center">
          <div className="col-md-7">
            <h2 className="text-white fw-bold">HAZ QUE TU EVENTO SEA INOLVIDABLE</h2>
            <p className="mb-3 opacity-75">ENCUENTRA LOS MEJORES PAQUETES Y SERVICIOS PARA CADA OCASION</p>
            <Link to="/proformas" className="btn btn-light fw-semibold px-4">
              SOLICITA TU PROFORMA AQUI <ArrowRight size={18} className="ms-1" />
            </Link>
          </div>
          <div className="col-md-5 text-center d-none d-md-block">
            <img src="https://t3.ftcdn.net/jpg/11/70/18/76/240_F_1170187666_eZcJhkXG5IJZ4yn04cLobLpTT4KN92tv.jpg" alt="" className={`rounded-3 shadow ${Estilo.imagen}`} />
          </div>
        </div>
      </div>
     <h5 className="fw-bold m-0">CATEGORIA DE SERVICIOS POPULARES</h5>
     <h1></h1>
     <div className="d-flex flex-wrap gap-3 pb-2 mb-4">
        {Datitos.map(({ imagen, nombre }) => (
       <div className="flex-shrink-0" key={nombre} style={{ width: '160px', minWidth: '160px' }}>
         <div className="bg-light rounded-3 mb-2" style={{ height: '140px' }}>
           <img src={imagen} className={`w-100 h-100 object-fit-cover rounded-3 ${Estilo.imagen}`} />
         </div>
        <small>{nombre}</small>
       </div>
        ))}
     </div>


    </>
  )
}

export default Inicio
