import React from 'react';
import { Container } from '@/components';
import Image from 'next/image';
import Background from '@/assets/carlos/psicanalista-carlos-alberto (1).jpeg';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './style.css';
const Root = () => {
 
  return (
    <Container.AutoScreenFullWidth>
      <Container.AutoSizeWidth className='about-content-container'>
        <Image src={Background} alt='Background' className='about-background' />
        <div className='about-content'>
          <h1>Quem é Carlos Alberto?</h1>
          <div className='about-content-arrow' />
          <p>Carlos Alberto é um psicanalista experiente, comprometido em ajudar seus pacientes a superar desafios emocionais e a encontrar equilíbrio em suas vidas. Com anos de prática, ele utiliza a psicanálise para explorar o inconsciente, promovendo um entendimento mais profundo de si mesmo.</p>
          <div className='about-contact-info'>
            <h4>Entre em contato</h4>
            <a className='footer-contact-item' href='https://www.instagram.com/carlosalbertopsicanalista/' target='_blank'>
              <FaInstagram />
              <p>carlosalbertopsicanalista</p>
            </a>
            <a className='footer-contact-item' href='https://api.whatsapp.com/send?phone=5522988246598&text=Olá, vim do site e quero saber mais sobre seus serviços!' target='_blank'>
              <FaWhatsapp />
              <p>(22) 98824-6598</p>
            </a>

          </div>
        </div>
       
      </Container.AutoSizeWidth>
    </Container.AutoScreenFullWidth>
  )
};

export { Root };