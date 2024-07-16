import React from 'react';
import { Container } from '@/components';
import Image from 'next/image';
import Background from '@/assets/tempImage.jpg';

import './style.css';

const Root = () => {
    return (
        <Container.AutoScreenFullWidth>
            <Container.AutoSizeWidth className='about-content-container'>
                <Image src={Background} alt='Background' className='about-background' />
                <div className='about-content'>
                    <h1>Quem é <span className='about-content-extra-bold'>Carlos Alberto?</span></h1>
                    <div className='about-content-arrow' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minima vero modi aut dolor molestiae. Pariatur eaque voluptatibus minus magni numquam atque sapiente blanditiis ducimus cupiditate. Quo accusamus quibusdam praesentium.</p>
                </div>
            </Container.AutoSizeWidth>
        </Container.AutoScreenFullWidth>
    )
};

export { Root };