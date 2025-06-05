import React from 'react'
import Inicial from './pages/Inicial'
import Faculdade from './pages/Faculdade'
import CustomNavbar from './components/CustomNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import DpoLgpd from './pages/Dpolgpd'
import Noticias from './pages/Noticias'
import VisualizaNoticia from './pages/VisualizaNoticia'

const App = () => {
  return (
    <div>
         <BrowserRouter>
    <CustomNavbar/>
      <Container className='my-4'>
        <Routes>
          <Route path='/' element={<Inicial/>}/>
          <Route path='/a-faculdade' element={<Faculdade/>}/>
          <Route path='/dpo-lgpd' element={<DpoLgpd/>}/> 
          <Route path='/noticias' element={<Noticias/>}/>
          <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia/>}/>
        </Routes>
      </Container>
    </BrowserRouter>

     
    </div>
  )
}

export default App