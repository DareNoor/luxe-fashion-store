import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from "lucide-react"

const Login = () => {

  const [isLogin, setIsLogin] = useState(true)
  const [showPass, setShowPass] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    setErrors({
      ...errors,
      [e.target.name]: ""
    })
  }

  const validate = () => {

    const newError = {}

    // Name validation
    if (!isLogin && !formData.name.trim()) {
      newError.name = "Name is required"
    }

    // Email validation
    if (!formData.email) {
      newError.email = "Email is required"
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Invalid email"
    }

    // Password validation
    if (!formData.password) {
      newError.password = "Password is required"
    }
    else if (formData.password.length < 6) {
      newError.password = "Min 6 characters"
    }

    return newError
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    const newError = validate()

    if (Object.keys(newError).length > 0) {
      setErrors(newError)
      return
    }

    console.log("Form submitted:", formData)
  }

  return (

    <div className='min-h-screen bg-cream flex items-center justify-center px-4'>

      <div className='w-full max-w-md'>

        {/* Logo */}
        <div className='text-center mb-10'>

          <Link
            to='/'
            className='font-heading text-3xl font-bold tracking-widest uppercase text-gray-900'
          >
            LUXE
          </Link>

          <p className='font-body text-sm text-gray-500 mt-2'>
            {isLogin ? "Welcome back" : "Create your account"}
          </p>

        </div>

        {/* Toggle Buttons */}
        <div className='flex mb-8 border border-primary-200'>

          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 font-body text-sm tracking-widest uppercase transition-colors duration-200 ${
              isLogin
                ? "bg-gray-900 text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 font-body text-sm tracking-widest uppercase transition-colors duration-200 ${
              !isLogin
                ? "bg-gray-900 text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Register
          </button>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

          {/* Name Input */}
          {!isLogin && (
            <div>

              <label className='font-body text-xs tracking-widest uppercase text-gray-500 mb-2 block'>
                Full Name
              </label>

              <input
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter Your Name'
                className={`w-full border px-4 py-3 font-body text-sm bg-white focus:outline-none focus:border-gold transition-colors ${
                  errors.name
                    ? "border-red-400"
                    : "border-primary-200"
                }`}
              />

              {errors.name && (
                <p className='font-body text-xs text-red-400 mt-1'>
                  {errors.name}
                </p>
              )}

            </div>
          )}

          {/* Email Input */}
          <div>

            <label className='font-body text-xs tracking-widest uppercase text-gray-500 mb-2 block'>
              Email
            </label>

            <input
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter Your Email'
              className={`w-full border px-4 py-3 font-body text-sm bg-white focus:outline-none focus:border-gold transition-colors ${
                errors.email
                  ? "border-red-400"
                  : "border-primary-200"
              }`}
            />

            {errors.email && (
              <p className='font-body text-xs text-red-400 mt-1'>
                {errors.email}
              </p>
            )}

          </div>

          {/* Password Input */}
          <div>

            <label className='font-body text-xs tracking-widest uppercase text-gray-500 mb-2 block'>
              Password
            </label>

            <div className='relative'>

              <input
                type={showPass ? "text" : "password"}
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='.......'
                className={`w-full placeholder:text-3xl border px-4 py-3 font-body text-sm bg-white focus:outline-none focus:border-gold transition-colors ${
                  errors.password
                    ? "border-red-400"
                    : "border-primary-200"
                }`}
              />

              <button
                type='button'
                onClick={() => setShowPass(!showPass)}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700'
              >
                {
                  showPass
                    ? <EyeOff size={16} />
                    : <Eye size={16} />
                }
              </button>

            </div>

            {errors.password && (
              <p className="font-body text-xs text-red-400 mt-1">
                {errors.password}
              </p>
            )}

          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-gray-900 hover:bg-black text-white font-body text-sm tracking-widest uppercase py-4 transition-colors duration-300 mt-2'
          >
            {isLogin ? "Login" : "Create Account"}
          </button>

        </form>

        {/* Bottom Toggle */}
        <p className='font-body text-sm text-center text-gray-500 mt-6'>

          {
            isLogin
              ? "Don't have an account?"
              : "Already have an account?"
          }

          <button
            onClick={() => setIsLogin(!isLogin)}
            className='text-gold-dark hover:text-gold transition-colors duration-200 ml-2'
          >
            {isLogin ? "Register" : "Login"}
          </button>

        </p>

      </div>

    </div>
  )
}

export default Login