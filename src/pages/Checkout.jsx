import { useState } from "react"
import { motion } from "framer-motion"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { useCart } from "@/context/CartContext"

export default function Checkout() {

  const { cart, total } = useCart()

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  return (

    <div className="min-h-screen bg-[#f6ecd9] text-[#4a1e1e]">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >

          <p className="font-black uppercase tracking-[4px] text-sm mb-4">
            Secure Checkout
          </p>

          <h1 className="text-6xl md:text-8xl leading-none">
            FINAL STEP
          </h1>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* SHIPPING FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="border-4 border-[#4a1e1e] bg-[#fff7ea] p-8"
          >

            <h2 className="text-4xl font-black mb-10">
              SHIPPING INFO
            </h2>

            <div className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-4 border-[#4a1e1e] bg-transparent px-5 py-4 text-lg outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-4 border-[#4a1e1e] bg-transparent px-5 py-4 text-lg outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-4 border-[#4a1e1e] bg-transparent px-5 py-4 text-lg outline-none"
              />

              <textarea
                name="address"
                placeholder="Full Address"
                value={formData.address}
                onChange={handleChange}
                rows={5}
                className="w-full border-4 border-[#4a1e1e] bg-transparent px-5 py-4 text-lg outline-none resize-none"
              />

              <div className="grid md:grid-cols-3 gap-4">

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="border-4 border-[#4a1e1e] bg-transparent px-5 py-4 text-lg outline-none"
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className="border-4 border-[#4a1e1e] bg-transparent px-5 py-4 text-lg outline-none"
                />

                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP"
                  value={formData.zip}
                  onChange={handleChange}
                  className="border-4 border-[#4a1e1e] bg-transparent px-5 py-4 text-lg outline-none"
                />

              </div>

            </div>

          </motion.div>

          {/* ORDER SUMMARY */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="border-4 border-[#4a1e1e] bg-[#fff7ea] p-8 h-fit sticky top-28"
          >

            <h2 className="text-4xl font-black mb-10">
              ORDER SUMMARY
            </h2>

            <div className="flex flex-col gap-6">

              {cart.length === 0 && (

                <p className="text-xl font-medium">
                  Your cart is empty.
                </p>

              )}

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="flex justify-between border-b-2 border-[#4a1e1e] pb-5"
                >

                  <div>

                    <h3 className="text-2xl font-black">
                      {item.name}
                    </h3>

                    <p className="font-medium">
                      Size: {item.selectedSize}
                    </p>

                    <p className="font-medium">
                      Qty: {item.quantity}
                    </p>

                  </div>

                  <p className="text-2xl font-black">
                    ₹{item.price * item.quantity}
                  </p>

                </div>

              ))}

            </div>

            {/* TOTAL */}
            <div className="flex justify-between items-center mt-10 border-t-4 border-[#4a1e1e] pt-6">

              <p className="text-3xl font-black">
                TOTAL
              </p>

              <p className="text-4xl font-black">
                ₹{total}
              </p>

            </div>

            {/* BUTTON */}
            <button className="w-full mt-10 bg-[#8b1e1e] hover:bg-[#651515] text-white border-4 border-[#4a1e1e] py-6 text-2xl font-black transition duration-300 hover:translate-y-[-2px]">

              PROCEED TO PAYMENT

            </button>

          </motion.div>

        </div>

      </section>

      <Footer />

    </div>
  )
}