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
import Footer from "./components/Footer.jsx"
import { ShopProvider } from "./context/ShopContext.jsx"
import Admin from "./pages/Admin.jsx"
import Checkout from "./pages/Checkout.jsx"
import { Toaster } from "react-hot-toast"
import Success from "./pages/Success.jsx"
import Orders from "./pages/Order.jsx"
const App = () => {
  return (
    <>
    <ShopProvider>
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/sale" element={<Sales />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/featuredproducts" element={<FeaturedProducts />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkout" element={<Checkout />} />
<Route path="/success" element={<Success />} />
        <Route path="/orders" element={<Orders />} />

      </Routes>
      <Footer/>
    </div>
    </ShopProvider>
    </>
  )
}

export default App