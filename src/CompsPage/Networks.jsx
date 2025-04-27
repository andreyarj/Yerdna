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

            <Network Icon={FaFacebook} Name='Facebook'/>
            
            <Network Icon={AiFillInstagram} Name='Instagram'/>

            <Network Icon={FaLinkedin} Name='LinkedIn'/>

            <Network Icon={IoLogoWhatsapp} Name='WhatsApp'/>

            <Network Icon={MdEmail} Name='Email'/>

        </section>
        </>
    );
}

export default Networks;