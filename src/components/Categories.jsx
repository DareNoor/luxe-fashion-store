import { Link } from "react-router-dom"
const categories = [
  {
    label: "Women",
    path: "/shop?category=Women",
    image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=600&q=80",
    count: "120+ Styles"
  },
  {
    label: "Men",
    path: "/shop?category=Men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    count: "80+ Styles"
  },
  {
    label: "Kids",
    path: "/shop?category=Kids",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&q=80",
    count: "60+ Styles"
  },
  {
    label: "Accessories",
    path: "/shop?category=Accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80",
    count: "90+ Styles"
  },
]


const Categories = () => {
   
  return (

<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
    <div className='text-center mb-12'>
        <p className='font-body text-xs tracking-[0.3em] uppercase text-gold mb-3'>Explore</p>
        <h2 className='font-heading text-4xl text-gray-400'>Shop by Category</h2>
    </div>
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {categories.map((cat)=>
        <Link key={cat.path} to={cat.path} className="group relative overflow-hidden aspect-[3/4] block">
            <img src={cat.image} alt={cat.label} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
            {/* dark overlay on hober */}
             {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-white">
              <h3 className="font-heading text-2xl font-semibold mb-1">
                {cat.label}
              </h3>
              <p className="font-body text-xs tracking-widest uppercase text-white/80">
                {cat.count}
              </p>
            </div>
        </Link> )}
    </div>
</section>  )
}

export default Categories