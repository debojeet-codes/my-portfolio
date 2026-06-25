"use client";

import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Logofolio", href: "#logofolio" },
  { name: "Brandings", href: "#branding" },
  { name: "Posters", href: "#posters" },
  { name: "ID Cards", href: "#idcards" },
  { name: "Thumbnails", href: "#thumbnails" },
  { name: "Contact", href: "#contact" },
];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4">
       <nav className="w-full max-w-[1500px] grid grid-cols-[1fr_auto_1fr] items-center">

  {/* Empty Left Side */}
  <div />

  {/* Navigation */}
  <div className="hidden lg:flex items-center justify-center gap-3">
    {navItems.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="
          px-6
          py-2.5
          rounded-xl
          border
          border-white/15
          bg-white/8
          backdrop-blur-2xl
          text-[#2711B1]
          text-sm
          font-medium
          shadow-[0_6px_20px_rgba(0,0,0,.18)]
          transition-all
          duration-300
          hover:bg-[#2711B1]/15
          hover:border-[#2711B1]/50
          hover:-translate-y-1
          hover:shadow-[0_12px_35px_rgba(39,17,177,.25)]
        "
      >
        {item.name}
      </a>
    ))}
  </div>

  {/* Resume */}
 <div className="hidden lg:flex justify-end">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="
        px-5
        py-2
        rounded-xl
        bg-[#2711B1]
        text-white
        font-semibold
        shadow-[0_10px_30px_rgba(39,17,177,.45)]
        transition-all
        duration-300
        hover:bg-[#1F0D8D]
        hover:scale-105
      "
    >
      Resume
    </a>
  </div>

</nav>

{/* Mobile Menu Button */}

<div className="lg:hidden fixed top-4 right-4 z-[9999]">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="
      p-3
      rounded-xl
      bg-white/10
      backdrop-blur-2xl
      border
      border-white/10
      shadow-lg
    "
  >
    {menuOpen ? (
      <IoClose size={26} className="text-[#2711B1]" />
    ) : (
      <HiOutlineMenuAlt3 size={26} className="text-[#2711B1]" />
    )}
  </button>
</div>

{menuOpen && (
  <div
 className="
lg:hidden
fixed
top-16
right-3
left-3
z-[9998]
rounded-2xl
border
border-black/5
bg-white/10
backdrop-blur-3xl
shadow-[0_20px_40px_rgba(0,0,0,.12)]
p-3
max-h-[calc(100vh-90px)]
overflow-y-auto
"
>
    <div className="flex flex-col gap-2">

      {navItems.map((item) => (
        <a
  key={item.name}
  href={item.href}
  onClick={() => setMenuOpen(false)}
  className="
relative
overflow-hidden
flex
items-center
justify-center
w-full
px-5
py-2.5
rounded-xl
border
border-black/10
bg-white/8
backdrop-blur-[25px]
text-[#2711B1]
font-medium
text-[17px]
shadow-[0_8px_20px_rgba(0,0,0,0.04)]
transition-all
duration-300
hover:border-[#2711B1]/30
hover:bg-[#2711B1]/8
"
>
  {/* Glass Shine */}
  <span
    className="
      absolute
      inset-0
      rounded-xl
      bg-gradient-to-br
      from-white/10
      via-transparent
      to-transparent
      pointer-events-none
    "
  />

  {/* Inner Border */}
  <span
    className="
      absolute
      inset-[1px]
      rounded-[10px]
      border
      border-white/20
      pointer-events-none
    "
  />

  <span className="relative z-10">{item.name}</span>
</a>
      ))}

      <a
  href="/resume.pdf"
  onClick={() => setMenuOpen(false)}
  className="
    relative
    overflow-hidden
    flex
    items-center
    justify-center
    mt-3
    w-full
    px-5
    py-2.5
    rounded-xl
    bg-[#2711B1]
    text-white
    font-semibold
    shadow-[0_12px_35px_rgba(39,17,177,.35)]
    transition-all
    duration-300
    hover:bg-[#1F0D8D]
  "
>
  <span
    className="
      absolute
      inset-0
      bg-gradient-to-br
      from-white/20
      via-transparent
      to-transparent
      pointer-events-none
    "
  />

  <span className="relative z-10">
    Resume 
  </span>
</a>

    </div>
  </div>
)}
    </header>
  );
}


