import React from 'react'
const testimonials = [
  {
    id: 1,
    name: "Sara Ahmed",
    city: "Karachi",
    rating: 5,
    review: "Absolutely love the quality! The embroidered lawn suit fits perfectly and the fabric is premium. Will definitely order again.",
    avatar: "SA"
  },
  {
    id: 2,
    name: "Maha Rizvi",
    city: "Lahore",
    rating: 4,
    review: "Fast delivery and beautiful packaging. The pearl earrings are even more stunning in person. Highly recommend Luxe!",
    avatar: "MR"
  },
  {
    id: 3,
    name: "Zara Khan",
    city: "Islamabad",
    rating: 5,
    review: "Finally a Pakistani fashion store that understands quality. The chiffon saree is gorgeous and the customer service is excellent.",
    avatar: "ZK"
  },
]
const Testimonials = () => {

  return (
<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
    <div className='text-center mb-12'>
        <p className='font-body text-xs tracking-[0.3em] uppercase text-gold mb-3'>Happy Customers</p>
<h2 className='font-heading text-4xl text-gray-900'>What The Say</h2>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {testimonials.map((t)=>(
            <div key={t.id} className='bg-white border border-primary-200 p-8'>
                <div className='flex items-center gap-1 mb-6'>
                    {[...Array(t.rating)].map((_,i)=>(
                        <span key={i} className='text-gold text-lg'>★</span>
                    ))}
                </div>
                <p className='font-body text-sm text-gray-600 leading-relaxed mb-8 italic'>"{t.review}"</p>
                <div className='flex items-center gap-4'>
                    <div className='w-10 h-10 rounded-full bg-gold flex items-center justify-center'>
                        <span className='font-body text-xs text-white font-medium'>{t.avatar}</span>
                    </div>
                    <div>
                        <p className='font-body text-sm font-medium text-gray-900'>{t.name}</p>
                    <p className='font-body text-xs text-gray-400'>{t.city}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>
  )
}

export default Testimonials