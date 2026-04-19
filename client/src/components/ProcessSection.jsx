import React from 'react'
import { motion } from "framer-motion"

import strategy from '../assets/images/process-strategy.png'
import design from '../assets/images/process-2.png'
import development from '../assets/images/process-3.png'
import launch from '../assets/images/process-4.png'

const fadeInLeft = {
    hidden: { opacity: 0, x: -80, filter: "blur(10px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
}

const fadeInRight = {
    hidden: { opacity: 0, x: 80, filter: "blur(10px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
}

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const steps = [
    {
        key: 'strategy',
        src: strategy,
        title: 'STRATEGY',
        desc: 'We map the competitive landscape and identify fracture points where your brand can exert maximum leverage.',
        textSide: 'left',
    },
    {
        key: 'design',
        src: design,
        title: 'DESIGN',
        desc: 'We translate strategy into a high-octane visual language defining your digital presence.',
        textSide: 'right',
    },
    {
        key: 'development',
        src: development,
        title: 'DEVELOPMENT',
        desc: 'Built with precision. Fast, secure, and scalable systems for global deployment.',
      
        textSide: 'left',
    },
    {
        key: 'launch',
        src: launch,
        title: 'LAUNCH',
        desc: 'System online. We launch with maximum impact and monitor every metric.',
       
        textSide: 'right',
    },
]

const ProcessSection = () => {
    return (
        <section className="font-head bg-[#0a0a0a]" id="services">
            <div className="max-w-425 mx-auto overflow-x-hidden py-10 md:py-32 px-8 md:px-24">

              
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 text-center"
                >
                    <span className="text-third-color font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                        04 / EXECUTION
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black uppercase text-white">
                        THE KINETIC CYCLE
                    </h1>
                </motion.div>

                {steps.map((step) => {
                    const isTextLeft = step.textSide === 'left'

                    const TextBlock = (
                        <motion.div
                            variants={isTextLeft ? fadeInLeft : fadeInRight}
                            className={`mx-2 md:mx-6 ${isTextLeft ? 'lg:text-right' : 'lg:text-left'}`}
                        >
                            <h3 className=" text-2xl md:text-4xl font-bold uppercase mb-4 md:mb-6 text-white">
                                {step.title}
                            </h3>
                            <p className="text-[#ababab] text-md lg:text-lg">
                                {step.desc}
                            </p>
                        </motion.div>
                    )

                    const ImageBlock = (
                        <motion.div variants={isTextLeft ? fadeInRight : fadeInLeft}>
                            <img
                                src={step.src}
                                alt={step.key}
                                className="w-full mt-3 md:mt-0 aspect-video object-cover grayscale opacity-40 border shadow-2xl"
                            />
                        </motion.div>
                    )

                    return (
                        <motion.div
                            key={step.key}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="relative "
                        >
                            <div className="absolute left-1/2 w-px h-full bg-red-500 hidden lg:block" />
                          
                            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rotate-45 shadow-[0_0_20px_rgba(255,0,0,0.6)]" />

                          
                            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-25 items-center">

                                {isTextLeft ? (
                                    <>
                                   
                                        <div className="lg:hidden">{ImageBlock}</div>
                                        <div className="lg:hidden">{TextBlock}</div>

                                     
                                        <div className="hidden lg:block">{TextBlock}</div>
                                        <div className="hidden lg:block">{ImageBlock}</div>
                                    </>
                                ) : (
                                    <>
                                      
                                        <div className="lg:hidden">{ImageBlock}</div>
                                        <div className="lg:hidden">{TextBlock}</div>

                                        <div className="hidden lg:block">{ImageBlock}</div>
                                        <div className="hidden lg:block">{TextBlock}</div>
                                    </>
                                )}

                            </div>
                        </motion.div>
                    )
                })}

            </div>
        </section>
    )
}

export default ProcessSection
















// import React from 'react'
// import strategy from '../assets/images/process-strategy.png'
// import design from '../assets/images/process-2.png'
// import development from '../assets/images/process-3.png'
// import launch from '../assets/images/process-4.png'
// const ProcessSection = () => {
//     return (
//         <section className="font-head bg-[#0a0a0a]" id='services'>
//             <div className='max-w-425  mx-auto py-10 md:py-32 px-8 md:px-24 " '>
//                 <div className=' mb-24 text-center'>
//                     <span className="text-[#ff8e7d] font-headline font-bold tracking-[0.2em] uppercase text-sm mb-4 block">04 / EXECUTION</span>
//                     <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-24 text-white" >THE KINETIC CYCLE</h1>
//                 </div>

//                 {/* {strategy} */}
//                 <div className='relative'>
//                     {/* <!-- Vertical Line --> */}
//                     <div className=" absolute left-1/2 w-px h-full bg-red-500 hidden lg:block"></div>
//                     <div className=' relative grid grid-cols-1 lg:grid-cols-2 gap-25 items-center'>
//                         <div className='lg:text-right lg:pr order-2 lg:order-1 mx-6'>
//                             <h3 className="font-headline text-4xl font-bold uppercase mb-6 text-white">STRATEGY</h3>
//                             <p className='font-body text-on-surface-varianttext-md lg:text-lg text-[#ababab]'>
//                                 We map the competitive landscape and identify the fracture points where your brand can exert maximum leverage. No guesswork, only architectural planning.</p>
//                         </div>

//                         <div className="relative order-1 lg:order-2">
//                             <div className="hidden lg:block absolute left-[-5rem] top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rotate-45 "></div>
//                             <div className="w-full aspect-video bg-surface-container relative z-0">
//                                 <img src={strategy} alt="Strategy" className='w-full h-full object-cover grayscale opacity-40 border shadow-2xl' />
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//                 {/* {design} */}
//                 <div className='relative'>
//                     <div className=" absolute left-1/2 w-px h-full bg-red-500 hidden lg:block"></div>
//                     <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-22 items-center'>

//                         <div className="relative order-1 lg:order-1">
//                             <div className="w-full aspect-video bg-surface-container relative z-0">
//                                 <img src={design} alt="Strategy" className='w-full h-full object-cover grayscale opacity-40 border shadow-2xl' />
//                             </div>
//                         </div>
//                         <div className='relative lg:text-left lg:pr order-2 lg:order-1 '>
//                             <div className="hidden lg:block absolute  left-[-1.5rem] top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rotate-45 "></div>
//                             <h3 className="font-headline text-4xl font-bold uppercase mb-6 text-white mx-6">Design</h3>
//                             <p className='font-body text-on-surface-variant text-md lg:text-lg text-[#ababab] mx-6'>
//                                 The visualization of the monolith. We translate strategy into a high-octane visual language that defines your digital presence as the singular authority</p>
//                         </div>
//                     </div>


//                     {/* <div className='w-full aspect-video bg-surface-container'>
//                     <img src={design} alt="Design" className='w-full h-full object-cover grayscale opacity-40' />
//                 </div> */}

//                 </div>


//                 {/* {development} */}
//                 <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-22 items-center'>
//                     <div className=" absolute left-1/2 w-px h-full bg-red-500 hidden lg:block"></div>

//                     <div className='lg:text-right lg:pr order-2 lg:order-1 mr-7'>
//                         <h3 className="font-headline text-4xl font-bold uppercase mb-6 text-white">Development</h3>
//                         <p className='font-body text-on-surface-variant text-md lg:text-lg text-[#ababab]'>
//                             Forging the digital metal. Our engineers build with military precision, ensuring your platform is fast, secure, and ready for global deployment</p>
//                     </div>
//                     <div className='relative w-full aspect-video bg-surface-container order-1'>
//                         <div className="hidden lg:block absolute left-[-5rem] top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rotate-45 "></div>
//                         <img src={development} alt="Development" className='w-full h-full object-cover grayscale opacity-40 border shadow-2xl' />
//                     </div>
//                 </div>



//                 {/* {launch} */}
//                 <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-22 items-center'>
//                     <div className=" absolute left-1/2 w-px h-full bg-red-500 hidden lg:block"></div>

//                     <div className=' relative lg:text-left lg:pr order-2 lg:order-1'>
//                         <div className="hidden lg:block absolute left-[-1.5rem] top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rotate-45 "></div>
//                         <h3 className="font-headline text-4xl font-bold uppercase mb-6 text-white mx-6">Launch</h3>
//                         <p className='font-body text-on-surface-variant text-md lg:text-lg text-[#ababab] mx-6'>
//                             System online. We don't just "go live"—we launch with maximum impact, monitoring every metric to ensure your digital dominance is immediate.</p>
//                     </div>
//                     <div className='w-full aspect-video bg-surface-container'>
//                         <img src={launch} alt="Launch" className='w-full h-full object-cover grayscale opacity-40 border shadow-2xl' />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ProcessSection