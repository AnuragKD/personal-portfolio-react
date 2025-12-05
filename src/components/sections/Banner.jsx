import React from 'react'
import Container from '../layout/container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Icon from '../Icon'

const Banner = () => {
  return (
    <Section>
        <Container>
            <div className='w-full flex items-center justify-center mb-5'>
              <Icon name="standout" className="w-30 h-auto text-gray-700" />
            </div>
            <h1 className='text-center'>Your startup deserves design that <br/>drives revenue</h1>
            <p className='text-center'>We design products that are simple, intutive, and build to convert wether it's your first release or your next big revamb</p>
            <button className='text-center '>
              lets connect 
            </button>
        </Container>
        <SectionBorder/>
    </Section>
  )
}

export default Banner