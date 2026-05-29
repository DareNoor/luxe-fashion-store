import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import api from "../utils/api"
import { clearCart } from "../redux/cartSlice"
import toast from "react-hot-toast"
const Checkout = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { items } = useSelector((state) => state.cart)

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    address: ""
  })

  const subtotal = items.reduce(
    (acc, item) => acc + item.discountPrice * item.qty,
    0
  )

  const shipping = subtotal > 2000 ? 0 : 200

  const total = subtotal + shipping

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const placeOrderHandler = async () => {

    try {

      const orderData = {

        orderItems: items.map((item) => ({
          name: item.name,
          image: item.images?.[0]?.url,
          price: item.discountPrice,
          qty: item.qty,
          size: item.size,
          product: item._id
        })),

        shippingAddress: formData,

        paymentMethod: "Cash on Delivery",

        itemsPrice: subtotal,

        shippingPrice: shipping,

        totalPrice: total

      }

      await api.post("/orders", orderData)

      dispatch(clearCart())

      toast.success("Order placed successfully")

navigate("/success")
    } catch (error) {

      console.log(error)

      toast.error("Failed to place order")

    }

  }

  return (

    <div className="min-h-screen bg-cream py-12">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="font-heading text-4xl text-gray-900 mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* FORM */}
          <div className="lg:col-span-2 bg-white border border-primary-200 p-8">

            <h2 className="font-heading text-2xl mb-6">
              Shipping Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="border border-primary-200 px-4 py-3 outline-none focus:border-gray-900"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-primary-200 px-4 py-3 outline-none focus:border-gray-900"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="border border-primary-200 px-4 py-3 outline-none focus:border-gray-900 md:col-span-2"
              />

              <textarea
                name="address"
                placeholder="Complete Address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                className="border border-primary-200 px-4 py-3 outline-none focus:border-gray-900 md:col-span-2"
              />

            </div>

          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white border border-primary-200 p-6 h-fit">

            <h2 className="font-heading text-2xl mb-6">
              Order Summary
            </h2>

            <div className="flex flex-col gap-4 mb-6">

              <div className="flex justify-between font-body text-sm text-gray-600">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between font-body text-sm text-gray-600">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `Rs. ${shipping}`}
                </span>
              </div>

              <div className="border-t border-primary-200 pt-4 flex justify-between font-body font-medium text-gray-900">

                <span>Total</span>

                <span>Rs. {total.toLocaleString()}</span>

              </div>

            </div>

            <button
              onClick={placeOrderHandler}
              className="w-full bg-gray-900 hover:bg-black text-white font-body text-sm tracking-widest uppercase py-4 transition-colors duration-300"
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Checkout