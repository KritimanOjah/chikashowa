import { motion } from "framer-motion"

export default function FloatingBadge({
  text,
}) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileHover={{
        y: -10,
        rotate: -4,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="absolute top-4 right-4 z-20 bg-[#8b1e1e] text-white px-4 py-2 border-2 border-[#f6ecd9] font-black text-sm tracking-widest shadow-2xl"
    >
      {text}
    </motion.div>

  )
}