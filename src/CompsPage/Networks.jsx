import React from 'react';

import Network from '../Comps/Network';

import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Networks() {
    return (
        <>
        <section className='flex flex-row flex-wrap items-center justify-center gap-[20px] w-full h-auto p-[20px] bg-white dark:bg-zinc-900'>

            <Network Icon={FaFacebook} Name='Facebook' Linker='https://www.facebook.com/share/1GMJW3ckjb/?mibextid=qi2Omg'/>
            
            <Network Icon={AiFillInstagram} Name='Instagram' Linker='https://Instagram.com/yerdna.arj'/>

            <Network Icon={FaLinkedin} Name='LinkedIn' Linker='https://www.linkedin.com/in/andrey-araujo-8724992a7'/>

            <Network Icon={IoLogoWhatsapp} Name='WhatsApp'/>

            <Network Icon={MdEmail} Name='Email' Linker='mailto:andrey.araujo.ofc@gmail.com'/>

        </section>
        </>
    );
}

export default Networks;