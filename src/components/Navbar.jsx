import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react"

const navLinks=[
    {label:"Home", path:"/"},
    {label:"Shop", path:"/shop"},
    {label:"Collections",path:"/collections"},
    {label:"Sale",path:"/sale"},
    {label:"About",path:"/about"},
    {label:"Contact",path:"/contact"}
]
const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false)
    const linkClass=({isActive})=>`text-sm tracking-wide transition-colors duration-200 ${isActive
        ? "text-gold-dark font-medium border-b border-gold-dark pb-0.5":
        "text-gray-600 hover:text-gold-dark"
    }` 
  return (
<>
<nav className='w-full bg-cream/95 backdrop-blur-md border-b border-primary-200 sticky top-0 z-50'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
        {/* logoo */}
       <NavLink to="/" className="font-heading text-2xl font-bold tracking-widest text-gray-900 uppercase ">LUXE</NavLink>
       {/* Large Scren */}
       <div className='hidden md:flex items-center gap-8'>
        {navLinks.map((link)=>(
            <NavLink key={link.path} to={link.path} className={linkClass} end={link.path==="/"}>
                {link.label}
            </NavLink>
        ))}
       </div>
       {/* icons */}
       <div className='flex items-center gap-4'>
        <button className='hidden md:block text-gray-600 hover:text-gold transition-colors duration-200'>
            <Heart size={20} strokeWidth={1.5}/>
        </button>
        <NavLink to="/cart" className="relative text-gray-600 hover:text-gold transition-colors duration-200">
        <ShoppingBag size={20} strokeWidth={1.5}/>
        <span className='absolute -top-2 -right-2 bg-gold text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>0</span>

        </NavLink>
        <NavLink to="/login" className="hidden md:block text-gray-600 hover:text-gold transition-colors duration-200">
        <User size={20} strokeWidth={1.5}/>
        </NavLink>
        <button className='md:hidden text-gray-600 hover:text-gold transition-colors duration-200' 
        onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen? <X size={24} strokeWidth={1.5}/>:
            <Menu size={24} strokeWidth={1.5}/>}
        </button>
       </div>
        </div>
    </div>
    {/* Mobile view */}
    {menuOpen && (
        <div className='md:hidden bg-cream border-t border-primary-200 px-6 py-6'>
            <div className='flex flex-col gap-6'>
                {navLinks.map((link)=>(
                    <NavLink key={link.path} to={link.path} className={linkClass} end={link.path==='/'}
                    onClick={()=>setMenuOpen(false)}>{link.label}</NavLink>
                ))}
            </div>
             <div className="flex items-center gap-6 mt-6 pt-6 border-t border-primary-200">
            <button className="text-gray-600 hover:text-gold transition-colors duration-200">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="text-gray-600 hover:text-gold transition-colors duration-200">
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <NavLink to="/login" className="text-gray-600 hover:text-gold transition-colors duration-200">
              <User size={20} strokeWidth={1.5} />
            </NavLink>
          </div>
        </div>
    )}
</nav>
</>  )
}

export default Navbar