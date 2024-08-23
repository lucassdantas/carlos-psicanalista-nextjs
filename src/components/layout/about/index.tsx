import React from 'react';
import { Container } from '@/components';
import Image from 'next/image';
import Background from '@/assets/carlos/psicanalista-carlos-alberto (1).jpeg';

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
        </div>
      </Container.AutoSizeWidth>
    </Container.AutoScreenFullWidth>
  )
};

export { Root };