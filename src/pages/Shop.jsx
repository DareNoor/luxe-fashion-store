import { SlidersHorizontal } from 'lucide-react'
import React, { useState } from 'react'
import FilterSidebar from '../components/FilterSidebar'
import ProductsGrid from '../components/ProductsGrid'

const Shop = () => {
  const [showFilter,setShowFilter]=useState(false)
  return (
    <div className='min-h-screen bg-cream'>
      <div className='bg-gray-900 py-16 text-center'>
        <p className='font-body text-xs tracking-[0.3em] uppercase text-gold mb-3'>Our Collection</p>
        <h1 className='font-heading text-5xl text-white'>Shop All</h1>
      </div>
      {/* Mobike */}
      <div className='md:hidden flex items-center justify-between px-4 py-4 border-b border-primary-200'>
        <button onClick={()=>setShowFilter(true)} className='flex items-center gap-2 font-body text-sm text-gray-700'>
          <SlidersHorizontal size={16}/>
          Filters
        </button>
      </div>
      {showFilter && (
        <div className='fixed inset-0 z-50 md:hidden'>
          <div className='absolute inset-0 bg-black/40' onClick={()=>setShowFilter(false)}/>
          <div className='absolute right-0 top-0 h-full w-80 bg-cream p-8 overflow-y-auto'>
            <FilterSidebar onClose={()=>setShowFilter(false)}/>
          </div>
          </div>
      )}
      {/* Main */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6
      py-12'>
        <div className='flex gap-12'>
          <div className='hidden md:block w-64 flex-shrink-0'>
            <FilterSidebar/>
          </div>
          <div className='flex-1'>
            <ProductsGrid/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop