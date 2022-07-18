import React from 'react';
import { Container } from './styles';

function MenuLateral({isOpen}) {
  return(
    <Container isOpen={isOpen}>
        <ul>
            <li><a href="/#">About me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#formation">Formation</a></li>
            <li><a href="#contact-me">Contact me</a></li>
        </ul>
    </Container>
  )
}

export default MenuLateral;