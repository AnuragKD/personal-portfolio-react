// import React from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Icon from '../Icon'
import Buttonhex from '../ui/Buttonhex'
import CvIcon from '../../assets/icons/cv.png'
import ProfileImg from '../../assets/images/anurag.png'
// import PhotoFrame from '../../assets/images/Photo-frame.png'
import Button from '../ui/Button'
import Label from '../ui/Label'
// import AnimatedStrokeSVG from '../element/ProfileDrawing'

const About = () => {


  return (
    <Section>
        <Container>
            <div className='relative flex flex-col'>                
                <div className='relative z-1 flex flex-row flex-wrap justify-between gap-0 border-gray-200 flex-1 '>
                    <div className='w-full relative flex-1'>
                        <Label name="messageprogramming" className='!mx-0'>Who I Am</Label>
                        <h3 className='mb-3'>Hey. I'm Anurag,</h3>
                        <h2 className='mb-4'>frondend & <br></br>React Developer</h2>
                        <p className=' mb-5'>I’m a with <strong className='text-green-700'>1.6 years</strong> of experience specializing in the React. I love crafting modern web designs with smooth animations and have a sharp eye for detail.</p>
                        <Button variant="secondary">Click Me</Button>                                                        
                    </div>     
                    <div className='w-full md:w-[40%] flex justify-center items-center -order-1 md:order-none mb-6 md:mb-0'>
                        <div className='relative flex w-[50%] mt-10'>
                            <div className='relative z-1 w-full h-fit flex flex-col gap-5 p-2 border-1 border-gray-400 bg-white/10 backdrop-blur-sm shadow-2xl rounded-2xl'>
                                {/* <img className='z-1 w-full h-auto  object-contain ' src={PhotoFrame} alt="" /> */}
                                {/* <img className='absolute inset-0 w-full h-full pl-[14%] object-center object-cover flex' src={ProfileImg} alt=""/> */}
                                {/* <svg className='absolute inset-0 w-full h-full z-1 ' xmlns="http://www.w3.org/2000/svg" width="1256" height="1793" viewBox="0 0 1256 1793" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M46.7227 788.223V98.1602H938.91L1167.01 326.262V1745.91H289.031V1040.2C289.031 1033.75 286.41 1027.91 282.18 1023.69L46.7227 788.223ZM50.5508 1462.3V1575.49L193.262 1716.81V1603.63L50.5508 1462.3ZM50.5508 1285.21V1398.39L193.262 1539.72V1426.53L50.5508 1285.21ZM50.5508 1108.09V1221.28L193.262 1362.6V1249.41L50.5508 1108.09ZM50.5508 930.973V1044.16L193.262 1185.48V1072.3L50.5508 930.973ZM1079.06 121.711L1255.18 297.832V499.492L1213.73 540.539V1769.28C1213.73 1782.18 1203.27 1792.64 1190.37 1792.64H265.672C252.762 1792.64 242.301 1782.18 242.301 1769.28V1049.88L10.043 817.609C3.97266 813.391 0 806.371 0 798.422V74.8008C0 61.9023 10.4609 51.4414 23.3633 51.4414H697.062L748 0H957.352L1079.06 121.711Z" fill="#0E0F0E"/>
                                </svg> */}
                                <div className='z-1 flex h-fit w-full rounded-xl'>
                                    <svg className='w-full h-auto' xmlns="http://www.w3.org/2000/svg" width="1688" height="120" viewBox="0 0 1688 120" fill="none">
                                        <path className='fill-primary-color/80' d="M1241.38 24.043C1241.35 24.043 1241.31 24.0586 1241.28 24.0859L1224.08 41.2812C1224.04 41.3242 1224.03 41.3906 1224.06 41.4453C1224.08 41.4961 1224.12 41.5313 1224.19 41.5352H1224.17C1224.17 41.5391 1224.19 41.5391 1224.19 41.5391C1224.19 41.5391 1224.2 41.5391 1224.2 41.5352H1224.21L1670.56 41.5391C1670.6 41.5391 1670.65 41.5234 1670.67 41.4961C1670.67 41.4922 1670.67 41.4922 1670.67 41.4922L1687.87 24.2969C1687.92 24.2539 1687.92 24.1914 1687.9 24.1367C1687.88 24.0781 1687.83 24.043 1687.76 24.043H1241.38ZM1255.76 0H1193.4C1193.4 0 1193.4 0 1193.38 0C1193.33 0 1193.29 0.0195315 1193.26 0.0546875L1122.24 71.0586L1121.31 72H878.654L877.705 71.0586L830.705 24.0586C830.673 24.0195 830.615 24 830.564 24H257.388C257.337 24 257.287 24.0195 257.251 24.0547L233.306 48H17.4038C17.3999 48 17.3921 48 17.3882 48C17.3374 48 17.2905 48.0195 17.2515 48.0547L0.0561478 65.2539C0.00146082 65.3086 -0.0141649 65.3906 0.0131791 65.4609C0.0444291 65.5352 0.114741 65.582 0.18896 65.582L761.306 65.5781L809.255 113.523C809.294 113.563 809.333 113.582 809.384 113.582C809.396 113.582 809.404 113.582 809.404 113.578L1142.56 113.582C1142.61 113.582 1142.67 113.559 1142.7 113.523L1255.9 0.328125C1255.95 0.273437 1255.97 0.191407 1255.94 0.117188C1255.92 0.0468755 1255.85 0 1255.76 0ZM15.978 89.4219V96.1562H758.583L781.595 119.172L786.365 114.41L761.373 89.4219H15.978Z" fill="black"/>
                                    </svg>
                                </div>
                                <img className='w-full aspect-5/6 object-center border-1 border-gray-400 object-contain flex rounded-xl' src={ProfileImg} alt=""/>
                            </div>
                            <div className='z-0 absolute inset-0 -rotate-15 origin-bottom-right  w-full h-fit flex p-2 border-1 border-gray-400 bg-blue-400/10 rounded-xl shadow-xl'>
                                <div className='w-full aspect-4/5 object-center object-cover flex rounded-2xl'></div>
                            </div>
                            <div className='z-0 absolute inset-0 rotate-15 origin-bottom-right  w-full h-fit flex p-2 border-1 border-gray-400 bg-red-400/10 rounded-xl shadow-xl'>
                                <div className='w-full aspect-4/5 object-center object-cover flex rounded-2xl'></div>
                            </div>
                        </div>
                    </div>

                </div>
                    
                <div className='relative flex mt-10 md:mt-14 lg:mt-20 flex-wrap gap-3 md:gap-6 lg:gap-10 border-gray-200 flex-1 justify-center'>
                    <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#F7F7F7_60%,transparent_100%)]"></div>
                    <ul className='z-1 order-2 lg:order-1 lg:flex-1 flex flex-wrap flex-row lg:flex-col items-start justify-center gap-3 md:gap-6'>
                        <li className='flex flex-row-reverse gap-2 md:gap-4 w-fit justify-start bg-primary-color/10 border-1 border-primary-color px-2 pr-3 md:px-4 py-2 rounded-2xl'>                      
                            <div className='flex flex-col items-start text-start'>
                                <h4 className='font-primary-font text-lg md:text-xl xl:text-2xl '>1.5+</h4>
                                <p className='small-para'><a href="">Experience</a></p>
                            </div>
                            <Icon name="experience" className="w-8 md:w-10 lg:w-12 h-auto opacity-60" />
                        </li>
                        <li className='flex flex-row-reverse gap-2 md:gap-4 w-fit justify-start bg-primary-color/10 border-1 border-primary-color px-2 pr-3 md:px-4 py-2 rounded-2xl'>                      
                            <div className='flex flex-col items-start text-start'>
                                <h4 className='font-primary-font text-lg md:text-xl xl:text-2xl'>5+</h4>
                                <p className='small-para'>Projects</p>
                            </div>
                            <Icon name="project" className="w-8 md:w-10 lg:w-12 h-auto opacity-60" />
                        </li>
                    </ul>  
                    <div className='order-3 lg:order-2 w-full lg:w-fit flex flex-col justify-center mb-6 md:mb-0'>
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
                    <ul className='z-3 order-2 lg:order-3 lg:flex-1 flex flex-wrap flex-row lg:flex-col items-start lg:items-end justify-center gap-3 md:gap-6'>
                        
                        <li className='flex flex-row-reverse lg:flex-row gap-2 md:gap-4 w-fit justify-end bg-primary-color/10 border-1 border-primary-color px-2 pr-3 md:px-4 py-2 rounded-2xl'>        
                            <div className='flex flex-col items-start lg:items-end text-start lg:text-end'>
                                <h4 className='font-primary-font text-lg md:text-xl xl:text-2xl'>100+</h4>
                                <p className='small-para'>Clients</p>
                            </div>
                            <Icon name="client" className="w-8 md:w-10 lg:w-12 h-auto opacity-60" />
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