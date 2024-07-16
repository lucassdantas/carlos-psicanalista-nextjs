import React, { HTMLAttributes, ReactNode } from 'react';

import './style.css';

interface PopupProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode };

const Root = ({ children, ...props }: PopupProps) => {
    return <div {...props} className={`ui-popup ${props.className}`}>{children}</div>
};

const Container = ({ children, ...props }: PopupProps) => {
    return <div {...props} className={`ui-popup-container ${props.className}`}>{children}</div>
};

export { Root, Container };