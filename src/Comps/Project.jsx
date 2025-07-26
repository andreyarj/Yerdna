import React from 'react';

function Project({Title, Paragraf, Linker}) {
    return (
        <>
        <div className='flex flex-col flex-nowrap items-start justify-start gap-[5px] w-[280px] h-[180px] p-[10px] bg-zinc-50 dark:bg-zinc-800 rounded-[10px]'>

            <h1 className='w-full h-auto font-Menda text-[1.25rem] text-orange-400'>{Title}</h1>

            <p className='w-full h-[90px] font-Stara text-[.9rem] text-zinc-900 dark:text-white'>{Paragraf}</p>

            <a href={Linker} target='_blank' rel='noreferrer' className='md-ripples px-[30px] py-[5px] font-Stara text-white text-[1rem] bg-orange-400 rounded-[100px]'>View</a>

        </div>
        </>
    );
}

export default Project;