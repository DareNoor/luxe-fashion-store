import { X, ArrowRight } from "lucide-react"
import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Hero = () => {
    const [showAnn,setShowAnn]=useState(true)
  return (
    <div className='w-full'>
        {/* Ann bar */}
        {showAnn && (
            <div className='bg-[#F5ECD9] text-white text-center py-2 px-4 text-xl tracking-widest uppercase font-body relative '>
                Free Shipping on Orders Above Rs: 2,000 - Use Code: LUXE2026 
                <button onClick={()=>setShowAnn(false)} className='absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity'>
                    <X size={14}/>
                </button>

            </div>
        )}
        {/* Hero sec */}
        <div className='relative w-full h-[90vh] overflow-hidden'>
            {/* bg image */}
            <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
backgroundImage: `url('https://images.unsplash.com/photo-1773859096339-dd1ca5158835?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`          }} /> 
        //   Dark overlay
        <div className='absolute inset-0 bg-black/40'>
        <div className='relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4'>
            <p className='font-body text-xl tracking-[0.3em] uppercase mb-4 text-gold'>New Collection 2026</p>
            <h1 className='folnt-heading text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-3xl'>
                Dress to <span className='italic text-primary-200'>Impress</span>
            </h1>
            <p className='font-body text-sm md:text-base text-white/80 max-w-md mb-10 leading-relaxed'>
Discover premium fashion curated for the modern woman. Elegance meets comfort in every piece.
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <Link to="/shop" className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-body text-sm tracking-widest uppercase px-8 py-3.5 transition-colors duration-200">
            Shop Now <ArrowRight size={16}/>
            </Link>
            <Link to="/collections" className="flex items-center gap-2 border border-white text-white hover:bg-white hover:text-gray-900 font-body text-sm tracking-widest uppercase px-8 py-3.5 transition-colors duration-300">View Collections</Link>
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60'>
            <p className='font-body text-xl tracking-widest uppercase'>Scroll</p>
            <div className='w-px h-8 bg-white/40'></div></div>
          </div>
                      </div>
            </div>
       </div>
    </div>
  )
}

export default Hero