import React from 'react';
import { Container } from './styles';
import courses from './courses.js'

function Formation() {
  return(
    <Container id='formation'>
        <h2>/*Formation*/</h2>
        <p>Meus certificados</p>

        <div className='card__container'>
            {courses.map(course=>{
                 return <div className='card' key={course.id}>
                    <img src={course.img} alt={course.title} />
                
                    <div className='card__inner'>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                    </div>
                </div>
            })}
        </div>
    </Container>
  )
}

export default Formation;