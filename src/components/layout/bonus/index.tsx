'use client';

import React from 'react';
import { Button, Container} from '@/components';
import { useCountdown } from '@/hooks/useCountdown';
import './style.css';

const Root = ({singularFontFamily}:any) => {
    const time = useCountdown();

    return (
        <Container.AutoScreenFullWidth className='bonus-components'>
            <Container.AutoSizeWidth className='bonus-container'>
                    <div className="bonus-title-container">
                        <h1>Tenho um <span className='bonus-panel-extra-bold'>bônus especial:</span></h1>
                        <div className='bonus-panel-arrow' />
                    </div>
                    <div className="bonus-content-container">
                        <div className={`bonus-time-row ${singularFontFamily.className}`}>
                            <div className={`bonus-time-col`}><span>{`${time.hours}`}</span></div>
                            <div className={`bonus-time-col`}><span>{`${time.minutes}`}</span></div>
                            <div className={`bonus-time-col`}><span>{`${time.seconds}`}</span></div>
                        </div>
                        <div className="bonus-list-container">
                            <ul>
                                <li>Análise de posicionamento com direcionamentos</li>
                                <li>Materiais complementares de apoio </li>
                                <li>Aula bônus com mentores convidados</li>
                                <li>1 mês durante a consultoria de suporte via WhatsApp</li>
                            </ul>
                        </div>
                        <div className="bonus-price-container" id='bonus-price'>
                            <div className="bonus-price-content-container">
                                <p className="bonus-old-price">R$1.497</p>
                                <p className="bonus-current-price">R$997</p>
                                <p className="bonus-portion-price"> em até 6x sem juros</p>
                            </div>
                            <a href='https://pag.ae/7-xfxsNjr'>
                                <Button.Root  className='bonus-price-button' variant='primary' size='large'>Apenas 3 vagas disponíveis</Button.Root>
                            </a>
                        </div>
                    </div>
  
            </Container.AutoSizeWidth>
        </Container.AutoScreenFullWidth>
    )
}

export { Root };