'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaArrowRight, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { BsShieldFillCheck } from 'react-icons/bs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Who We Are', href: '/who-we-are' },
    { label: 'What We Do', href: '/what-we-do' },
    { label: 'How We Do It', href: '/how-we-do-it' },
    { label: 'Our Businesses', href: '/hub-centre-matrix'},
     { label: 'Pipeline', href: '/pipeline' },
      { label: 'Careers', href: '/careers' },
    { label: 'Execution', href: '#' },
    { label: 'Footprint', href: '#' },
    { label: 'Media', href: '#' },
  ];

  // Helper: is this link active?
  const isActive = (href) => {
    if (href === '#') return false;           // placeholder links never "active"
    if (href === '/') return pathname === '/'; // home only matches exactly
    return pathname === href || pathname.startsWith(href + '/');
    // (e.g. /who-we-are/team will also highlight "Who We Are")
  };

  return (
    <nav className="w-full bg-[#1E1B4B] text-white py-3 border-b border-white/10 relative z-50">
      <div className="px-3 md:px-4 xl:px-6 flex items-center justify-between gap-2 w-full">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={closeMenu}>
          <div className="bg-amber-400 p-1.5 rounded-md flex items-center justify-center">
            <BsShieldFillCheck className="text-black text-sm md:text-base" />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-bold text-xs md:text-sm tracking-wide whitespace-nowrap">
              BEAPCAPITAL
            </span>
            <span className="text-[8px] md:text-[9px] text-gray-400 tracking-widest uppercase whitespace-nowrap">
              Ecosystem . Africa
            </span>
          </div>
        </Link>

        {/* DESKTOP: Navigation Links */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-6 font-medium whitespace-nowrap min-w-0">
          {navLinks.map((link, index) => {
            const active = isActive(link.href);
            const baseClass =
              'text-[10px] xl:text-[11px] 2xl:text-xs whitespace-nowrap transition-colors';

            if (link.hasDropdown) {
              return (
                <div
                  key={index}
                  className={`flex items-center gap-0.5 cursor-pointer ${baseClass} ${
                    active ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <FaChevronDown className="text-[8px] mt-0.5" />
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={link.href}
                className={`${baseClass} ${
                  active
                    ? 'text-amber-400 font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* DESKTOP: CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:flex bg-amber-400 hover:bg-amber-500 text-black font-semibold text-[10px] xl:text-[11px] 2xl:text-xs px-2.5 xl:px-3 2xl:px-4 py-1.5 xl:py-2 rounded items-center gap-1 transition-colors whitespace-nowrap flex-shrink-0"
        >
          Inquire / Contact
          <FaArrowRight className="text-[9px] xl:text-[10px]" />
        </Link>

        {/* MOBILE: Hamburger / Close Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md border border-white/15 hover:bg-white/5 transition-colors flex-shrink-0"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
        </button>

      </div>

      {/* MOBILE: Slide-down Panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 pt-3 px-3 border-t border-white/10 mt-3">
          {navLinks.map((link, index) => {
            const active = isActive(link.href);
            return (
              <Link
                key={index}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                  active
                    ? 'text-amber-400 font-bold bg-amber-400/10 border-l-2 border-amber-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <FaChevronDown className="text-[10px]" />}
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-2 bg-amber-400 hover:bg-amber-500 text-black font-semibold text-sm px-5 py-3 rounded flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
          >
            Inquire / Contact
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </nav>
  );
}