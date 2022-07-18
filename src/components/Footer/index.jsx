import React from 'react';
import { Container } from './styles';

function Footer() {
    function backToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

  return(
    <Container>
        <footer>
            <a href="https://www.linkedin.com/in/daniel-josias-99482a208/" target="_blanck">Linkedin</a>
            <a href="https://github.com/danieljosias" target="_blanck">GitHub</a>
            <button onClick={()=>backToTop()}>
                <span>&uarr;</span>
            </button>
        </footer>
    </Container>
  )
}

export default Footer;