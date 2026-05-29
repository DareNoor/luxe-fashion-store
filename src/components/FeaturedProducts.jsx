import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Heart, ShoppingBag } from "lucide-react"
import axios from "axios"
// const products = [
//   {
//     id: 1,
//     name: "Embroidered Lawn Suit",
//     category: "Women",
//     price: 4500,
//     discountPrice: 3200,
//     image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80",
//   },
//   {
//     id: 2,
//     name: "Pearl Drop Earrings",
//     category: "Accessories",
//     price: 1200,
//     discountPrice: 950,
//     image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
//   },
//   {
//     id: 3,
//     name: "Linen Kurta — Men",
//     category: "Men",
//     price: 2800,
//     discountPrice: 2100,
//     image: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=600&q=80",
//   },
//   {
//     id: 4,
//     name: "Printed Frock — Kids",
//     category: "Kids",
//     price: 1800,
//     discountPrice: 1400,
//     image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&q=80",
//   },
//   {
//     id: 5,
//     name: "Silk Dupatta",
//     category: "Women",
//     price: 2200,
//     discountPrice: 1750,
//     image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
//   },
//   {
//     id: 6,
//     name: "Leather Tote Bag",
//     category: "Accessories",
//     price: 5500,
//     discountPrice: 4200,
//     image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
//   },
//   {
//     id: 7,
//     name: "Chiffon Saree",
//     category: "Women",
//     price: 6500,
//     discountPrice: 5200,
//     image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
//   },
//   {
//     id: 8,
//     name: "Classic White Shirt",
//     category: "Men",
//     price: 1900,
//     discountPrice: 1500,
//     image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
//   },
// ]
const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false)

  const discount = Math.round(
    ((product.price - product.discountPrice) / product.price) * 100
  )

  return (
    <div className="group relative">

      {/* Image container */}
      <div className="relative overflow-hidden aspect-[3/4] bg-primary-100">

        {/* Product image */}
        <img
src={product.images?.[0]?.url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount badge — top left */}
        <span className="absolute top-3 left-3 bg-gold text-white text-xs font-body px-2 py-1">
          -{discount}%
        </span>

        {/* Wishlist button — top right */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-200"
        >
          <Heart
            size={15}
            strokeWidth={1.5}
            className={wishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}
          />
        </button>

        {/* Add to cart — hover pe aaye */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white text-center py-3 font-body text-xs tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer flex items-center justify-center gap-2">
          <ShoppingBag size={14} />
          Add to Cart
        </div>

      </div>

      {/* Product info */}
      <div className="pt-4">
        <p className="font-body text-xs text-gold tracking-widest uppercase mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product._id}`}>
          <h3 className="font-heading text-base text-gray-900 hover:text-gold-dark transition-colors duration-200 mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-3">
          <span className="font-body text-base font-medium text-gray-900">
            Rs. {product.discountPrice.toLocaleString()}
          </span>
          <span className="font-body text-sm text-gray-400 line-through">
            Rs. {product.price.toLocaleString()}
          </span>
        </div>
      </div>

    </div>
  )
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState([])
useEffect(() => {

  const fetchProducts = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/products"
      )

      const featuredOnly = data.filter(
        (product) => product.featured === true
      )

      setProducts(featuredOnly)

    } catch (error) {

      console.log(error)

    }
  }

  fetchProducts()

}, [])
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      {/* Section heading */}
      <div className="text-center mb-12">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
          Handpicked For You
        </p>
        <h2 className="font-heading text-4xl text-gray-900 mb-4">
          Featured Products
        </h2>
        <p className="font-body text-sm text-gray-500 max-w-md mx-auto">
          Explore our most loved pieces — crafted for elegance, designed for comfort.
        </p>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* View all button */}
      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-body text-sm tracking-widest uppercase px-10 py-3.5 transition-colors duration-300"
        >
          View All Products
        </Link>
      </div>

    </section>
  )
}

export default FeaturedProducts