import React from 'react'
import { course, tablet } from '../constants'
const DummySection = () => {
    return (
        // <div className="h-screen bg-[#EFEEF0]">
        //     <div className='w-full flex flex-wrap h-screen'>
        //         <div className='w-full md:w-1/2  h-full'>
        //             <h1 className='text-[#2E94ED] text-3xl text-center mt-32 ml-10' style={{ fontFamily: "Glory", fontWeight: 600 }}>
        //                 CLASS ACTION EDUCATION
        //             </h1>
        //             <h1 className='text-black text-6xl text-center mt-5 ml-44 tracking-wider' style={{ fontFamily: "Glory", fontWeight: 800 }}>
        //                 EMPOWERING THE <br /> NEXT GENERATION
        //             </h1>
        //             <h1 className='text-black text-[32px] mt-8 ml-56 absolute' style={{ fontFamily: "Glory", fontWeight: 100 }}>
        //                 MULTI-SUBJECT, ONE-STOP E-LEARNING<br /> PLATFORM. <span className='text-[#FD2979]'>
        //                     AGES 4-18 & PARENTS
        //                 </span>
        //             </h1>
        //         </div>
        //         <div className='w-full md:w-1/2 bg-slate-600 h-full'>
        //         </div>
        //     </div>
        // </div>
        <div className="h-screen absolute bg-[#EFEEF0]">
            <div className="h-auto flex flex-wrap absolute bg-[#EFEEF0]">
                <div className="w-full md:w-2/4  h-full">
                    <div>
                        <h1 className='text-[#2E94ED] text-3xl text-center mt-32 md:ml-8' style={{ fontFamily: "Glory", fontWeight: 600 }}>CLASS ACTION EDUCATION</h1>
                        <h1 className='text-black text-4xl md:text-5xl lg:text-6xl text-center mt-5 md:ml-44 tracking-wider' style={{ fontFamily: "Glory", fontWeight: 800 }}>
                            EMPOWERING THE <br className='hidden md:block' /> NEXT GENERATION</h1>
                        <h1 className='text-black text-2xl md:text-[32px] mt-3 text-center md:text-start md:ml-56 absolute' style={{ fontFamily: "Glory", fontWeight: 100 }}>
                            MULTI-SUBJECT, ONE-STOP E-LEARNING<br className='hidden md:inline-block' /> PLATFORM. <span className='text-[#FD2979]'>AGES 4-18 & PARENTS </span> </h1>
                    </div>
                </div>
                <div className="w-full h-full md:w-2/4">
                    <div className='h-full w-full'>
                        <img src={tablet} className='relative top-20 md:top-24 z-50 scale-90 md:scale-125 md:right-[20%]' />
                    </div>
                </div>
            </div>
            <div className='relative h-fit top-[67%] md:top-1/2 mt-14 bg-[#EFEEF0]'>
                <img src={course} className='z-40 w-[80%] mx-auto md:ml-52' />
                <h1 className='text-2xl md:text-3xl mt-10 md:-mt-3 text-center' style={{ fontFamily: "Glory", fontWeight: 'bold' }}>ACADEMICS, THE ARTS, DIGITAL, LIFE, MUSIC, PARENTING, SPORTS & WELLNESS SKILLS.</h1>
            </div>
        </div>
    )
}

export default DummySection