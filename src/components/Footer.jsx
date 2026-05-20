import React from 'react'
import { MapPin, Mail, Phone } from "lucide-react"
import { FaInstagram, FaXTwitter, FaGithub, FaPinterest } from "react-icons/fa6"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<>
<footer className='bg-gray-900  text-white'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
            <div>
                <h2 className='font-heading text-2xl font-bold tracking-widest uppercase mb-4'>LUXE</h2>
                <p className='font-body text-sm text-white/60 leading-relaxed mb-6'>
                Premium fashion for the modern Pakistani woman. Quality you can feel, style you can trust.
                </p>
                <div className="flex items-center gap-4">
  <a href="https://instagram.com" target="_blank" className="text-white/60 hover:text-gold transition-colors duration-200">
    <FaInstagram size={18} />
  </a>
  <a href="https://twitter.com" target="_blank" className="text-white/60 hover:text-gold transition-colors duration-200">
    <FaXTwitter size={18} />
  </a>
  <a href="https://pinterest.com" target="_blank" className="text-white/60 hover:text-gold transition-colors duration-200">
    <FaPinterest size={18} />
  </a>
  <a href="https://github.com/DareNoor" target="_blank" className="text-white/60 hover:text-gold transition-colors duration-200">
    <FaGithub size={18} />
  </a>
</div>
            </div>
            <div>
                <h3 className='font-body text-xs tracking-[0.2em] uppercase text-gold mb-6'>Quick Links</h3>
                <div className='flex flex-col gap-3'>
                   {[
                { label: "Home", path: "/" },
                { label: "Shop", path: "/shop" },
                { label: "Collections", path: "/collections" },
                { label: "Sale", path: "/sale" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-sm text-white/60 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
                </div>
            </div>
            <div>
                <h3 className='font-body text-xs tracking-[0.2em] uppercase text-gold mb-6'>Categories</h3>
                <div className='flex flex-col gap-3'>
                    {["Women","Men","Kids","Accessories","Sale"].map((cat)=>(
                        <Link key={cat} to={`/shop?category=${cat}`} className='font-body text-sm text-white/60 hover:text-gold transition-colors duration-200'>{cat}</Link>
                    ))}
                </div>
            </div>
            <div>
                <h3 className='font-body text-xs tracking-[0.2em] uppercase text-gold mb-6'>Contact Us</h3>
          <div className='flex flex-col gap-4'>
            <div className='flex items-start gap-3'>
                <MapPin size={16} strokeWidth={1.5} className='text-gold mt-0.5 flex-shrink-0'/>
                <p className='font-body text-sm text-white/60'>
                                 DHA Phase 6, Karachi, Pakistan

                </p>
            </div>
            <div className='flex items-center gap-3'>
                <Mail size={16} strokeWidth={1.5} className='text-gold flex-shrink-0'/>
                <p className='font-body text-sm text-white/60'>hello@fashion.pk</p>
            </div>
            <div className='flex items-center gap-3'>
                <Phone size={16} strokeWidth={1.5} className='text-gold flex-shrink-0'/>
                <p className='font-body text-sm text-white/60'>                  +92 300 1234567
</p>
            </div>
          </div>
            </div>
        </div>
    </div>
    <div className='border-t border-white/10'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
        <p className='flex items-center gap-6'>
            <a href="#" className='font-body text-xs text-white/40 hover:text-white/60 transition-colors duration-200'>Privacy Policy</a>
             <a href="#" className="font-body text-xs text-white/40 hover:text-white/60 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="font-body text-xs text-white/40 hover:text-white/60 transition-colors duration-200">
              Returns
            </a>
        </p>
        </div></div>
</footer>
</>
)
}

export default Footer