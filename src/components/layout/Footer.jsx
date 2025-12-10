import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t p-4 text-center">
        © {new Date().getFullYear()} Anurag    
    </footer>
  );
}
