import React, { HTMLAttributes, ReactNode } from 'react';

import './style.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    variant: 'primary' | 'secondary',
    size: 'small' | 'medium' | 'large',
    type?:'submit' | 'button'
};

const Root = ({ children, variant, size, type='button', ...props }: ButtonProps) => {
    return <button {...props} type={type} className={`ui-button ${props.className} ui-button-${variant} ui-button-${size}`}>{children}</button>
};

export { Root };