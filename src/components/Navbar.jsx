import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
      isActive
        ? "text-white bg-accent/10 border border-accent/20"
        : "text-textLight hover:text-white hover:bg-card"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block px-6 py-4 text-lg transition-all duration-300 border-l-4 ${
      isActive
        ? "text-white border-accent bg-accent/10"
        : "text-textLight border-transparent hover:text-white hover:bg-card"
    }`;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <>
      <nav className="bg-background/80 backdrop-blur-md border-b border-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-background font-bold text-sm">VM</span>
              </div>
              <span className="text-white font-serif font-bold text-xl">Valentine</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={navClass}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-textLight hover:text-white hover:bg-card transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden bg-background border-t border-card overflow-hidden"
        >
          <div className="py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={mobileNavClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      </nav>
    </>
  );
}