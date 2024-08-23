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
            <p>Consultoria <span>individual</span></p>
          </div>
          <div className="col">
            <p><span>4 encontros</span> online</p>
          </div>
          <div className="col">
            <p><span>Suporte</span> para dúvidas</p>
          </div>
          <div className="col">
            <p><span>7 dias</span> de garantia</p>
          </div>
        </div>
        <Button.Root variant='primary' size='large'>EU QUERO</Button.Root>
      </Container.AutoSizeWidth>
    </Container.AutoScreenFullWidth>
)
}