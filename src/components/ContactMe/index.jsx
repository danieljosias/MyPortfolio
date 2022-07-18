import React, { useRef } from 'react';
import { Container } from './styles';
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';

function ContactMe() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_8lfcrkt',form.current, 'LHqi6vFPl9MyAXra-')
        .then((result) => {
            toast.success('E-mail recebido com sucesso!');
        }, (error) => {
            console.log(error)
        });
    };

  return(
    <Container id="contact-me">
        <h2>/*Contact me*/</h2>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" placeholder='Digite seu nome..' required/>

            <label>E-mail</label>
            <input type="email" name="email" placeholder='Digite seu e-mail..' required/>

            <label>Message</label>
            <textarea name="message" placeholder='Digite sua mensagem..' required/>

            <button type="submit" className='link link1'>Enviar</button>
        </form>
    </Container>
  )
}

export default ContactMe;