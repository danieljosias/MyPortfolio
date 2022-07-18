import React from 'react';

import { Container } from './styles';
import projects from './projects';
import {settings} from './settings'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Projects() {
    return(
        <Container id='projects'>
            <div className="wrapper">
                <h2>/*Projects*/</h2>
                <p>Projetos mais recentes</p>
                <Slider {...settings} className="carousel">
                    {projects.map((project,index)=>{
                        return <div className='card' key={index}>
                            <div className='card__inner'>
                                <img src={project.img} alt={project.name} />
                                <div className='card__right'>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <button>
                                        <a className='link link1'
                                        href={project.link}
                                        target='_blanck'
                                        >Ver mais &rarr;</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    })}
                </Slider>
                </div>
        </Container>
      )
}

export default Projects