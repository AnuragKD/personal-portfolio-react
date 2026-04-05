import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Icon from '../Icon'
import AnimateIn from '../element/AnimateIn'
import Label from '../ui/Label'

const Burst = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    {[0, 30, 60, 90, 120, 150].map((deg, i) => (
       <line key={i} x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${deg} 50 50)`} />
    ))}
    <circle cx="50" cy="50" r="10" fill="white" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
  </svg>
)

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const About = () => {
  return (
    <Section id="about" className="overflow-hidden relative bg-[#f6f5f3]">
      <Container className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10 w-full py-16 md:py-24">
        
        {/* LEFT COLUMN */}
        <div className="flex-1 lg:w-5/12 flex flex-col justify-between items-start gap-12 ">
          <AnimateIn variant="fade-up" delay={0} duration={700} className="flex flex-col items-start w-full">
             
             {/* Top Label matching reference top wire loop */}             
             <Label name="messageprogramming" className="!mx-0 inline-flex">About Me</Label>
             <h3 class="mb-4 text-gray-500 font-normal text-base md:text-lg font-[Inter]">Hey, I'm Anurag</h3>
             <h2 className="font-[BricolageGrotesque] leading-[1.05] tracking-tight text-gray-900 mb-8">
               Frontend<br/>React Developer
             </h2>
             
             <div className="flex flex-wrap gap-4 items-center mb-8">
                <a href="/resume.pdf" download="Anurag_CV.pdf" aria-label="Download CV">
                  <Button variant="primary" className="!bg-[#111] !text-white !rounded-full !px-8 !py-3 hover:!bg-primary-color transition-colors shadow-xl shadow-black/10">Download CV</Button>
                </a>
                <Button variant="secondary" onClick={() => scrollTo('projects')}>
                  My Works
                </Button>
             </div>
             
             <p className="text-gray-500 font-[Inter] text-sm md:text-base leading-[1.8] max-w-full lg:max-w-sm">
               Specializing in engineering robust, scalable web applications. Passionate about transforming complex problems into elegant, minimalist interfaces using React.js and Next.js.
             </p>
          </AnimateIn>

          {/* Bottom Left Stat Card matching "1 million+" */}
          <AnimateIn variant="fade-up" delay={200} duration={800} className="w-full lg:max-w-md pt-4 lg:pt-10">
             <Card className="!bg-[#e5e1dc] !border-none shadow-sm relative p-8 md:p-10 !rounded-[2rem] w-full">
                <h2 className="text-4xl md:text-5xl font-[BricolageGrotesque] text-gray-900 mb-3 tracking-tight font-semibold">2+ Years</h2>
                <p className="text-sm font-[Inter] text-gray-600">Professional robust web development exp.</p>
                
                {/* Floating pill underneath mapping to reference aesthetic */}
                <div className="absolute -bottom-6 left-8 right-8 bg-white py-3 px-6 rounded-full shadow-lg border border-gray-100 flex items-center justify-between">
                   <div className="flex items-center gap-1">
                     <div className="w-2 h-2 rounded-full border border-gray-700"></div>
                     <div className="w-1 h-1 rounded-full bg-gray-700 mx-1"></div>
                     <div className="w-1 h-1 rounded-full bg-gray-700"></div>
                   </div>
                   {/* Wave SVG */}
                   <svg viewBox="0 0 100 10" className="w-20 text-gray-400 stroke-current stroke-[2]" fill="none">
                     <path d="M0,5 Q10,10 20,5 T40,5 T60,5 T80,5 T100,5" strokeLinecap="round"/>
                   </svg>
                </div>
             </Card>
          </AnimateIn>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 w-full lg:w-7/12 relative">

          <AnimateIn variant="blur-in" delay={300} duration={1000} className="w-full relative h-full">

            {/* Top Right Floating Stat */}
            {/* <div className="absolute -top-6 right-4 z-20 text-right flex flex-col items-end">
              <h3 className="text-2xl md:text-[28px] font-[BricolageGrotesque] font-bold text-gray-900 mb-1 leading-none tracking-tight">4+ Live</h3>
              <p className="text-[10px] uppercase font-[Inter] tracking-wide text-gray-500 font-semibold border-t border-gray-300 pt-2 float-right mt-1">Deployed Apps</p>
            </div> */}

            {/* Central Frame wrapping the Image and routing lines */}
            <div className="relative mt-12 lg:ml-0 lg:ml-4">
               {/* Wireframe boundary */}
               <div className="absolute top-10 bottom-6 -left-0 lg:-left-12 right-0 lg:right-8 rounded-tl-[3.5rem] rounded-bl-[3.5rem] border-t border-l border-b border-gray-300 -z-10" />

               {/* Floating Orange Drop Arrow */}
               <button onClick={() => scrollTo('contact')} className="absolute -top-0 lg:-top-5 left-0 md:left-40 lg:left-30 w-[72px] h-[72px] rounded-full bg-[#f26333] -rotate-45 flex items-center justify-center z-30 shadow-2xl shadow-orange-500/30 text-white hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
               </button>

               {/* Floating Grey Box matching "Take your expenses under control" */}
               <Card className="absolute top-12 left-0 md:left-4 lg:-left-14 w-40 md:w-[200px] !bg-[#b6b4b0] !border-none !shadow-xl z-20 p-6 md:p-7 !rounded-[2rem]">
                 <div className="flex gap-1 mb-5 text-gray-800 items-end">
                   <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                   <div className="w-4 h-3 bg-gray-800/80 rounded-sm"></div>
                   <div className="w-3 h-4 bg-gray-800/60 rounded-sm leading-none flex items-center justify-center text-[8px] text-white">x</div>
                   <div className="w-3 h-3 bg-gray-800/40 rounded-sm"></div>
                 </div>
                 <p className="text-xs md:text-[13px] font-[Inter] font-medium text-gray-800 leading-[1.6]">Take your frontend<br/>architecture under<br/>expert control.</p>
               </Card>

               {/* Image Wrapper */}
               <div className="w-[90%] md:w-3/4 ml-auto aspect-[4/4.5] md:aspect-square object-cover rounded-[3rem] overflow-hidden bg-gray-200 mt-0 z-19 relative">
                  {/* Since reference has a human photo, using an abstract representation of coding/focus or a minimal setup to keep vibe but adhere to instructions */}
                  <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover scale-[1.05] grayscale-[10%]" alt="Professional coding space" />
               </div>

               {/* Burst Icon mapped to position */}
               <div className="absolute hidden md:flex bottom-16 md:bottom-24 -left-0 lg:-left-12 text-gray-800 rotate-[45deg] z-19">
                  <Burst className="w-20 h-20 md:w-24 md:h-24 opacity-80" />
               </div>

               {/* Trailing arrow matching standard UI map */}
               <div className="absolute hidden md:flex bottom-28 md:bottom-32 left-30 lg:left-14 w-6 h-6 rounded-full border border-gray-400 bg-white items-center justify-center z-10">
                  <span className="text-[10px] leading-none text-gray-600 rotate-90">&rarr;</span>
               </div>
            </div>

            {/* Features mappings underneath image layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 px-4 md:px-0  border-t border-gray-300 mt-10 lg:mr-8">
              <div className="flex flex-col gap-3">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <Icon name="experience" className="w-4 h-4 text-gray-700" />
                   </div>
                   <h4 className="text-[15px] font-bold text-gray-900 font-[Inter]">Modern Architecture</h4>
                 </div>
                 <p className="text-[13px] text-gray-600 font-[Inter] leading-relaxed lg:max-w-[200px] mt-1 pl-[52px]">Utilizing React.js & Next.js for rapid, scalable web apps.</p>
              </div>
              
              <div className="flex flex-col gap-3">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <Icon name="experience" className="w-4 h-4 text-gray-700" />
                   </div>
                   <h4 className="text-[15px] font-bold text-gray-900 font-[Inter]">Responsive UI</h4>
                 </div>
                 <p className="text-[13px] text-gray-600 font-[Inter] leading-relaxed lg:max-w-[200px] mt-1 pl-[52px]">Mobile-first approach ensuring pixel-perfect fidelity.</p>
              </div>
            </div>

          </AnimateIn>
        </div>

      </Container>
      <SectionBorder />
    </Section>
  )
}

export default About