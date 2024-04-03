"use client"
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Galaxy() {

    useGSAP(() =>{
    gsap.from("#galaxy",{
       x: 200,
       opacity: 0,
       duration: 4,
       delay: 2,
    })
    })
  return (
    <div id='galaxy' className='absolute flex justify-center opacity-100 -top-80 -left-20  md:-top-80 md:left-40 md:rotate-45 overflow-hidden  h-[90rem] w-56 rotate-[40deg]   bg-gradient-to-r from-transparent via-blue-300/20  to-transparent'>
      <div className='bg-white h-[90rem] w-0.5 blur-xl'></div>
    </div>

)}

export default Galaxy