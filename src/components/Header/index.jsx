import React, { useState } from "react";
import { Container } from "./styles";
import {motion} from 'framer-motion'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import MenuLateral from '../MenuLateral/index'

function Header() {
  const [isOpen,setIsOpen] = useState(true)

  function showMenu(){
    setIsOpen(!isOpen)
  }

  return (
    <Container isOpen={isOpen}>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 3}}>
      <header>
        <h2>Portfo<span>lio</span></h2>

        <div className="menu__nav">
          <a href="/#" className="btn-neon">About me</a>
          <a href="#skills" className="btn-neon">Skills</a>
          <a href="#projects" className="btn-neon">Projects</a>
          <a href="#formation" className="btn-neon">Formation</a>
          <a href="#contact-me" className="btn-neon">Contact Me</a>
        </div>

        {isOpen? <GiHamburgerMenu className='menu__hamburguer' onClick={showMenu} /> : <><RiCloseLine className="btn__close" onClick={showMenu} /></>}
      </header>

       {!isOpen && <MenuLateral isOpen={isOpen} />}
      </motion.div>
    </Container>
  );
}
export default Header;
