import React from 'react';

import ButtonContateMe from '../Comps/ButtonContateMe';
import Icon from '../Comps/Icon';

function Header() {
    return (
        <>
        <header className='z-10 fixed top-0 left-0 flex flex-row flex-nowrap items-center justify-between w-full h-[80px] px-[20px] bg-white dark:bg-zinc-900 shadow-lg hover:shadow-2xl transition .3s'>

            <Icon />

            <ButtonContateMe />

        </header>
        </>
    );
}

export default Header;