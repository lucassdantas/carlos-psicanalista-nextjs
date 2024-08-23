import React, { HTMLAttributes, ReactNode } from 'react';

import './style.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    variant: 'primary' | 'secondary' | 'white',
    size: 'small' | 'medium' | 'large',
    type?:'submit' | 'button'
};

const Root = ({ children, variant, size, type='button', ...props }: ButtonProps) => {
    return <a href='https://api.whatsapp.com/send?phone=5522988246598&text=Olá, vim do site e quero saber mais sobre seus serviços!' target='_blank' className={`ui-button ${props.className} ui-button-${variant} ui-button-${size}`}>{children}</a>
};

export { Root };