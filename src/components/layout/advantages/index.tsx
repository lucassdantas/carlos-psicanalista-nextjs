'use client'

import React from 'react';
import { Container, Button } from '@/components';

import './style.css';
import { MdOutlinePsychology } from 'react-icons/md';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { LuUserCircle } from 'react-icons/lu';
import { IoCalendarNumberOutline } from 'react-icons/io5';

export const Root = () => {
  return (
    <Container.AutoScreenFullWidth className='advantage'>
      <Container.AutoSizeWidth >
        <div className="row advantage-icons-container">
          <div className="col">
            <MdOutlinePsychology className='icon'/>
            <p>Experiência e Conhecimento Profundo</p>
          </div>
          <div className="col">
            <RiEmotionHappyLine  className='icon'/>
            <p>Ambiente Confortável e Seguro</p>
          </div>
          <div className="col">
            <LuUserCircle  className='icon'/>
            <p>Abordagem Centrada no Paciente</p>
          </div>
          <div className="col">
            <IoCalendarNumberOutline  className='icon'/>
            <p>Disponibilidade e Acessibilidade</p>
          </div>
        </div>
        <Button.Root variant='primary' size='large'>EU QUERO</Button.Root>
      </Container.AutoSizeWidth>
    </Container.AutoScreenFullWidth>
)
}