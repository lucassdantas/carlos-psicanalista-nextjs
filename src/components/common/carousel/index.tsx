'use client'

import React, { ReactNode, useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css'

interface RootProps {
    children: ReactNode;
}

export function Root({ children }: RootProps) {
    const [slidesToShow, setSlidesToShow] = useState(3); 
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 970) { 
                setSlidesToShow(1);
            } else {
                setSlidesToShow(3); 
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };

    return (
        <Slider className='ui-slider-style' {...settings}>
            {children}
        </Slider>
    );
}
