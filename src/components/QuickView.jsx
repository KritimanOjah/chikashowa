import { motion, AnimatePresence } from "framer-motion"

export default function QuickView({
  product,
  isOpen,
  onClose,
}) {

  if (!product) return null

  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center p-6"
          onClick={onClose}
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.4,
            }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#fff7ea] border-4 border-[#4a1e1e] max-w-5xl w-full grid md:grid-cols-2 overflow-hidden shadow-2xl"
          >

            {/* IMAGE */}
            <div className="relative bg-[#e8dcc7]">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-4 left-4 bg-[#8b1e1e] text-white px-4 py-2 border-2 border-[#fff7ea] font-black">
                {product.label}
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-10 flex flex-col justify-between">

              <div>

                <p className="uppercase tracking-[0.3em] text-sm font-black mb-4">
                  {product.category}
                </p>

                <h2 className="text-6xl leading-none mb-6">
                  {product.name}
                </h2>

                <p className="text-3xl font-black mb-8">
                  ₹{product.price}
                </p>

                <p className="text-lg leading-relaxed text-[#4a1e1e]/80">
                  Inspired by underground Tokyo racing culture,
                  vintage Japanese graphics,
                  and rebellious Showa-era aesthetics.
                </p>

              </div>

              <div className="flex flex-col gap-4 mt-10">

                <button className="bg-[#8b1e1e] hover:bg-[#651515] text-white border-4 border-[#4a1e1e] py-5 text-xl font-black transition duration-300">
                  ADD TO CART
                </button>

                <button
                  onClick={onClose}
                  className="border-4 border-[#4a1e1e] py-5 text-xl font-black hover:bg-[#e8dcc7] transition duration-300"
                >
                  CLOSE
                </button>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}