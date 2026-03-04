// import React from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Button from '../ui/Button'
import Label from '../ui/Label'

const Projects = () => {
  return (
    <Section className='h-fit flex items-center bg-black-bg'>
            {/* <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#F7F7F7_60%,transparent_100%)]"></div> */}
        <Container className='z-1 w-full'>            
            <Label name="messageprogramming">Projects</Label>
            <h2 className='text-white text-center mb-6'>Projects</h2>
            <div className='flex w-full justify-center gap-6'>     
                <div className='w-1/3 h-50 text-white p-6 border-1 border-border-gray bg-white/10 rounded-2xl'>
                    <h3 className='text-white'>
                        Personal Portfolio
                    </h3>
                    <img src="" alt="" />
                </div>
                <div className='w-1/3 h-50 text-white p-6 border-1 border-border-gray bg-white/10 rounded-2xl'>
                    <h3 className='text-white'>
                        Personal Portfolio
                    </h3>
                    <img src="" alt="" />
                </div>
                <div className='w-1/3 h-50 text-white p-6 border-1 border-border-gray bg-white/10 rounded-2xl'>
                    <h3 className='text-white'>
                        Personal Portfolio
                    </h3>
                    <img src="" alt="" />
                </div>
            </div>

            <div className="pt-6 flex justify-center">
              <Button variant="secondary">Click Me</Button>
            </div>
        </Container>
        <SectionBorder/>
    </Section>
  )
}

export default Projects