import React from 'react';

import Project from '../Comps/Project';

function Projects() {
    return (
        <>
        <section className='flex flex-row flex-wrap items-center justify-center gap-[20px] w-full h-auto p-[20px] bg-white dark:bg-zinc-900'>

            <Project Title='Levaê' Paragraf='Este é um site de Mudança ficticio, Sem fins comerciais, Apenas para acrescentar conhecimentos web, Feito em React Js e Taiwind Css.' Linker='https://levae.netlify.app'/>

            <Project Title='Em Breve' Paragraf='Em desenvolvimento...'/>

            <Project Title='Em Breve' Paragraf='Em desenvolvimento...'/>

            <Project Title='Em Breve' Paragraf='Em desenvolvimento...'/>

        </section>
        </>
    );
}

export default Projects;