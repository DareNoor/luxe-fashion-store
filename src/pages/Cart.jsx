import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart, removeItem, updateQty } from '../redux/cartSlice'

const Cart = () => {
  const {items}= useSelector((state)=>state.cart)
  const dispatch= useDispatch()
  const subtotal= items.reduce((acc,item)=>acc+item.discountPrice*item.qty,0)
  const shipping= subtotal>2000? 0:200
  const total = subtotal+shipping
if(items.length===0){
  return(
    <div className='min-h-screen bg-cream flex flex-col items-center justify-center gap-6'>
      <ShoppingBag size={64} strokeWidth={1} className='text-primary-200'/>
      <h2 className='font-heading text-3xl text-gray-900'>Your cart is empty</h2>
      <p className='font-body text-sm text-gray-500'>
                  Looks like you haven't added anything yet

      </p>
      <Link to='/shop' className='font-body text-sm tracking-widest uppercase bg-gray-900 text-white px-8 py-3 hover:bg-black transition-colors duration-300'>
      Continue Shopping</Link>
    </div>
  )
}

  return (
    <div className='min-h-screen bg-cream py-12'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between mb-10'>
          <h1 className='font-heading text-4xl text-gray-900'>Your Cart
                    <span className='font-body text-base text-gray-400 ml-3'>
                      ({items.length} {items.length===1?"item":"items"})
                    </span>
          </h1>
          <button onClick={()=>dispatch(clearCart())} className='font-body text-xs text-gray-400 hover:text-red-500 tracking-widest uppercase transition-colors duration-200'>Clear All</button>
        </div>
        <div className='grid lg:grid-cols-3 gap-10'>
          <div className='lg:col-span-2 flex flex-col gap-6'>
            {items.map((item)=>(
              <div key={item.id} className='flex gap-6 bg-white p-4 border border-primary-200'>
                <div className='w-24 h-32 flex-shrink-0 overflow-hidden bg-primary-100'>
                  <img src={item.image}  alt={item.name} className='w-full h-full object-cover' />
                </div>
                <div className='flex-1'>
                  <p className='font-body text-xs text-gold tracking-widest uppercase mb-1'>{item.category}</p>
                  <h3 className='font-heading text-lg text-gray-900 mb-1'>{item.name}</h3>
                  <p className='font-body text-xs text-gray-400 mb-4'>Size: {item.size}</p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center border border-primary-200'>
                      <button onClick={()=>item.qty>1?dispatch(updateQty({id:item.id,qty:item.qty-1})): dispatch(removeItem(item.id))}
                        className='px-3 py-2 hover:bg-primary-100 transition-colors'>
                          <Minus size={14}/>
                        </button>
                        <span className='px-4 font-body text-sm'>{item.qty}</span>
                        <button onClick={()=>dispatch(updateQty({id:item.id,qty:item.qty+1}))}
                          className='px-3 py-2 hover:bg-primary-100 transition-colors'>
                            <Plus size={14}/>
                          </button>
                    </div>
                    <div className='flex items-center gap-4'>
                      <span className='font-body font-medium text-gray-900'>
                        Rs. {(item.discountPrice*item.qty).toLocaleString()}
                      </span>
                      <button onClick={()=>dispatch(removeItem(item.id))} className='text-gray-300 hover:text-red-500 transition-colors duration-200'>
                        <Trash2 size={16}/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='bg-white border border-primary-200 p-6 h-fit'>
            <h3 className='font-heading text-xl text-gray-900 mb-6'>Order Summary</h3>
            <div className='flex flex-col gap-4 mb-6'>
              <div className='flex justify-between font-body text-sm text-gray-600'>
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className='flex justify-between font-body text-sm text-gray-600'>
                <span>Shipping</span>
                <span>{shipping===0?"Free":`Rs. ${shipping}`}</span>
              </div>
              {shipping>0 &&(
                <p className='font-body text-xs text-gold'>
                  Add Rs.{(2000-subtotal).toLocaleString()} more for free shipping
                </p>
              )}
              <div className='border-t border-primary-200 pt-4 flex justify-between font-body font-medium text-gray-900'>
                <span>Total</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
            </div>
            <Link to='/checkout' className="w-full bg-gray-900 hover:bg-black text-white font-body text-sm tracking-widest uppercase py-4 flex items-center justify-center transition-colors duration-300">
            Proceed to Checkout
            </Link>
            <Link
              to="/shop"
              className="w-full mt-3 border border-primary-200 text-gray-600 hover:border-gray-900 font-body text-sm tracking-widest uppercase py-4 flex items-center justify-center transition-colors duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart