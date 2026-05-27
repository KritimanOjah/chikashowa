import { motion } from "framer-motion"
import featuredImage from "@/assets/products/product5.jpg"

export default function FeaturedCollection() {

  return (

    <section className="border-t-4 border-[#4a1e1e] bg-[#efe2cc] overflow-hidden">

      <div className="grid md:grid-cols-2 min-h-[900px]">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >

          <img
            src={featuredImage}
            alt="Featured Collection"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute top-8 left-8 bg-[#8b1e1e] text-white px-6 py-3 border-2 border-[#f6ecd9] font-black rotate-[-2deg]">
            LIMITED DROP
          </div>

        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center p-10 md:p-20"
        >

          <p className="uppercase tracking-[0.4em] text-sm font-black mb-6">
            SHOWA ARCHIVE 1987
          </p>

          <h2 className="text-[70px] md:text-[120px] leading-[0.85] mb-8">
            KANJO
            <br />
            RACER
          </h2>

          <p className="text-xl font-medium leading-relaxed max-w-xl mb-10">
            Inspired by underground Osaka racing culture,
            vintage Japanese garage aesthetics,
            and rebellious 80s streetwear energy.
          </p>

          <button className="w-fit bg-[#8b1e1e] hover:bg-[#651515] text-white border-4 border-[#4a1e1e] px-10 py-5 text-xl font-black transition duration-300 hover:translate-x-2">
            EXPLORE COLLECTION
          </button>

        </motion.div>

      </div>

    </section>
  )
}