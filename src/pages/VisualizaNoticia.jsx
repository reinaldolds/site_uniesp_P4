import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const VisualizaNoticia = () => {
    
    const { id } = useParams()
    const [noticia, setNoticia] = useState({})
    const urlBase = 'http://localhost:3000'
    const navigate = useNavigate() 
    
    useEffect(() => {
        axios.get(`${urlBase}/noticias/${id}`)
        .then(response => {setNoticia(response.data)})
        .catch(error => console.error('Erro ao carregar a notícia:', error))
    }, [id])

  return (
    <Container className='py-4'>
        
        <Card className='mb-4 shadow-sm'>
            <Card.Body>
                <Card.Title className='mb-4'>{noticia.titulo}</Card.Title>
                <Card.Img
                    
                    src={noticia.imagemGrande}
                    alt={noticia.titulo}
                    style={{ height: '400px', objectFit: 'cover' }}
                    className='img-fluid mb-4'>
                   
                </Card.Img>
                <Card.Text>{noticia.textoCompleto}</Card.Text>
            </Card.Body>
        </Card>
        <Button variant="secondary" className="mb-3" onClick={() => navigate('/noticias')}>
            Voltar
        </Button>
    </Container>
  )
}

export default VisualizaNoticia