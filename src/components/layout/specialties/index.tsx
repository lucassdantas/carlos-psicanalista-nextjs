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
            title:`Social Media`,
            subtitle:'(Gestão de redes sociais)',
            content:`Planejamento estratégico com uma linha editorial criada exclusivamente para a sua marca, captação de conteúdo personalizada, execução e monitoramento das atividades relacionadas à presença de uma marca ou empresa nas redes sociais.`,
        },
        {
            cardName:`analysis`,
            title:`Análise de posicionamento`,
            subtitle:'',
            content:`Análise completa do seu perfil do Instagram (foto, biografia, destaques, paleta de cores, conteúdos e etc) sugestões de melhorias para deixá-lo ainda mais PROFISSIONAL para gerar conexão através da sua produção de conteúdo com sua audiência.`,
        },
        {
            cardName:`consultancy`,
            title:`Consultoria Digital Boss`,
            subtitle:'',
            content:`Um método prático com 6 pilares para você finalmente transformar seus seguidores em um ímã de clientes! 
                
                <ul>
                    <li>1 - Imagem</li>
                    <li>2 - Linguagem</li>
                    <li>3 - Produção de conteúdo</li>
                    <li>4 - Conexão nos stories</li>
                    <li>5 - Estratégias de conteúdo</li>
                    <li>6 - Ferramentas do Instagram</li>
                </ul>
            `,
        },
        {
            cardName:`mentoring`,
            title:`Mentoria Boss Power`,
            subtitle:'',
            content:`Transforme seu negócio  através do método Boss Power para você sair da estagnação. 
            Não perca a chance de se tornar uma marca forte em 2024 onde irei desenvolver todas as estratégias e plano de ação com você.`,
        },
        {
            cardName:`branding`,
            title:`Branding`,
            subtitle:'(Criação de Logotipo)',
            content:`Criação de logotipo completo com
            mini manual da marca.`,
        },

        {
            cardName:`business`,
            title:`Calendário de conteúdo`,
            subtitle:'',
            content:`Calendário de conteúdo mensal personalizado para o seu negócio com os direcionamentos que você precisa!`,
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