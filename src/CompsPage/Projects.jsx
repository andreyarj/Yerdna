import React from 'react';

import Project from '../Comps/Project';

function Projects() {
    return (
        <>
        <section className='flex flex-row flex-wrap items-center justify-center gap-[20px] w-full h-auto p-[20px] bg-white dark:bg-zinc-900'>

            <Project />

            <Project />

            <Project />

        </section>
        </>
    );
}

export default Projects;