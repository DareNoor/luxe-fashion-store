import React from "react"
import { Link } from "react-router-dom"
import { CheckCircle } from "lucide-react"

const Success = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">

      <div className="bg-white border border-primary-200 p-10 max-w-md w-full text-center">

        <CheckCircle
          size={70}
          className="mx-auto text-green-500 mb-6"
        />

        <h1 className="font-heading text-3xl text-gray-900 mb-4">
          Order Placed
        </h1>

        <p className="font-body text-gray-500 mb-8">
          Thank you for shopping with us.
        </p>

        <Link
          to="/shop"
          className="bg-gray-900 hover:bg-black text-white px-8 py-4 uppercase tracking-widest text-sm inline-block transition-colors duration-300"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  )
}

export default Success