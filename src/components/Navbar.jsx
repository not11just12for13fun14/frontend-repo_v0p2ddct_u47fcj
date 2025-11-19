import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";

const NavItem = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      onClick?.();
    }}
    className="text-slate-200 hover:text-white transition-colors px-3 py-2 rounded-md"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-slate-900/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">Amazon Merch Portfolio</span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <NavItem href="#gallery">Gallery</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </nav>

          <button
            className="md:hidden p-2 text-slate-200 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-1">
              <NavItem href="#gallery" onClick={() => setOpen(false)}>Gallery</NavItem>
              <NavItem href="#about" onClick={() => setOpen(false)}>About</NavItem>
              <NavItem href="#contact" onClick={() => setOpen(false)}>Contact</NavItem>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
