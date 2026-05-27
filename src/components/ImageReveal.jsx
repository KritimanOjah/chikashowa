import { motion } from "framer-motion"

export default function ImageReveal({
  src,
  alt,
}) {

  return (

    <div className="relative overflow-hidden">

      {/* REVEAL */}
      <motion.div
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        transition={{
          duration: 1,
          ease: [0.83, 0, 0.17, 1],
        }}
        viewport={{ once: true }}
        className="absolute inset-0 origin-top bg-[#8b1e1e] z-20"
      />

      <motion.img
        initial={{
          scale: 1.2,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />

    </div>

  )
}