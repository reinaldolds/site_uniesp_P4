import React from 'react'
import { Container, Carousel} from 'react-bootstrap'



const BannerAd = () => {
  return (
    <Container className='my-4 p-0' fluid>
        <Carousel fade interval={5000} controls={true} indicators={true}>
            {/* Slide 1 */}
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src='/banner1.png' 
                    alt='Vestibular 2025.1' 
                    style={{ borderRadius: '8px'}}                
                />
            </Carousel.Item>
            {/* Slide 2 */}
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src='/banner2.png' 
                    alt='Inova Uniesp 2025' 
                    style={{ borderRadius: '8px'}}                 
                />
            </Carousel.Item>
            
        </Carousel>
    </Container>
  )
}

export default BannerAd