'use client'

import React from 'react';
import { Container, Button } from '@/components';

import './style.css';
import Link from 'next/link';

export const Root = () => {
  return (
    <Container.AutoScreenFullWidth className='advantage'>
      <Container.AutoSizeWidth >
        <div className="row advantage-icons-container">
          <div className="col">
            <p>Experiência e Conhecimento Profundo</p>
          </div>
          <div className="col">
            <p>Ambiente Confortável e Seguro</p>
          </div>
          <div className="col">
            <p>Abordagem Centrada no Paciente</p>
          </div>
          <div className="col">
            <p>Disponibilidade e Acessibilidade</p>
          </div>
        </div>
        <Button.Root variant='primary' size='large'>EU QUERO</Button.Root>
      </Container.AutoSizeWidth>
    </Container.AutoScreenFullWidth>
)
}