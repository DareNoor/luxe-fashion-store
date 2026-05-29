import React, { useEffect, useState } from "react"
import api from "../utils/api"

const Orders = () => {

  const [orders, setOrders] = useState([])

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const { data } = await api.get("/orders")

        setOrders(data)

      } catch (error) {

        console.log(error)

      }
    }

    fetchOrders()

  }, [])

  return (

    <div className="min-h-screen bg-cream py-12">

      <div className="max-w-5xl mx-auto px-4">

        <h1 className="font-heading text-4xl mb-10">
          My Orders
        </h1>

        <div className="flex flex-col gap-6">

          {orders.map((order) => (

            <div
              key={order._id}
              className="bg-white border border-primary-200 p-6"
            >

              <div className="flex justify-between mb-4">

                <p className="font-body text-sm text-gray-500">
                  Order ID: {order._id}
                </p>

                <p className="font-body text-sm text-gold">
                  Rs. {order.totalPrice}
                </p>

              </div>

              <div className="flex flex-col gap-3">

                {order.items.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-20 object-cover"
                    />

                    <div>

                      <h3 className="font-body text-sm">
                        {item.name}
                      </h3>

                      <p className="font-body text-xs text-gray-400">
                        Qty: {item.qty}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Orders