import Separator from '../components/element/Separator'
import Banner from '../components/sections/Banner'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import ContactForm from '../components/sections/ContactForm'

export default function Home(){
  return (
    <>
      <Banner/>
      <Separator/>
      <About/>
      <Separator/>
      <Experience/>
      <Separator className='bg-black-bg'/>
      <Projects/>
      <Skills/>
      <Separator/>
      <ContactForm/>
    </>
  )
}
