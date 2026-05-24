import React, { useState } from 'react'
import { LayoutDashboard, Package, ShoppingBag } from "lucide-react"
import { allProducts } from "../utils/products"
const Admin = () => {
    const [activeTab,setActiveTab]=useState("dashboard")
    const sidebarLinks=[
        {id:"dashboard", label:"Dashboard", icon:LayoutDashboard},
        {id:"products", label:"Products", icon: Package},
  { id: "orders", label: "Orders", icon: ShoppingBag },

    ]
    const stats=[
        {label:"Total Revenue", value:"Rs. 2,45,000", change:"+12% this month"},
        {label:"Total Orders",value:"145", change:"+8% this month"},
        {label:"Total Producrs", value:"12", change:"4 low stock"},
        {label:"Total Customers", value:"89",change:"+5% this month"}
    ]
    const recentOrders=[
       { id: "#ORD-001", customer: "Sara Ahmed", product: "Embroidered Lawn Suit", amount: "Rs. 3,200", status: "Delivered" },
  { id: "#ORD-002", customer: "Maha Rizvi", product: "Pearl Drop Earrings", amount: "Rs. 950", status: "Processing" },
  { id: "#ORD-003", customer: "Zara Khan", product: "Leather Tote Bag", amount: "Rs. 4,200", status: "Shipped" },
  { id: "#ORD-004", customer: "Ali Hassan", product: "Linen Kurta", amount: "Rs. 2,100", status: "Pending" },
  { id: "#ORD-005", customer: "Fatima Malik", product: "Silk Dupatta", amount: "Rs. 1,750", status: "Delivered" }, 
    ]
    const statusColors = {
  Delivered: "bg-green-100 text-green-700",
  Processing: "bg-blue-100 text-blue-700",
  Shipped: "bg-yellow-100 text-yellow-700",
  Pending: "bg-gray-100 text-gray-600",
  Cancelled: "bg-red-100 text-red-700",
}
  return (
    <div className='min-h-screen flex'>
        <div className='w-64 bg-gray-800 flex-shrink-0 p-6'>
            <h1 className='font-heading text-xl text-white mb-8 tracking-widest'>LUXE ADMIN</h1>
          {sidebarLinks.map((link) => (
  <button
    key={link.id}
    onClick={() => setActiveTab(link.id)}
    className={`flex items-center gap-3 w-full text-left px-4 py-3 mb-2 font-body text-sm transition-colors duration-200 ${
      activeTab === link.id
        ? "bg-gold text-white"
        : "text-white/60 hover:text-white hover:bg-white/10"
    }`}
  >
    <link.icon size={18} />
    {link.label}
  </button>
))}
        </div>
        <div className='flex-1 p-8 overflow-auto'>
          {/* Dash tab */}
            {activeTab==="dashboard"&&(
                <div>
                    <h2 className='font-heading text-3xl text-gray-900 mb-8'>Dashboard</h2>
                      <div>
                       {/* Stats cards */}
                 <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10'>
                  {stats.map((stat)=>(
                    <div key={stat.label} className='bg-white border border-primary-200 p-6'>
                      <p className='font-body text-xs tracking-widest uppercase text-gray-400 mb-4'>
                        {stat.label}
                      </p>
                      <p className='font-heading text-2xl text-gray-900 mb-1'>{stat.value}</p>
                      <p className='font-body text-xs text-gray-400'>{stat.change}</p>
                    </div>
                  ))}
                 </div>
         {/* Recent orders table */}
                 <div className='bg-white border border-primary-200'>
                  <div className='p-6 border-b border-primary-200'>
                    <h3 className='font-heading text-xl text-gray-900'>Recent Orders</h3>
                  </div>
                  <div className='overflow-auto'>
                    <table className='w-full'>
                      <thead className='bg-primary-100'>
                        <tr>
                          {["Order ID","Customer","Product","Amount","Status"].map((h)=>(
                            <th key={h} className='font-body text-xs tracking-widest uppercase text-gray-500 px-6 py-4 text-left'>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                         {recentOrders.map((order)=>(
                      <tr key={order.id} className='border-t border-primary-200 hover:bg-primary-100 transition-colors'>
                        <td className='font-body text-sm text-gray-900 px-6 py-4'>{order.id}</td>
                        <td className='font-body text-sm text-gray-900 px-6 py-4'>{order.customer}</td>
                        <td className='font-body text-sm text-gray-900 px-6 py-4'>{order.product}</td>
                        <td className='font-body text-sm text-gray-900 px-6 py-4'>{order.amount}</td>
                        <td className='px-6 py-4'>
                          <span className={`font-body text-xs px-3 py-1 rounded-full ${statusColors[order.stats]}`}>{order.status}</span>
                          
                        </td>
                       </tr>
                    ))}
                      </tbody>
                    </table>
                   
                  </div>
                  </div>              
                      </div>
                    
                </div>
            )}
            
       {/* Products Tab */}
       {activeTab==="products" &&(
<div>
  <div className='flex items-center justify-between mb-8'>
    <h2 className='font-heading text-3xl text-gray-900'>Products</h2>
    <button className='flex items-center gap-2 bg-gray-900 text-white font-body text-sm tracking-widest uppercase px-6 py-3 hover:bg-black transition-colors'>
      + Add Product
    </button>
  </div>
  <div className='bg-white border border-primary-200 overflow-x-auto'>
    <table className='w-full'>
      <thead className='bg-primary-100'>
        <tr>
          {["Image","Name","Category","Price","Discount Price","Actions"].map((h)=>(
            <th key={h} className='font-body text-xs tracking-widest uppercase text-gray-500 px-6 py-4 text-left
            '>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {allProducts.map((product)=>(
          <tr key={product.id} className='border-t border-primary-200 hover:bg-primary-100 transition-colors'>
            <td className='px-6 py-4'>
              <img src={product.image} alt={product.name} className='w-12 h-12 object-cover' />
         </td>
         <td className='font-body text-sm text-gray-900 px-6 py-4'>{product.name}</td>
         <td className='font-body text-sm text-gray-900 px-6 py-4'>{product.category}</td>
         <td className='font-body text-sm text-gray-900 px-6 py-4'>{product.price}</td>
         <td className='font-body text-sm text-gray-900 px-6 py-4'>{product.discountPrice}</td>
         <td className='px-6 py-4'>
          <div className='flex items-center gap-3'>
            <button className='text-gray-400 hover:text-red-500 transition-colors'>Delete</button>
          </div>
         </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>)}
{/* Orders tab */}
{activeTab === "orders" && (
  <div>
    <h2 className="font-heading text-3xl text-gray-900 mb-8">Orders</h2>

    <div className="bg-white border border-primary-200 overflow-x-auto">
      <table className="w-full">
        <thead className="bg-primary-100">
          <tr>
            {["Order ID", "Customer", "Product", "Amount", "Status", "Update"].map((h) => (
              <th key={h} className="font-body text-xs tracking-widest uppercase text-gray-500 px-6 py-4 text-left">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order) => (
            <tr key={order.id} className="border-t border-primary-200 hover:bg-primary-100 transition-colors">
              <td className="font-body text-sm text-gray-900 px-6 py-4">{order.id}</td>
              <td className="font-body text-sm text-gray-600 px-6 py-4">{order.customer}</td>
              <td className="font-body text-sm text-gray-600 px-6 py-4">{order.product}</td>
              <td className="font-body text-sm text-gray-900 px-6 py-4">{order.amount}</td>
              <td className="px-6 py-4">
                <span className={`font-body text-xs px-3 py-1 rounded-full ${statusColors[order.status]}`}>
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <select className="font-body text-xs border border-primary-200 px-2 py-1 focus:outline-none focus:border-gold bg-cream">
                  {["Pending", "Processing", "Shipped", "Delivered", "Cancelled"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}
        </div>
    </div>
  )
}

export default Admin