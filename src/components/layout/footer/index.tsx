'use client'

import React from 'react';
import { Container } from '@/components';
import Image from 'next/image';
import Logo from '@/assets/tempImage.jpg';
import InstagramIcon from '@/assets/icons/social-midia-instagram.svg';
import EmailIcon from '@/assets/icons/social-midia-email.svg';
import WhatsappIcon from '@/assets/icons/social-midia-wpp.svg';
import './style.css';

const Root = () => {
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
                    <Image className='footer-logo' src={Logo} alt='Logo' />
                    <p className='footer-copyright'>2024 - Carlos Alberto - Todos os direitos reservados</p>
                </div>
                <div className='footer-right'>
                    <div className='footer-contact'>
                        <h1>Entre em contato</h1>
                        <section onClick={() => window.location.href = 'https://www.instagram.com/#/'} className='footer-contact-item'>
                            <Image src={InstagramIcon} alt='Instagram' />
                            <p>instagram</p>
                        </section>
                        <section onClick={() => sendMail('mailto:@gmail.com')} className='footer-contact-item'>
                            <Image src={EmailIcon} alt='Email' />
                            <p>email</p>
                        </section>
                        <section onClick={() => redirectToWhatsApp('por numero')} className='footer-contact-item'>
                            <Image src={WhatsappIcon} alt='Whatsapp' />
                            <p>por numero</p>
                        </section>
                        <section onClick={() => redirectToWhatsApp('por numero')} className='footer-contact-item'>
                            <Image src={WhatsappIcon} alt='Whatsapp' />
                            <p>Suporte equipe: por numero </p>
                        </section>
                    </div>
                    <p className='footer-copyright'>Desenvolvido por <span onClick={() => window.location.href = 'https://www.linkedin.com/in/lucas-de-sousa-dantas/'} className='copyright-diagonal'>Lucas Dantas</span></p>
                </div>
            </Container.AutoSizeWidth>
        </Container.AutoScreenFullWidth>
    )
};

export { Root };