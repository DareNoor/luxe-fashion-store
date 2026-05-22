import { Link } from "react-router-dom"
import { Heart, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { useShop } from "../context/ShopContext"
import { allProducts } from "../utils/products"

const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false)

  const discount = Math.round(
    ((product.price - product.discountPrice) / product.price) * 100
  )

  return (
    <div className="group relative">
      <div className="relative overflow-hidden aspect-[3/4] bg-primary-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-gold text-white text-xs font-body px-2 py-1">
          -{discount}%
        </span>
        {product.tag && (
          <span className="absolute top-3 left-14 bg-gray-900 text-white text-xs font-body px-2 py-1">
            {product.tag}
          </span>
        )}
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
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white text-center py-3 font-body text-xs tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer flex items-center justify-center gap-2">
          <ShoppingBag size={14} />
          Add to Cart
        </div>
      </div>
      <div className="pt-4">
        <p className="font-body text-xs text-gold tracking-widest uppercase mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
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

const ProductsGrid = () => {
  const { filters } = useShop()

  const filteredProducts = allProducts
    .filter((p) => {
      if (filters.category && p.category !== filters.category) return false
      if (p.discountPrice > filters.maxPrice) return false
      return true
    })
    .sort((a, b) => {
      if (filters.sort === "price-asc") return a.discountPrice - b.discountPrice
      if (filters.sort === "price-desc") return b.discountPrice - a.discountPrice
      if (filters.sort === "discount") return (b.price - b.discountPrice) - (a.price - a.discountPrice)
      return b.id - a.id
    })

  return (
    <div>
      {/* Count + Sort info */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-body text-sm text-gray-500">
          {filteredProducts.length} Products
        </p>
        {filters.category && (
          <p className="font-body text-xs text-gold tracking-widest uppercase">
            {filters.category}
          </p>
        )}
      </div>

      {/* No products */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="font-heading text-2xl text-gray-400 mb-2">No products found</p>
          <p className="font-body text-sm text-gray-400">Try adjusting your filters</p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsGrid