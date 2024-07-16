'use client'
import React, { HTMLAttributes, ReactNode, useState } from 'react';

import './style.css';

interface ArticleProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    cardName: string,
    title:string,
    subtitle:string, 
    content:string
};

const Root = ({ children, cardName, title, subtitle, content, ...props }: ArticleProps) => {
    const [hiddenContent, setHiddenContent] = useState<string>('hidden')
    const [hiddenTitleAndSubtitle, setHiddenTitleAndSubtitle] = useState<string>('')

    const flipArticle = () => {
        if(hiddenContent){
            setHiddenContent('')
            setHiddenTitleAndSubtitle('hidden')
            return
        }
        setHiddenContent('hidden')
        setHiddenTitleAndSubtitle('')
    }
    return (
        <article {...props}  className={`card card-${cardName}`} onMouseEnter={() => flipArticle()} onMouseLeave={() => flipArticle()}>
            <h4 className={'specialitie-title ' + hiddenTitleAndSubtitle}>{title}</h4>
            {subtitle!=''? <p className={'specialitie-subtitle ' + hiddenTitleAndSubtitle}>{subtitle}</p>:''}
            <div dangerouslySetInnerHTML={{ __html: content }} className={'specialitie-content ' + hiddenContent}></div>
            
            {children}
        </article>
    )
};

export { Root };