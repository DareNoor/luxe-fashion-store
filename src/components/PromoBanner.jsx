import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const PromoBanner = () => {
  return (
    <>
    <section className='w-full bg-gray-900 py-20 px-4'>
        <div className='max-w-3xl mx-auto text-center'>
            <p className='font-body text-sm tracking-[0.3em] uppercase text-gold mb-4 '>
                Limited Time Offer
            </p>
            <h2 className='font-heading text-4xl md:text-6xl text-white mb-6 leading-tight'>
                Summer Sale<br/> <span className='italic text-primary-200'>Up to 50% Off</span>
                
            </h2>
<p className="font-body text-sm text-white/60 max-w-md mx-auto mb-10 leading-relaxed">
          Refresh your wardrobe with our handpicked summer collection. Premium quality, unbeatable prices.
        </p>
        <Link to='/sale' className='inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-body text-sm tracking-widest uppercase px-10 py-4 transition-colors duration-300'>
                 Shop Sale Now
         <ArrowRight size={16}/>
        </Link>
                </div>
    </section>
    </>
  )
}

export default PromoBanner