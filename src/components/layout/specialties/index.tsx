'use client';

import React, { ReactNode, useState } from 'react';
import { openChat } from '@/api/whatsapp';
import { Button, Container, Article } from '@/components';

import './style.css';

interface Articles{
    cardName:string,
    title:string,
    subtitle:string,
    content:string, 
}
const Root = () => {

    const articles = [
        {
            cardName:`social-midia`,
            title:`Título`,
            subtitle:'subtitulo',
            content:`conteúdo.`,
        },
        
    ]
    return (
        <Container.AutoScreenFullWidth className='specialties-components'>
            <Container.AutoSizeWidth className='specialties-content-container'>
                <div className='specialties-panel'>
                    <h1>Minhas <span className='specialties-panel-extra-bold'>especialidades:</span></h1>
                    <div className='specialties-panel-arrow' />
                </div>
                <div className='specialties-grid-items'>
                    {articles.map((article:Articles, i) => <Article.Root className='specialties-card' key={i} cardName={article.cardName} title={article.title} content={article.content} subtitle={article.subtitle}></Article.Root>)}
                </div>
                <Button.Root onClick={() => openChat()} variant='primary' size='large'>Eu quero</Button.Root>
            </Container.AutoSizeWidth>
        </Container.AutoScreenFullWidth>
    )
}

export { Root };