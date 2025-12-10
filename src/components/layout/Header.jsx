import { Link } from "react-router-dom";
import Icon from "../Icon";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-999 h-[85px]">
        <nav className="mx-auto max-w-7xl px-10 flex justify-between items-center h-full ">            
            <Icon name="logo" className=""/>
            <div className="flex gap-5 px-8 py-3 bg-black/10 backdrop-blur-sm rounded-full">
                <Link to="/"  className="font-secondary-font text-sm text-gray-700 font-normal">Home</Link>
                <Link to="/projects" className="font-secondary-font text-sm text-gray-700 font-normal">Projects</Link>
                <Link to="/about" className="font-secondary-font text-sm text-gray-700 font-normal">About</Link>
                <Link to="/contact" className="font-secondary-font text-sm text-gray-700 font-normal">Contact</Link>
            </div>
            <div>
                <Button>Hire Me</Button>
            </div>

        </nav>
    </header>
  );
}
