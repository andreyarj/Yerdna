import React from 'react';
import ButtonContateMe from '../Comps/ButtonContateMe';

function About() {
    return (
        <>
        <section className='flex flex-col flex-nowrap items-start justify-center gap-[10px] w-full h-auto p-[20px] mt-[80px] dark:bg-zinc-900'>

            <h1 className='w-full h-auto font-Menda text-[1.25rem] text-orange-400'>Desenvolvimento UI e UX</h1>

            <p className='w-full font-Stara text-zinc-900 dark:text-white text-[.9rem]'>Olá! Eu sou Andrey, Designer de UI/UX apaixonado por criar experiências digitais simples, funcionais e centradas no usuário.</p>

            <p className='w-full font-Stara text-zinc-900 dark:text-white text-[.9rem]'>Acredito no design como ferramenta de empatia e conexão, E claro, Interfaces bonitas também contam.</p>

            <ButtonContateMe />

        </section>
        </>
    );
}

export default About;