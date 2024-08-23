import React from 'react';
import { Vidaloka } from "next/font/google";
import { About, Advantage, Consultancy, Footer, Learn } from '@/components';

const vidaloka = Vidaloka({weight:'400', subsets: ['latin'] })

export default function DigitalBoss() {
    return (
        <main>
          <Consultancy.Root singularFontFamily={vidaloka} />
          <Learn.Root singularFontFamily={vidaloka}/>
          <Advantage.Root/>
          <About.Root />
          <Footer.Root />
        </main>
    )
};