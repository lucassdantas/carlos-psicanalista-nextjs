'use client'

import React from 'react';
import { Container } from '@/components';
import './style.css';

const Root = () => {
    const currentYear = new Date().getFullYear()
    return (
        <Container.AutoScreenFullWidth className='footer-component'>
            <Container.AutoSizeWidth className='footer-content-container'>
                <div className=''>
                  <p className='footer-copyright'>Desenvolvido por <a href = 'https://www.linkedin.com/in/lucas-de-sousa-dantas/' className='copyright-diagonal' target='_blank'>Lucas Dantas</a></p>
                  <p className='footer-copyright'>© {currentYear} - Carlos Alberto - Todos os direitos reservados</p>
                </div>
            </Container.AutoSizeWidth>
        </Container.AutoScreenFullWidth>
    )
};

export { Root };