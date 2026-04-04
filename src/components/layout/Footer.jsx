import Container from "./Container";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/anurag",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/anurag",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 0 1-1.981-1.982c0-1.093.888-1.981 1.981-1.981 1.092 0 1.981.888 1.981 1.981 0 1.094-.889 1.982-1.981 1.982zm1.707 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://x.com/anurag",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Home",       id: "home" },
  { label: "About",      id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects",   id: "projects" },
  { label: "Skills",     id: "skills" },
  { label: "Contact",    id: "contact" },
];

export default function Footer() {
  return (
    <footer className="bg-main-bg border-t border-[#87878747]">
      <Container>
        <div className="py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Name / Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <button
              onClick={() => scrollTo("home")}
              className="font-[BricolageGrotesque] text-xl font-bold text-gray-900 hover:text-primary-color transition-colors duration-200"
            >
              Anurag<span className="text-primary-color">.</span>
            </button>
            <p className="text-xs text-gray-400 font-[Inter]">Frontend &amp; React Developer</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-gray-500 hover:text-primary-color transition-colors duration-200 font-[Inter]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-primary-color hover:border-primary-color transition-all duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-[#87878747] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400 font-[Inter]">
            © {new Date().getFullYear()} Anurag. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 font-[Inter]">
            Built with <span className="text-primary-color">♥</span> using React &amp; Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
