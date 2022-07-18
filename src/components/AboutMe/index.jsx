import React from 'react';

import { Container } from './styles';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import perfil from '../../assets/perfil.png'


function AboutMe() {
  const {text} = useTypewriter({
    words: ['O meu nome é Daniel Josias','Sou desenvolvedor full-stack', 'Estudo programação há 2 anos', 'Sou apaixonado por tecnologia', 'Quero muito trabalhar com desenvolvimento de sistemas','Estou em busca da minha tão sonhada vaga como desenvolvedor full-stack','Será você que me dará tal oportunidade!?'],
    loop: 0,
    delaySpeed: 3000
  })

  const curriculum = 'https://drive.google.com/u/0/uc?id=1e0qDUrmqjA00qI01Ub-rNqdgvURD8DDT&export=download'

  function showNotify(){
    toast.success('Download bem sucedido!')
  }

  return(
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 5}}>
      <Container id='about'>
        <div className='left'>
          <h1>Olá, seja bem - vindo(a)!</h1>
          
            <h2>{text}<Cursor /></h2>
          
          <div className='btn__container'>
              <button><a onClick={()=>showNotify()} className='link link1' href={curriculum}>Download CV</a></button>
          </div>
        </div>
        
        <div className='right'>
          <img src={perfil} alt="foto de perfil" />
        </div>
      </Container>
    </motion.div>
  )
}

export default AboutMe;

