'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { openChat } from '@/api/whatsapp';
import { Button, Container, Article } from '@/components';

import './style.css';
import Link from 'next/link';

interface LearningCard{
    titleNumber:string;
    content:string;
    description:string;
}
const Root = ({singularFontFamily}:any) => {
  const learningCardsContent: LearningCard[] = [
    {
        titleNumber: '01',
        content: 'Terapia para Ansiedade', 
        description: 'A psicanálise ajuda a entender as raízes da ansiedade, promovendo uma vida mais equilibrada e tranquila.'
    },
    {
        titleNumber: '02',
        content: 'Relações Interpessoais',   
        description: 'Entenda como padrões inconscientes afetam suas relações e aprenda a criar vínculos mais saudáveis.'
    },
    {
        titleNumber: '03',
        content: 'Superação de Traumas',   
        description: 'Trabalhe profundamente seus traumas e encontre maneiras de seguir em frente com força e resiliência.'
    },
    {
        titleNumber: '04',
        content: 'Desenvolvimento Pessoal',   
        description: 'A psicanálise pode ajudar a identificar e remover bloqueios emocionais, permitindo que você alcance seus objetivos de vida.'
    },
    {
        titleNumber: '05',
        content: 'Depressão',   
        description: 'Compreenda as causas subjacentes da depressão e descubra caminhos para a recuperação emocional.'
    },
    {
        titleNumber: '06',
        content: 'Autoestima e Autoconfiança',   
        description: 'Aumente sua autoestima e autoconfiança ao entender e reconfigurar suas crenças sobre si mesmo.'
    },
    {
        titleNumber: '07',
        content: 'Orientação de Carreira',   
        description: 'Explore suas motivações e paixões para encontrar a carreira que realmente lhe trará satisfação.'
    },
    {
        titleNumber: '08',
        content: 'Gestão de Estresse',   
        description: 'Desenvolva técnicas para gerenciar o estresse e manter o equilíbrio em sua vida pessoal e profissional.'
    },
    {
        titleNumber: '09',
        content: 'Conflitos Familiares',   
        description: 'Trabalhe questões familiares e melhore a dinâmica dentro de sua família através da psicanálise.'
    }
];


  return (
  <Container.AutoScreenFullWidth className='learn-components'>
    <Container.AutoSizeWidth className='learn-content-container'>
      <div className='learn-panel'>
        <h2>Minhas especialidades</h2>
        <div className='learn-panel-arrow' />
      </div>
      <div className='learn-grid-items'>
        {learningCardsContent.map((learningCard:LearningCard, i) => {
          return(
            <div className={`learn-card ${learningCardsContent.length%3 !==0 && i >= learningCardsContent.length-1? 'learning-item-centered' : ''}`} key={i}>
              <h3 >{learningCard.titleNumber}</h3>
              <div className="lern-text-container">
                <p className='learn-card-title'>{learningCard.content}</p>
                <p className='learn-text-description'>{learningCard.description}</p>
              </div>
            </div>
          )
        })}
      </div>
      <Button.Root variant='primary' size='large'>Eu quero</Button.Root>
    </Container.AutoSizeWidth>
  </Container.AutoScreenFullWidth>
  )
}

export { Root };