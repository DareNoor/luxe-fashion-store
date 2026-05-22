import { Heart, Minus, Plus, ShoppingBag } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { allProducts } from "../utils/products"
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'

const ProductDetail = () => {
  const {id}=useParams()
  const product= allProducts.find((p)=>p.id===Number(id))
  const [qty,setQty]=useState(1)
  const [selSize, setSelSize]=useState("M")
  const [wishlisted,setWishlisted]=useState(false)
  const dispatch = useDispatch()
  if(!product){
    return(
      <div className='min-h-screen flex items-center justify-center bg-cream'>
        <p className='font-heading text-2xl text-gray-400'>Product not found</p>
      </div>
    )
  }
  return (
    <div className='bg-cream min-h-screen py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-14'>
          <div className='overflow-hidden bg-primary-100 aspect-[3/4]'>
          <img src={product.image} alt={product.name} className='w-full h-full object-cover' />
          </div>
          <div className='flex flex-col justify-center'>
            <p className='font-body text-xs tracking-[0.3em] uppercase text-gold mb-3'>{product.category}</p>
            <h1 className='font-heading text-4xl md:text-5xl text-gray-900 mb-5'>{product.name}</h1>
            <div className='flex items-center gap-4 mb-8'>
              <span className='font-body text-3xl font-medium text-gray-900'>
                Rs. {product.discountPrice.toLocaleString()}
              </span>
              <span className='font-body text-lg text-gray-400 line-through'>
                Rs. {product.price.toLocaleString()}
              </span>
            </div>
            <p className='font-body text-gray-500 leading-relaxed mb-10'>
              Crafted with premium quality fabric for timeless elegance and
              everyday comfort. Designed for modern fashion with luxurious
              detailing and a refined finish.
            </p>
            <div className='mb-8'>
              <p className='font-body text-sm tracking-widest uppercase mb-4'>Select Size</p>
               <div className='flex gap-3'>
                {["S","M","L","XL"].map((size)=>(
                  <button key={size} onClick={()=>setSelSize(size)} className={`w-11 h-11 border text-sm transition-colors duration-200 ${selSize===size? "bg-gray-900 text-white border-gray-900":"border-primary-200 text-gray-700 hover:border-gray-900"}`}>{size}</button>
                ))}
               </div>
            </div>
         <div className='mb-10'>
          <p className='font-body text-sm tracking-widest uppercase mb-4'>Quantity</p>
          <div className='flex items-center border border-primary-200 w-fit'>
            <button onClick={()=> qty>1 && setQty(qty-1)} className='px-4 py-3 hover:bg-primary-100 transition-colors'><Minus size={16}/></button>
            <span className='px-6 font-body'>{qty}</span>
            <button className='px-4 py-3 hover:bg-primary-100 transition-colors ' onClick={()=>setQty(qty+1)}>
              <Plus size={16}/>
            </button>
          </div>
         </div>
         <div className='flex flex-col sm:flex-row gap-4'>
          <button className='flex-1 bg-gray-900 hover:bg-black text-white py-4 uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-colors duration-300'
           onClick={()=>dispatch(addItem({...product,size:selSize,qty}))}>
            <ShoppingBag size={18}/> Add to Cart
          </button>
          <button onClick={()=>setWishlisted(!wishlisted)} className='border border-primary-200 hover:border-gray-900 px-6 py-4 flex items-center justify-center transition-colors duration-300'>
            <Heart size={20} className={wishlisted?"fill-red-500 text-red-500":"text-gray-700"}/>
          </button>
         </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail