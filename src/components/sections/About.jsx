// import React from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Icon from '../Icon'
import Buttonhex from '../ui/Buttonhex'
import CvIcon from '../../assets/icons/cv.png'
import ProfileImg from '../../assets/images/anurag.webp'
import Button from '../ui/Button'
import Label from '../ui/Label'
// import AnimatedStrokeSVG from '../element/ProfileDrawing'

const About = () => {


  return (
    <Section>
        <Container>
            <div className='relative flex flex-col'>
                {/* masked dot  */}
                {/* <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#F7F7F7_60%,transparent_100%)]"></div> */}
                <div className='relative z-1 flex flex-row flex-wrap justify-between gap-0 border-gray-200 flex-1 '>
                    <div className='w-full md:w-[30%] pr-0 md:pr-10 flex justify-center items-center -order-1 md:order-none mb-6 md:mb-0'>
                        <img className='w-full max-w-[280px] h-fit border-primary-color aspect-square object-center  object-cover flex rounded-full' src={ProfileImg} alt="" />
                    </div>
                    <div className='w-full relative flex-1'>
                        <Label name="messageprogramming" className='!mx-0'>Who I Am</Label>
                        <h3 className='mb-3'>Hey. I'm Anurag,</h3>
                        <h2 className='mb-4'>frondend & <br></br>React Developer</h2>
                        <p className=' mb-5'>I’m a with <strong className='text-green-700'>1.6 years</strong> of experience specializing in the React. I love crafting modern web designs with smooth animations and have a sharp eye for detail.</p>
                        <Button variant="secondary">Click Me</Button>                                                        
                    </div>     

                </div>
                    {/* <AnimatedStrokeSVG /> */}

                    
                <div className='relative flex mt-10 md:mt-14 lg:mt-20 flex-wrap gap-6 lg:gap-10 border-gray-200 flex-1 justify-center'>
                    <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#F7F7F7_60%,transparent_100%)]"></div>
                    <ul className='z-1 order-2 lg:order-1 lg:flex-1 flex flex-wrap lg:flex-col items-start justify-center gap-6 '>
                        <li className='flex flex-row-reverse gap-4 w-fit justify-start bg-red-400/10 border-1 border-red-200 p-4 rounded-2xl'>                      
                            <div className='flex flex-col items-start text-start'>
                                <h4 className='font-primary-font text-xl md:text-3xl'>1+</h4>
                                <p className='small-para'><a href="">Years Experience</a></p>
                            </div>
                            <Icon name="experience" className="w-10 md:w-12 h-auto opacity-90" />
                        </li>
                        <li className='flex flex-row-reverse gap-4 w-fit justify-start bg-red-400/10 border-1 border-red-200 p-4 rounded-2xl'>                      
                            <div className='flex flex-col items-start text-start'>
                                <h4 className='font-primary-font text-xl md:text-3xl'>10+</h4>
                                <p className='small-para'>Completed Projects</p>
                            </div>
                            <Icon name="project" className="w-10 md:w-12 h-auto opacity-90" />
                        </li>
                    </ul>  
                    <div className='order-1 lg:order-2 w-full lg:w-fit flex flex-col justify-center relative before:absolute before:inset-0 '>
                        <div className="flex gap-2 items-center w-fit mx-auto "> 
                            <Buttonhex className='hidden md:flex'/>
                            <Buttonhex >
                            <img src={CvIcon} alt="" />
                            </Buttonhex>
                            <Buttonhex className='hidden md:flex'/>                              
                        </div>

                        <div className="flex gap-2 items-center w-fit mx-auto -mt-3">                            
                            <Buttonhex className='hidden md:flex'/>
                            <Buttonhex>
                            <Icon name="linkedin" className="w-30 h-auto text-gray-700" />
                            </Buttonhex>
                            <Buttonhex>
                            <Icon name="github" className="w-30 h-auto text-gray-700" />
                            </Buttonhex>
                            <Buttonhex className='hidden md:flex'/>    
                        </div>

                        <div className="flex gap-2 items-center w-fit mx-auto -mt-3">                            
                            <Buttonhex className='hidden md:flex'/>
                            <Buttonhex className='hidden md:flex'/>
                            <Buttonhex className='hidden md:flex'/>
                        </div>
                    </div>
                    <ul className='z-3 order-2 lg:order-3 lg:flex-1 flex flex-wrap flex-col lg:flex-col items-start lg:items-end justify-center gap-6'>
                        
                        <li className='flex flex-row-reverse lg:flex-row gap-4 w-fit justify-end bg-red-400/10 border-1 border-red-200 p-4 rounded-2xl'>        
                            <div className='flex flex-col items-start lg:items-end text-start lg:text-end'>
                                <h4 className='font-primary-font text-xl md:text-3xl'>100+</h4>
                                <p className='small-para'>Happy Clients</p>
                            </div>
                            <Icon name="client" className="w-10 md:w-12 h-auto opacity-90" />
                        </li>
                    </ul>                                                                              
                </div>
            </div>
        </Container>
        <SectionBorder/>
    </Section>
  )
}

export default About