'use client'

import React from 'react';
import { Container, Button } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import CarlosImage from '@/assets/carlos/psicanalista-carlos-alberto (3).jpeg'
import './style.css';

export const Root = ({singularFontFamily}:any) => {
    return (
      <Container.AutoScreenFullWidth>
        <Container.AutoSizeWidth className='consultancy'>
          <div className="consultancy-container consultancy-row">
            <div className='consultancy-content-container consultancy-content-col-60'>
              <div className="consultancy-title-container">
                <h1 className='consultancy-pretitle'>Transforme sua vida com a Psicanálise</h1>
              </div>
              <div className="consultancy-description-container">
                <p className='consultancy-content'>Descubra o poder do autoconhecimento e do crescimento pessoal com Carlos Alberto, um psicanalista dedicado ao seu bem-estar.</p>
              </div>
              <Link href='#bonus-price'>
                <Button.Root variant='white' size='large'>Eu quero</Button.Root>
              </Link>
            </div>
            <div className='consultancy-content-col-40'>
              <Image src={CarlosImage} alt='Foto do Carlos Alberto Psicanalista' className='carlos-img'/>
            </div>
          </div>
        </Container.AutoSizeWidth>
      </Container.AutoScreenFullWidth>
    )
}