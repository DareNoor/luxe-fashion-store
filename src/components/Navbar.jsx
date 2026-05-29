import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../redux/userSlice"
import api from "../utils/axios"

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Collections", path: "/collections" },
  { label: "Sale", path: "/sale" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
]

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const { userInfo } = useSelector((state) => state.user)
  const { items } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const cartCount = items.reduce((acc, item) => acc + item.qty, 0)

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout")
      dispatch(logout())
    } catch (error) {
      dispatch(logout())
    }
  }

  const linkClass = ({ isActive }) =>
    `text-sm tracking-wide transition-colors duration-200 ${
      isActive
        ? "text-gold-dark font-medium border-b border-gold-dark pb-0.5"
        : "text-gray-600 hover:text-gold-dark"
    }`

  return (
    <>
      <nav className='w-full bg-cream/95 backdrop-blur-md border-b border-primary-200 sticky top-0 z-50'>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

          <div className='flex items-center justify-between h-16'>

            {/* Logo */}
            <NavLink
              to="/"
              className="font-heading text-2xl font-bold tracking-widest text-gray-900 uppercase"
            >
              LUXE
            </NavLink>

            {/* Desktop Links */}
            <div className='hidden md:flex items-center gap-8'>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={linkClass}
                  end={link.path === "/"}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Icons */}
            <div className='flex items-center gap-4'>

              <button className='hidden md:block text-gray-600 hover:text-gold transition-colors duration-200'>
                <Search size={20} strokeWidth={1.5} />
              </button>

              <button className='hidden md:block text-gray-600 hover:text-gold transition-colors duration-200'>
                <Heart size={20} strokeWidth={1.5} />
              </button>

              {/* Cart */}
              <NavLink
                to="/cart"
                className="relative text-gray-600 hover:text-gold transition-colors duration-200"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />

                <span className='absolute -top-2 -right-2 bg-gold text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>
                  {cartCount}
                </span>
              </NavLink>

              {/* User Dropdown */}
              {userInfo ? (
                <div className="relative group hidden md:block">

                  <button className="text-gray-600 hover:text-gold transition-colors duration-200">
                    <User size={20} strokeWidth={1.5} />
                  </button>

                  <div className="absolute right-0 top-8 w-48 bg-white border border-primary-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                    <div className="px-4 py-3 border-b border-primary-200">
                      <p className="font-body text-xs text-gray-500">
                        Signed in as
                      </p>

                      <p className="font-body text-sm text-gray-900 font-medium truncate">
                        {userInfo.name}
                      </p>
                    </div>

                    <NavLink
                      to="/profile"
                      className="block px-4 py-3 font-body text-sm text-gray-600 hover:text-gold hover:bg-primary-100 transition-colors"
                    >
                      My Profile
                    </NavLink>

                    <NavLink
                      to="/orders"
                      className="block px-4 py-3 font-body text-sm text-gray-600 hover:text-gold hover:bg-primary-100 transition-colors"
                    >
                      My Orders
                    </NavLink>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 font-body text-sm text-red-500 hover:bg-red-50 transition-colors"
                    >
                      Logout
                    </button>

                  </div>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="hidden md:block text-gray-600 hover:text-gold transition-colors duration-200"
                >
                  <User size={20} strokeWidth={1.5} />
                </NavLink>
              )}

              {/* Mobile Menu Button */}
              <button
                className='md:hidden text-gray-600 hover:text-gold transition-colors duration-200'
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen
                  ? <X size={24} strokeWidth={1.5} />
                  : <Menu size={24} strokeWidth={1.5} />
                }
              </button>

            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='md:hidden bg-cream border-t border-primary-200 px-6 py-6'>

            <div className='flex flex-col gap-6'>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={linkClass}
                  end={link.path === '/'}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

          </div>
        )}

      </nav>
    </>
  )
}

export default Navbar