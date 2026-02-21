// import React from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Icon from '../Icon'
// import Buttonhex from '../ui/Buttonhex'
// import CvIcon from '../../assets/icons/cv.png'
import ProfileImg from '../../assets/images/anurag.webp'
import Button from '../ui/Button'
// import AnimatedStrokeSVG from '../element/ProfileDrawing'

const About = () => {


  return (
    <Section>
        <Container>
            <div className='relative flex'>
                {/* masked dot  */}
                {/* <div class="absolute inset-0 z-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#F7F7F7_60%,transparent_100%)]"></div> */}
                <div className='relative z-1 flex flex-col justify-between gap-5 border-gray-200 flex-1'>
                    <div className='w-full relative'>
                        <div className='w-fit flex gap-2 items-center justify-center mb-5 bg-white px-2 rounded-lg border-2 border-gray-200'>
                            <Icon name="messageprogramming" className="w-4 h-auto" />
                            <p className='font-normal text-sm text-gray-600 '>Who I Am</p>
                        </div>
                        <h3 className='mb-3'>Hey. I'm Anurag,</h3>
                        <h2 className='mb-4'>frondend & React Developer</h2>
                        <p className=' max-w-[800px] mx-auto mb-5'>I’m a with <strong className='text-green-700'>1.6 years</strong> of experience specializing in the React. I love crafting modern web designs with smooth animations and have a sharp eye for detail.</p>
                        <Button variant="secondary">Click Me</Button>
                                     
                        {/* <div className='w-full mt-14'>
                            <div class="flex gap-2 items-center w-fit mx-auto "> 
                                <Buttonhex/>
                                <Buttonhex>
                                <img src={CvIcon} alt="" />
                                </Buttonhex>
                                <Buttonhex/>                              
                            </div>

                            <div class="flex gap-2 items-center w-fit mx-auto -mt-3">                            
                                <Buttonhex/>
                                <Buttonhex>
                                <Icon name="linkedin" className="w-30 h-auto text-gray-700" />
                                </Buttonhex>
                                <Buttonhex>
                                <Icon name="github" className="w-30 h-auto text-gray-700" />
                                </Buttonhex>
                                <Buttonhex/>    
                            </div>

                            <div class="flex gap-2 items-center w-fit mx-auto -mt-3">                            
                                <Buttonhex/>
                                <Buttonhex/>
                                <Buttonhex/>
                            </div>
                        </div> */}
                    </div>     
                </div>
                <div className='w-[40%] px-10 flex justify-center'>
                    <img className='-mt-8 border-primary-color aspect-[2/3] object-bottom  object-cover h-auto rounded-b-full' src={ProfileImg} alt="" />
                </div>
                    {/* <AnimatedStrokeSVG /> */}
                <div className='flex flex-col gap-5 border-gray-200 flex-1 justify-end'>
                    <ul className='flex flex-col w-full gap-5'>
                        <li className='flex flex-row gap-4 w-full justify-end'>                      
                            <div className='flex flex-col items-end text-end'>
                                <h4 className='font-primary-font text-3xl'>1+</h4>
                                <p><a href="">Years Experience</a></p>
                            </div>
                            <Icon name="experience" className="w-12 h-auto opacity-90" />
                        </li>
                        <li className='flex flex-row gap-4 w-full justify-end'>                      
                            <div className='flex flex-col items-end text-end'>
                                <h4 className='font-primary-font text-3xl'>10+</h4>
                                <p>Completed Projects</p>
                            </div>
                            <Icon name="project" className="w-12 h-auto opacity-90" />
                        </li>
                        <li className='flex flex-row gap-4 w-full justify-end'>                      
                            <div className='flex flex-col items-end text-end'>
                                <h4 className='font-primary-font text-3xl'>100+</h4>
                                <p>Happy Clients</p>
                            </div>
                            <Icon name="client" className="w-12 h-auto opacity-90" />
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