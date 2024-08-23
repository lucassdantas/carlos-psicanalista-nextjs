'use client'

import React from 'react';
import { Container } from '@/components';
import Image from 'next/image';
import InstagramIcon from '@/assets/icons/social-midia-instagram.svg';
import WhatsappIcon from '@/assets/icons/social-midia-wpp.svg';
import './style.css';

const Root = () => {
    const currentYear = new Date().getFullYear()
    const redirectToWhatsApp = (phoneNumber: string) => {
        const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}`;
        window.open(url, '_blank');
    };

    const sendMail = (email: string) => {
        window.location.href = email;
    }

    return (
        <Container.AutoScreenFullWidth className='footer-component'>
            <Container.AutoSizeWidth className='footer-content-container'>
                <div className='footer-left'>
                    <p className='footer-copyright'>© {currentYear} - Carlos Alberto - Todos os direitos reservados</p>
                </div>
                <div className='footer-right'>
                    <div className='footer-contact'>
                        <h4>Entre em contato</h4>
                        <section onClick={() => window.location.href = 'https://www.instagram.com/carlosalbertopsicanalista/'} className='footer-contact-item'>
                            <Image src={InstagramIcon} alt='Instagram' />
                            <p>carlosalbertopsicanalista</p>
                        </section>
                        <section onClick={() => redirectToWhatsApp('5522988246598')} className='footer-contact-item'>
                            <Image src={WhatsappIcon} alt='Whatsapp' />
                            <p>(22) 98824-6598</p>
                        </section>
                    </div>
                    <p className='footer-copyright'>Desenvolvido por <a href = 'https://www.linkedin.com/in/lucas-de-sousa-dantas/' className='copyright-diagonal' target='_blank'>Lucas Dantas</a></p>
                </div>
            </Container.AutoSizeWidth>
        </Container.AutoScreenFullWidth>
    )
};

export { Root };