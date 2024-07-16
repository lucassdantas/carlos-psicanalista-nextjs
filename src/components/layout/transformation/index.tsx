'use client'

import React from 'react';
import { openChat } from '@/api/whatsapp';
import { Container, Button } from '@/components';
import Image from 'next/image';
import BackgroundMobile from '@/assets/tempImage.jpg';

import './style.css';

const Root = () => {
    return (
        <Container.AutoScreenFullWidth className='transformation-component'>
            <Container.AutoSizeWidth className='transformation-content-container'>
                <Image className='transformation-background-mobile' src={BackgroundMobile} alt='Background Image Thiálita' />
                <div className='transformation-content'>
                    <h1><span className='transformation-content-extra-bold'>Título</span> e comece a <span className='transformation-content-bold'>título</span> lorem</h1>
                    <p className='transformation-content-regular'>lorem</p>
                    <Button.Root onClick={() => openChat()} variant='primary' size='medium'>Fale comigo no WhatsApp</Button.Root>
                </div>
            </Container.AutoSizeWidth>
        </Container.AutoScreenFullWidth>
    );
}

export { Root };