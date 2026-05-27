import Navbar from "@/components/Navbar"
import { Link } from "react-router-dom"
import products from "@/data/products"
import { motion } from "framer-motion"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ParallaxCard from "@/components/ParallaxCard"
import QuickView from "@/components/QuickView"

export default function Shop() {

  const { addToCart } = useCart()

  const [activeFilter, setActiveFilter] =
    useState("ALL")

  const [search, setSearch] = useState("")
  const [selectedProduct, setSelectedProduct] =
  useState(null)

const [quickViewOpen, setQuickViewOpen] =
  useState(false)

  const filteredProducts = products.filter(
    (product) => {

      const matchesCategory =
        activeFilter === "ALL"
          ? true
          : product.category === activeFilter

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())

      return matchesCategory && matchesSearch
    }
  )

  return (
<ParallaxCard>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#f6ecd9] text-[#4a1e1e]"
    >

      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-20">

        <p className="inline-block bg-[#8b1e1e] text-white px-4 py-2 border-2 border-[#4a1e1e] rotate-[-2deg] font-black mb-6">
          SHOP
        </p>

        <h1 className="text-[60px] md:text-[110px] leading-[0.9] mb-10">
          ALL PRODUCTS
        </h1>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-4 mb-12">

          <button
            onClick={() => setActiveFilter("ALL")}
            className={`border-2 border-[#4a1e1e] px-5 py-2 font-black ${
              activeFilter === "ALL"
                ? "bg-[#8b1e1e] text-white"
                : "bg-[#fff7ea]"
            }`}
          >
            ALL
          </button>

          <button
            onClick={() => setActiveFilter("TEE")}
            className={`border-2 border-[#4a1e1e] px-5 py-2 font-black ${
              activeFilter === "TEE"
                ? "bg-[#8b1e1e] text-white"
                : "bg-[#fff7ea]"
            }`}
          >
            TEES
          </button>

          <button
            onClick={() => setActiveFilter("HOODIE")}
            className={`border-2 border-[#4a1e1e] px-5 py-2 font-black ${
              activeFilter === "HOODIE"
                ? "bg-[#8b1e1e] text-white"
                : "bg-[#fff7ea]"
            }`}
          >
            HOODIES
          </button>

          <button
            onClick={() => setActiveFilter("JACKET")}
            className={`border-2 border-[#4a1e1e] px-5 py-2 font-black ${
              activeFilter === "JACKET"
                ? "bg-[#8b1e1e] text-white"
                : "bg-[#fff7ea]"
            }`}
          >
            JACKETS
          </button>

        </div>

        {/* SEARCH */}
        <div className="mb-12">

          <input
            type="text"
            placeholder="SEARCH SHOWA ARCHIVE..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border-4 border-[#4a1e1e] bg-[#fff7ea] px-6 py-4 text-xl font-black outline-none placeholder:text-[#4a1e1e]/50"
          />

        </div>

        {/* PRODUCT GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {filteredProducts.map((product) => (

            <Link
              key={product.id}
              to={`/product/${product.id}`}
            >

              <div className="group bg-[#fff7ea] border-4 border-[#4a1e1e] overflow-hidden shadow-xl hover:-translate-y-4 hover:rotate-[-1deg] transition duration-500">

                <div className="relative h-[420px] overflow-hidden">

                 <img
  src={product.image}
  alt={product.name}
  className="w-full h-full object-cover absolute inset-0 group-hover:opacity-0 transition duration-500"
/>

{product.hoverImage && (

  <img
    src={product.hoverImage}
    alt={product.name}
    className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 scale-110"
  />

)}

                  <div className="absolute top-4 left-4 bg-[#8b1e1e] text-white px-3 py-1 border-2 border-[#f6ecd9] font-black">
                    {product.label}
                  </div>

                </div>

                <div className="p-5">

                  <div className="flex justify-between items-center mb-4">

                    <h2 className="text-4xl">
                      {product.name}
                    </h2>

                    <p className="font-black text-xl">
                      ₹{product.price}
                    </p>

                  </div>

                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      addToCart(product)
                    }}
                    className="w-full rounded-none bg-[#8b1e1e] hover:bg-[#651515] border-2 border-[#4a1e1e]"
                  >
                    ADD TO CART
                  </Button>
<button
  onClick={(e) => {
    e.preventDefault()
    setSelectedProduct(product)
    setQuickViewOpen(true)
  }}
  className="w-full mt-3 border-2 border-[#4a1e1e] py-4 font-black bg-[#fff7ea] hover:bg-[#e8dcc7] transition duration-300"
>
  QUICK VIEW
</button>
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>
      <QuickView
  product={selectedProduct}
  isOpen={quickViewOpen}
  onClose={() => setQuickViewOpen(false)}
/>

    </motion.div>
    </ParallaxCard>
  )
}