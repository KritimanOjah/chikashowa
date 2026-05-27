import { motion } from "framer-motion"

export default function JapaneseBackground() {

  return (

    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[5%] text-[120px] md:text-[220px] font-black text-[#8b1e1e]/5 rotate-[-12deg]"
      >
        昭和
      </motion.div>

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[5%] text-[120px] md:text-[260px] font-black text-[#d4a017]/10 rotate-[12deg]"
      >
        東京
      </motion.div>

      <motion.div
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute top-[45%] left-[35%] text-[80px] md:text-[160px] font-black text-[#4a1e1e]/5 rotate-[-8deg]"
      >
        レトロ
      </motion.div>

    </div>
  )
}