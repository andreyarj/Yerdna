import React from 'react';

function Network({ Icon , Name , Linker}) {
    return (
        <>
        <a href={Linker} target='_blank'  className='md-ripples flex flex-col flex-nowrap items-start justify-center gap-[10px] w-[120px] h-[80px] p-[10px] bg-zinc-50 dark:bg-zinc-800 rounded-[10px]'>

                <Icon className='text-orange-400 text-[1.5rem]'/>

                <h1 className='w-full h-auto text-left font-Stara text-orange-400 text-[1rem]'>{Name}</h1>

        </a>
        </>
    );
}

export default Network;