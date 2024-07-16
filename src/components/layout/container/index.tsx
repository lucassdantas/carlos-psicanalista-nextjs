import React, { HTMLAttributes, ReactNode } from 'react';

import './style.css';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode };

const AutoScreenFullWidth = ({ children, ...props }: ContainerProps) => {
    return <div {...props} className={`${props.className} auto-screen-width`}>{children}</div>
};

const AutoSizeWidth = ({ children, ...props }: ContainerProps) => {
    return <div {...props} className={`${props.className} auto-size-width`}>{children}</div>
};

export { AutoScreenFullWidth, AutoSizeWidth };