import { motion, AnimatePresence } from "framer-motion"

export default function LookbookModal({
  isOpen,
  onClose,
}) {

  const images = [
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
  ]

  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-black overflow-y-auto"
        >

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-50 border-4 border-white text-white px-6 py-3 font-black hover:bg-white hover:text-black transition"
          >
            CLOSE
          </button>

          {/* TITLE */}
          <div className="pt-32 pb-16 px-8 text-center">

            <p className="text-white/60 uppercase tracking-[0.4em] text-sm mb-6">
              SHOWA ARCHIVE
            </p>

            <h1 className="text-white text-[60px] md:text-[140px] leading-[0.9]">
              LOOKBOOK
            </h1>

          </div>

          {/* IMAGES */}
          <div className="max-w-7xl mx-auto px-8 pb-32 grid md:grid-cols-2 gap-10">

            {images.map((img, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                className="overflow-hidden"
              >

                <img
                  src={img}
                  alt=""
                  className="w-full h-[700px] object-cover hover:scale-105 transition duration-700"
                />

              </motion.div>

            ))}

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}