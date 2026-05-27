import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"

import Navbar from "@/components/Navbar"
import products from "@/data/products"
import { useCart } from "@/context/CartContext"
import ImageZoomModal from "@/components/ImageZoomModal"

export default function ProductDetail() {

  const { id } = useParams()

  const product = products.find(
    (p) => p.id === Number(id)
  )

  const { addToCart } = useCart()

  const [selectedSize, setSelectedSize] =
    useState("M")

  const [zoomOpen, setZoomOpen] =
    useState(false)

  if (!product) {

    return (
      <div className="min-h-screen flex items-center justify-center text-4xl font-black">
        PRODUCT NOT FOUND
      </div>
    )
  }

  return (

    <div className="min-h-screen bg-[#f6ecd9] text-[#4a1e1e]">

      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="sticky top-28"
          >

            <div className="overflow-hidden border-4 border-[#4a1e1e] bg-[#e8dcc7]">

              <img
                src={product.image}
                alt={product.name}
                onClick={() => setZoomOpen(true)}
                className="w-full h-[750px] object-cover hover:scale-105 transition duration-700 cursor-zoom-in"
              />

            </div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="inline-block bg-[#8b1e1e] text-white px-4 py-2 border-2 border-[#4a1e1e] rotate-[-2deg] font-black mb-6">
              {product.category}
            </p>

            <h1 className="text-[70px] md:text-[110px] leading-[0.9] mb-6">
              {product.name}
            </h1>

            <p className="text-4xl font-black mb-10">
              ₹{product.price}
            </p>

            <p className="text-xl leading-relaxed mb-10 max-w-2xl">
              Inspired by underground Japanese racing culture,
              vintage Showa-era graphics,
              and rebellious Tokyo streetwear aesthetics.

              Designed for collectors, drifters,
              and lovers of retro Japanese fashion.
            </p>

            {/* SIZE SELECT */}
            <div className="mb-10">

              <p className="font-black uppercase tracking-[0.2em] mb-4">
                Select Size
              </p>

              <div className="flex gap-4">

                {["S", "M", "L", "XL"].map((size) => (

                  <button
                    key={size}
                    onClick={() =>
                      setSelectedSize(size)
                    }
                    className={`w-16 h-16 border-4 border-[#4a1e1e] font-black transition duration-300 ${
                      selectedSize === size
                        ? "bg-[#8b1e1e] text-white"
                        : "bg-[#fff7ea]"
                    }`}
                  >
                    {size}
                  </button>

                ))}

              </div>

            </div>

            {/* BUTTON */}
            <button
              onClick={() =>
                addToCart({
                  ...product,
                  selectedSize,
                })
              }
              className="bg-[#8b1e1e] hover:bg-[#651515] text-white border-4 border-[#4a1e1e] px-10 py-6 text-2xl font-black transition duration-300 hover:translate-x-2"
            >
              ADD TO CART
            </button>

            {/* EXTRA INFO */}
            <div className="mt-20 border-t-4 border-[#4a1e1e] pt-10">

              <div className="grid md:grid-cols-2 gap-10">

                <div>

                  <h3 className="text-2xl font-black mb-4">
                    DETAILS
                  </h3>

                  <ul className="space-y-3 font-medium">

                    <li>• Heavyweight cotton fabric</li>
                    <li>• Oversized fit</li>
                    <li>• Vintage washed texture</li>
                    <li>• Japanese racing graphics</li>

                  </ul>

                </div>

                <div>

                  <h3 className="text-2xl font-black mb-4">
                    SHIPPING
                  </h3>

                  <ul className="space-y-3 font-medium">

                    <li>• Worldwide shipping</li>
                    <li>• Dispatch in 2-4 days</li>
                    <li>• Premium packaging</li>
                    <li>• Limited archive release</li>

                  </ul>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      <ImageZoomModal
        image={product.image}
        open={zoomOpen}
        onClose={() => setZoomOpen(false)}
      />

    </div>
  )
}