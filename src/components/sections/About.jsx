import React from 'react'
import Container from '../layout/container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Icon from '../Icon'
import Buttonhex from '../ui/Buttonhex'
import CvIcon from '../../assets/icons/cv.png'

const About = () => {
  return (
    <Section>
        <Container>
            <div className='relative'>
                {/* masked dot  */}
                <div class="absolute inset-0 z-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#F7F7F7_60%,transparent_100%)]"></div>
                <div className='relative z-1 flex flex-col justify-between gap-5'>
                    <div className='w-full'>
                        <div className='w-fit mx-auto flex gap-2 items-center justify-center mb-5 bg-white px-2 rounded-lg border-2 border-gray-200'>
                            {/* <Icon name="messageprogramming" className="w-4 h-auto" /> */}
                            <p className='font-normal text-sm text-gray-600 '>Who I Am</p>
                        </div>
                        <h2 className='text-center'>Hii I am Anurag</h2>
                        <p className='text-center'>I'm a frontend developer specializing in React, UI Engineering & 3D user experiences.</p>
                    </div>
                    
                    <div className='flex-1 flex flex-wrap justify-center gap-4 bg-white border-border-gray border-1 p-5 rounded-2xl'>
                        <div className=' flex gap-8 justify-center items-center w-fit p-8 bg-main-bg rounded-2xl'>
                            <div>2year</div>
                            <div>2year</div>
                            <div>2year</div>
                            <div>2year</div>
                        </div>   
                        <div className=' flex gap-8 justify-center items-center w-fit p-8 bg-main-bg rounded-2xl'>
                            <div>2year</div>
                            <div>2year</div>
                            <div>2year</div>
                            <div>2year</div>
                        </div> 
                        <div className='relative w-full overflow-hidden flex justify-center p-15'>
                            {/* bg */}
                            <div className='absolute inset-0 -left-13 bg-[linear-gradient(#d4d4d44d_1px,transparent_1px),linear-gradient(90deg,#d4d4d44d_1px,transparent_1px)] bg-[size:60px_60px] backdrop-blur-sm'></div>

                            <div className='relative z-1 flex'>
                                <div className='w-15 h-15 bg-black border-1 border-gray-300'></div>
                                <div className='w-15 h-15 bg-black border-1 border-gray-300'></div>
                                <div className='w-15 h-15 bg-black border-1 border-gray-300'></div>
                                {/* <div className='w-15 h-15 bg-black border-1 border-gray-300'></div> */}
                            </div>
                        </div>                   
                    </div>
                </div>

            </div>
        </Container>
        <SectionBorder/>
    </Section>
  )
}

export default About