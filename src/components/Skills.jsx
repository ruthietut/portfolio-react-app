// import React from 'react'
import Tailwind from '../assets/tailwind.png'
import ReactLogo from '../assets/react.png'
import Css from '../assets/css.png'
import Html from '../assets/html.png'
import Javascript from '../assets/javascript.png'
import Firebase from '../assets/firebase.png'
import Vue from '../assets/vue.png'
import Github from '../assets/github.png'
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
   {/* container*/}
   <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div >
        <p className='text-4xl font-bold inline border-b-4 border-purple-500'>Skills</p>
        <p className='py-4'>These are the technologies I have worked with.</p>
    </div>
    <div className='w-full grid grid-cols-2 sm:grid-cols-4  gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500 '>
            <img className='w-20 mx-auto' src={Html} alt="Html" />
            <p className='my-4'>Html</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500 '>
            <img className='w-20 mx-auto' src={Css} alt="Html" />
            <p className='my-4'>Css</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500 '>
            <img className='w-20 mx-auto' src={Javascript} alt="Html" />
            <p className='my-4'>JavaScript</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500 '>
            <img className='w-20 mx-auto' src={ReactLogo} alt="Html" />
            <p className='my-4'>React</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500 '>
            <img className='w-20 mx-auto' src={Github} alt="Html" />
            <p className='my-4'>Github</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500 '>
            <img className='w-20 mx-auto' src={Tailwind} alt="Html" />
            <p className='my-4'>Tailwind</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500 '>
            <img className='w-20 mx-auto' src={Vue} alt="Html" />
            <p className='my-4'>Vue</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500 '>
            <img className='w-20 mx-auto' src={Firebase} alt="Html" />
            <p className='my-4'>Firebase</p>
        </div>
    </div>
   </div>
    </div>
  )
}

export default Skills