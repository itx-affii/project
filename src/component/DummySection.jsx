import React from 'react'
import { course, tablet } from '../constants'

const DummySection = () => {
    return (
        // <div className='h-screen w-full bg-[#EFEEF0]'>
        //     <div className='h-screen flex-col'>
        //         <div className=' bg-black h-full flex-1'>
        //             <h1 className='text-[#2E94ED] text-3xl'>CLASS ACTION EDUCATION</h1>

        //         </div>
        //         <div className=' bg-slate-400 h-full flex-1'>


        //         </div>

        //     </div>
        // </div>
        <div className="h-screen flex bg-[#EFEEF0]">
            <div className="h-auto flex absolute bg-[#EFEEF0]">
                <div className="w-2/4  h-full">
                    <h1 className='text-[#2E94ED] text-3xl text-center mt-32 ml-10' style={{ fontFamily: "Glory", fontWeight: 600 }}>CLASS ACTION EDUCATION</h1>
                    <h1 className='text-black text-6xl text-center mt-5 ml-44 tracking-wider' style={{ fontFamily: "Glory", fontWeight: 800 }}>
                        EMPOWERING THE <br /> NEXT GENERATION</h1>
                    <h1 className='text-black text-[32px] mt-8 ml-56 absolute' style={{ fontFamily: "Glory", fontWeight: 100 }}>
                        MULTI-SUBJECT, ONE-STOP E-LEARNING<br /> PLATFORM. <span className='text-[#FD2979]'>AGES 4-18 & PARENTS </span> </h1>
                </div>
                <div className="w-2/4">
                    <div className='h-full w-full'>
                        <img src={tablet} className='relative top-24 z-50 scale-125 right-[20%]' />
                    </div>
                </div>
            </div>
            <div className='relative h-fit top-1/2 mt-14'>
                <img src={course} className='z-40 w-[70%] ml-52' />
                <h1 className='text-3xl text-center' style={{ fontFamily: "Glory", fontWeight: 'bold' }}>ACADEMICS, THE ARTS, DIGITAL, LIFE, MUSIC, PARENTING, SPORTS & WELLNESS SKILLS.</h1>
            </div>
        </div>
    )
}

export default DummySection