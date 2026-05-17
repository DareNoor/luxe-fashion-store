import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Collections from "./pages/Collections"
import Sales from "./pages/Sales"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import ProductDetail from "./pages/ProductDetail"
import Login from "./pages/Login.jsx"
import Hero from "./components/Hero.jsx"
import Categories from "./components/Categories.jsx"
import FeaturedProducts from "./components/FeaturedProducts.jsx"

const App = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/featuredproducts" element={<FeaturedProducts />} />

      </Routes>
    </div>
  )
}

export default App