import { useShop } from "../context/ShopContext"
import { X } from "lucide-react"

const categories = ["All", "Women", "Men", "Kids", "Accessories"]

const FilterSidebar = ({ onClose }) => {
  const { filters, updateFilter, resetFilters } = useShop()

  return (
    <div className="w-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-heading text-lg text-gray-900">Filters</h3>
        <div className="flex items-center gap-4">
          <button
            onClick={resetFilters}
            className="font-body text-xs text-gold-dark tracking-widest uppercase hover:text-gold transition-colors duration-200"
          >
            Reset
          </button>
          {onClose && (
            <button onClick={onClose} className="md:hidden text-gray-500 hover:text-gray-900">
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Category filter */}
      <div className="mb-8">
        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
          Category
        </h4>
        <div className="flex flex-col gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter("category", cat === "All" ? "" : cat)}
              className={`flex items-center gap-3 font-body text-sm text-left transition-colors duration-200 ${
                filters.category === (cat === "All" ? "" : cat)
                  ? "text-gold-dark font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <span className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                filters.category === (cat === "All" ? "" : cat)
                  ? "border-gold bg-gold"
                  : "border-gray-300"
              }`}>
                {filters.category === (cat === "All" ? "" : cat) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </span>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div className="mb-8">
        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
          Price Range
        </h4>
        <div className="flex items-center justify-between mb-3">
          <span className="font-body text-xs text-gray-600">
            Rs. {filters.minPrice.toLocaleString()}
          </span>
          <span className="font-body text-xs text-gray-600">
            Rs. {filters.maxPrice.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={10000}
          step={500}
          value={filters.maxPrice}
          onChange={(e) => updateFilter("maxPrice", Number(e.target.value))}
          className="w-full accent-gold cursor-pointer"
        />
      </div>

      {/* Sort */}
      <div className="mb-8">
        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
          Sort By
        </h4>
        <select
          value={filters.sort}
          onChange={(e) => updateFilter("sort", e.target.value)}
          className="w-full font-body text-sm text-gray-700 border border-primary-200 bg-cream px-3 py-2 focus:outline-none focus:border-gold"
        >
          <option value="newest">Newest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="discount">Biggest Discount</option>
        </select>
      </div>

    </div>
  )
}

export default FilterSidebar