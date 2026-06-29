import { Routes, Route } from 'react-router-dom'
import Nav_Renderizado from './Nav_Renderizado.jsx'
import Login from './Login.jsx'
import Inicio from './Inicio.jsx'
import Paquetes from './Paquetes.jsx'
import Proformas from './SolicitarProforma.jsx'
import Miperfil from './MiPerfil.jsx'
import MisProformas from './MisProformas.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<Nav_Renderizado />}>
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/paquetes' element={<Paquetes />} />
        <Route path='/proformas' element={<Proformas />} />
        <Route path='/mis_proformas' element={<MisProformas />} />
        <Route path='/mi_perfil' element={<Miperfil />} />
      </Route>
    </Routes>
  )
}
export default App
