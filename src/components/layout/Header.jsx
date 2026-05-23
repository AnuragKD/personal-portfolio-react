import { useState, useEffect } from "react";
import Icon from "../Icon";
import Button from "../ui/Button";
import SiteLogo from "../../assets/images/site-logo.png";

// Anchor links for single-page scroll navigation
const navLinks = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact",    href: "#contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    let observers = [];
    const ids = navLinks.map((l) => l.href.slice(1));
    let timeoutId;

    const initObservers = () => {
      const elements = ids.map((id) => document.getElementById(id));
      
      // If some elements aren't in the DOM yet (e.g. during splash screen), retry in 100ms
      if (elements.some((el) => !el)) {
        timeoutId = setTimeout(initObservers, 100);
        return;
      }

      elements.forEach((el) => {
        const obs = new IntersectionObserver(
          ([entry]) => { 
            if (entry.isIntersecting) setActive(el.id); 
          },
          { rootMargin: "-20% 0px -60% 0px" }
        );
        obs.observe(el);
        observers.push(obs);
      });
    };

    initObservers();

    return () => {
      clearTimeout(timeoutId);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return active;
}

function scrollTo(href) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <nav
          className={`relative my-3 rounded-full py-2 md:py-3 px-3 md:px-4 flex justify-between items-center border transition-all duration-300 ${
            scrolled
              ? "border-gray-200/80 shadow-lg shadow-black/5"
              : "border-gray-200"
          }`}
        >
          {/* Glass background */}
          <div className="absolute inset-0 backdrop-blur-xl bg-white/70 rounded-full -z-1" />

          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="focus:outline-none"
            aria-label="Go to top"
          >
            {/* <Icon name="logo" className="h-[26px] md:h-[30px] lg:h-[35px] w-auto" /> */}
            <img src={SiteLogo} alt="Logo" className="h-[34px] lg:h-[46px] w-auto" />
            
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex gap-1 px-1 py-1 bg-white/80 border border-gray-200 rounded-full">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm px-4 py-2 rounded-full font-normal font-[BricolageGrotesque] transition-all duration-200 ${
                    isActive
                      ? "bg-primary-color text-white shadow-sm"
                      : "text-black hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button onClick={() => scrollTo("#contact")}>Hire Me</Button>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden relative">
            <button
              className="relative z-1 flex flex-row items-center gap-2 bg-white/50 backdrop-blur-sm pl-4 pr-1 py-1 rounded-full border border-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <p className="leading-0 text-xs font-[Inter]">MENU</p>
              <div className="flex flex-col justify-center w-6 h-6 gap-[3px] border border-gray-200 p-1 rounded-full">
                <span className={`h-[1px] w-full bg-black transition-all ${isOpen ? "rotate-45 translate-y-1" : ""}`} />
                <span className={`h-[1px] w-full bg-black transition-all ${isOpen ? "opacity-0" : ""}`} />
                <span className={`h-[1px] w-full bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
              </div>
            </button>

            {/* Mobile menu */}
            <div
              className={`lg:hidden absolute -right-1 -top-1 overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[500px] w-[240px] opacity-100" : "max-h-0 w-0 opacity-0"
              }`}
            >
              <div className="flex flex-col items-end gap-2 p-4 pt-14 rounded-[20px] bg-white/80 backdrop-blur-lg border border-gray-200">
                {navLinks.map((link) => {
                  const isActive = active === link.href.slice(1);
                  return (
                    <button
                      key={link.name}
                      onClick={() => { scrollTo(link.href); setIsOpen(false); }}
                      className={`text-sm px-4 py-2 w-full rounded-full text-left font-[BricolageGrotesque] transition-all duration-200 ${
                        isActive
                          ? "bg-primary-color text-white"
                          : "text-black hover:bg-gray-100"
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}
                <Button onClick={() => { scrollTo("#contact"); setIsOpen(false); }} className="w-full mt-1">
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}