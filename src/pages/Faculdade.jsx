import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const Faculdade = () => {
  return (
    <Container className='py-4'>
        <h2>A Faculdade</h2>
            <Card className='mb-4 shadow-sm'>
                        <Card.Body className='text-justify'>
                            
                           <p>
                            A Faculdade UNIESP é uma instituição comprometida com a excelência no ensino e no desenvolvimento de habilidades para o mercado de trabalho...
                            </p>
                            <p>
                            Nossos cursos são projetados para formar profissionais capacitados e conscientes de seu papel na sociedade...
                            </p>
                            
                        </Card.Body>
            </Card>
            <Row className='mb-4'>
            <Col md={4}>
            {/* Card 1 */}
                <Card className='text-center h-100 shadow-sm'>
                    <Card.Img 
                        variant='top'
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                        alt="Campus life"
                        style={{ height: '200px', objectFit: 'cover' }}
                        className='img-fluid'
                    />
                    <Card.Body>                        
                        <Card.Title>Vida no Campus</Card.Title>
                        <Card.Text>
                            A vida no campus da Faculdade UNIESP é vibrante e cheia de oportunidades para os alunos se envolverem em atividades extracurriculares, eventos culturais e sociais, além de promover o aprendizado colaborativo e a construção de amizades duradouras.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
            <Col md={4}>
            {/* Card 2 */}
                <Card className='text-center h-100 shadow-sm'>
                    <Card.Img 
                        variant='top'
                        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                        alt="Biblioteca"
                        style={{ height: '200px', objectFit: 'cover' }}
                        className='img-fluid'
                    />
                    <Card.Body>                        
                        <Card.Title>Biblioteca</Card.Title>
                        <Card.Text>
                            A biblioteca da Faculdade UNIESP é um espaço moderno e bem equipado, oferecendo uma vasta coleção de livros, periódicos e recursos digitais para apoiar o aprendizado e a pesquisa dos alunos.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
            <Col md={4}>
            {/* Card 3 */}
                <Card className='text-center h-100 shadow-sm'>
                    <Card.Img 
                        variant='top'
                        src="https://images.unsplash.com/photo-1652974731232-efc86a9bd985"
                        alt="Bloco central"
                        style={{ height: '200px', objectFit: 'cover' }}
                        className='img-fluid'
                    />
                    <Card.Body>                        
                        <Card.Title>Bloco central</Card.Title>
                        <Card.Text>
                            O bloco central da Faculdade UNIESP é o coração do campus, onde os alunos encontram salas de aula modernas, coordenação, auditórios, secretaria e atendimento ao aluno.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>

        </Row>

    </Container>
  )
}

export default Faculdade