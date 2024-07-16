'use client'

import React, { ReactNode, useState } from 'react';
import { Button, Carousel, Container } from '@/components';
import { openChat } from '@/api/whatsapp';

import './style.css';

type CaseInformation ={
    cardImage:ReactNode;
}
interface Cases{
    title:string; 
    boldTitle:string; 
    caseInformations:CaseInformation[];
    powerBossClass?:string;
    wppNumber:string;
}
const Root = ({title, boldTitle, caseInformations, powerBossClass, wppNumber}:Cases) => {
    return (
        <Container.AutoScreenFullWidth>
            <Container.AutoSizeWidth className='cases-component'>
                <div className='cases-panel'>
                    <h1>{title} <span className='cases-extra-bold'>{boldTitle}</span></h1>
                    <div className='cases-arrow' />
                </div>

                <div className={`cases-carousel${powerBossClass? powerBossClass:''}`}>
                    <Carousel.Root>
                        {caseInformations.map((item, index) => (<GridItem key={index} cardImage={item.cardImage} />))}
                    </Carousel.Root>
                </div>
                <Button.Root onClick={() => openChat(wppNumber)} variant='primary' size='large' >Quero mais informações</Button.Root>
            </Container.AutoSizeWidth>
        </Container.AutoScreenFullWidth>
    )
};

const GridItem = ({ cardImage }: { cardImage: ReactNode }) => {
    return (
        <div className='card'>
            {cardImage}
        </div>
    )
}

export { Root };