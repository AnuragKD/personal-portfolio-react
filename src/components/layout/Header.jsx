import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";
import Button from "../ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex justify-between items-center h-[85px]">

        {/* Logo */}
        <Icon name="logo" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-1 px-1 py-1 bg-white/50 border-1 border-gray-300 backdrop-blur-sm rounded-full">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({isActive}) => 
                `text-sm px-4 py-2 rounded-full text-black font-normal font-primary-font transition ${
                    isActive 
                    ? " bg-primary-color text-white hover:bg-primary-color/90" 
                    : " "
                }`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button>Hire Me</Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden relative">
            
            <button
                className="relative z-1 flex flex-row items-center gap-2 bg-white/50 backdrop-blur-sm pl-4 pr-1 py-1 rounded-full border-1 border-gray-200"
                onClick={() => setIsOpen(!isOpen)}
                >
                <p className="leading-0 text-xs">MENU</p>
                <div className="flex flex-col justify-center w-6 h-6 gap-[3px] border-1 border-gray-200 p-1 rounded-full">
                    <span
                        className={`h-[1px] w-full bg-black transition-all ${
                        isOpen ? "rotate-45 translate-y-1" : ""
                        }`}
                    />
                    <span
                        className={`h-[1px] w-full bg-black transition-all ${
                        isOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`h-[1px] w-full bg-black transition-all ${
                        isOpen ? "-rotate-45 -translate-y-1" : ""
                        }`}
                    />
                </div>
            </button>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute -right-1 -top-1 overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 w-[240px] opacity-100" : "max-h-0 w-0 opacity-0"
                }`}
            >
                <div className="flex flex-col items-end gap-2 p-4 pt-13 rounded-[20px] bg-white/70 backdrop-blur-sm border-1 border-gray-200">
                {navLinks.map((link) => (
                    <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({isActive}) => 
                        `text-black text-sm px-4 py-2 w-full rounded-full ${
                            isActive 
                            ? " border-1 border-primary-color bg-primary-color/80 text-white" 
                            : " "
                        }`}
                    >
                    {link.name}
                    </NavLink>
                ))}

                <Button 
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                  >Hire Me</Button>
                </div>
            </div>

        </div>
      </nav>

    </header>
  );
}