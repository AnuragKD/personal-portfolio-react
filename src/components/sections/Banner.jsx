// import React from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Icon from '../Icon'
// import Buttonhex from '../ui/Buttonhex'
// import CvIcon from '../../assets/icons/cv.png'
import Button from '../ui/Button'
import Label from '../ui/Label'

const Banner = () => {
  return (
    <Section className='h-fit min-h-[80dvh] flex items-center'>
            <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#F7F7F7_60%,transparent_100%)]"></div>
        <Container className='z-1'>            
            <Label name="messageprogramming">Developer</Label>
            <div className='block text-center'>     
              <h1 className='relative text-center inline z-1'>
                Crafting Interfaces<br/>With Code & Creativity
              </h1>
            </div>

            <div className="pt-6 flex justify-center">
              <Button variant="secondary">Click Me</Button>
            </div>
            
            {/* <p className='text-center max-w-xl mx-auto text-gray-400'>We design products that are simple, intutive, and build to convert wether it's your first release or your next big revamb</p> */}
            {/* <button className='text-center '>
              lets connect 
            </button> */}

            {/* grid line */}
            {/* <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#F7F7F7_60%,transparent_100%)]"></div> */}

            {/* grid dot */}
            {/* <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(circle,_rgba(0,0,0,0.15)_1px,_transparent_1px)] bg-[length:20px_20px]">
            </div> */}

            {/* masked dot  */}
            {/* <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
            ></div> */}

            {/* <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(#d4d4d44d_1px,transparent_1px),linear-gradient(90deg,#d4d4d44d_1px,transparent_1px)] bg-[size:60px_60px] backdrop-blur-sm">              
            </div> */}



        </Container>
        <SectionBorder/>
    </Section>
  )
}

export default Banner