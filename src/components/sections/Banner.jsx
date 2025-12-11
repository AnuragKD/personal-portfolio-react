import React from 'react'
import Container from '../layout/container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Icon from '../Icon'
import Buttonhex from '../ui/Buttonhex'
import CvIcon from '../../assets/icons/cv.png'

const Banner = () => {
  return (
    <Section>
        <Container>
            <div className='w-fit mx-auto flex gap-2 items-center justify-center mb-5 bg-white px-2 rounded-lg border-2 border-gray-200'>
              <Icon name="messageprogramming" className="w-4 h-auto" />
              <p className='font-normal text-sm text-gray-600 '>Developer</p>
            </div>
            <h1 className='text-center'>Your startup deserves design that <br/>drives revenue</h1>
            <p className='text-center max-w-xl mx-auto text-gray-400'>We design products that are simple, intutive, and build to convert wether it's your first release or your next big revamb</p>
            {/* <button className='text-center '>
              lets connect 
            </button> */}

            <div className='w-full mt-14'>
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
            </div>

            {/* grid line */}
            {/* <div class="min-h-screen bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]">
            </div> */}

            {/* grid dot */}
            {/* <div class="min-h-screen bg-[radial-gradient(circle,_rgba(0,0,0,0.15)_1px,_transparent_1px)] bg-[length:20px_20px]">
            </div> */}

            {/* masked dot  */}
            <div class="h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
            ></div>

            {/* <div class="min-h-screen bg-[linear-gradient(#d4d4d44d_1px,transparent_1px),linear-gradient(90deg,#d4d4d44d_1px,transparent_1px)] bg-[size:60px_60px] backdrop-blur-sm">              
            </div> */}



        </Container>
        <SectionBorder/>
    </Section>
  )
}

export default Banner