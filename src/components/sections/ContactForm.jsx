import { useState } from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Card from '../ui/Card'
import Label from '../ui/Label'
import AnimateIn from '../element/AnimateIn'

const socialLinks = [
  {
    name: 'GitHub', href: 'https://github.com/anurag',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn', href: 'https://linkedin.com/in/anurag',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 0 1-1.981-1.982c0-1.093.888-1.981 1.981-1.981 1.092 0 1.981.888 1.981 1.981 0 1.094-.889 1.982-1.981 1.982zm1.707 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X', href: 'https://x.com/anurag',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
]

const InputField = ({ label, id, type = 'text', placeholder, rows, value, onChange }) => {
  const inputClass =
    'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:bg-white focus:border-primary-color focus:ring-2 focus:ring-primary-color/15 transition-all duration-200 font-[Inter]'
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 font-[Inter]">{label}</label>
      {rows ? (
        <textarea id={id} rows={rows} placeholder={placeholder} value={value} onChange={onChange}
          className={`${inputClass} resize-none`} />
      ) : (
        <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange}
          className={inputClass} />
      )}
    </div>
  )
}

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()

    // 💡 Provide your Web3Forms Access Key here to enable real form submission emails
    const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY"

    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      alert("ℹ️ Please add your Web3Forms access key in ContactForm.jsx to enable live email submissions.")
      return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: accessKey, ...form })
      })
      const result = await response.json()
      
      if (result.success) {
        setSubmitted(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        alert("Something went wrong: " + result.message)
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again later.")
    }
  }

  return (
    <Section id="contact" className="h-fit flex items-center relative overflow-hidden">
      
      {/* Decorative Background Orbs */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] rounded-full bg-primary-color/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[10%] -right-[10%] w-[30%] h-[30%] rounded-full bg-primary-color/5 blur-[100px] pointer-events-none z-0 opacity-80" />

      <Container className="relative z-10 w-full py-16">
        <AnimateIn variant="fade-down" delay={0} duration={600} className="flex justify-center">
          <Label name="messageprogramming" className="!mx-0">Contact</Label>
        </AnimateIn>
        <AnimateIn variant="blur-in" delay={80} duration={700}>
          <h2 className="text-gray-900 text-center mb-3 mt-1">Get In Touch</h2>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={160} duration={600}>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-14 text-sm leading-relaxed font-[Inter]">
            Have a project in mind or just want to connect? My inbox is always open.
          </p>
        </AnimateIn>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Social Links */}
          <AnimateIn variant="fade-right" delay={200} duration={700} className="md:col-span-2 flex flex-col justify-center gap-6">
            <div>
              <h4 className="text-gray-900 mb-2">Let's work together</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-[Inter]">
                I'm open to freelance projects, full-time roles, and interesting collaborations.
                <br /><br />
                <a href="mailto:anurag95678@gmail.com" className="hover:text-primary-color transition-colors">anurag95678@gmail.com</a><br />
                <a href="tel:+919567851175" className="hover:text-primary-color transition-colors">+91 95678 51175</a>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-[Inter]">Find me online</p>
              {socialLinks.map((link, i) => (
                <AnimateIn key={link.name} variant="fade-right" delay={300 + i * 80} duration={600}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white hover:border-primary-color hover:shadow-md transition-all duration-200"
                  >
                    <span className="text-gray-400 group-hover:text-primary-color transition-colors duration-200">{link.icon}</span>
                    <span className="text-sm text-gray-700 font-[Inter]">{link.name}</span>
                    <span className="ml-auto text-gray-300 group-hover:text-primary-color transition-colors duration-200 text-xs">↗</span>
                  </a>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>

          {/* Form */}
          <AnimateIn variant="fade-left" delay={250} duration={700} className="md:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-20">
                <span className="text-5xl">🎉</span>
                <h3 className="text-gray-900 text-center">Message sent!</h3>
                <p className="text-sm text-gray-500 text-center font-[Inter]">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <Card variant="default" hover={false} className="p-6 shadow-sm">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <InputField label="Your Name" id="name" placeholder="Anurag Kumar" value={form.name} onChange={handleChange('name')} />
                  <InputField label="Email Address" id="email" type="email" placeholder="anurag@example.com" value={form.email} onChange={handleChange('email')} />
                  <InputField label="Message" id="message" placeholder="Tell me about your project..." rows={5} value={form.message} onChange={handleChange('message')} />
                  <button type="submit"
                    className="mt-1 w-full py-3 px-6 bg-primary-color text-white rounded-full text-sm font-medium hover:bg-black transition-all duration-200 font-[Inter]">
                    Send Message →
                  </button>
                </form>
              </Card>
            )}
          </AnimateIn>
        </div>
      </Container>
      <SectionBorder />
    </Section>
  )
}

export default ContactForm
