import { motion } from "framer-motion"

export default function Loader() {

  return (

    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-[#f6ecd9] flex items-center justify-center overflow-hidden"
    >

      {/* BACKGROUND CIRCLES */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#8b1e1e]/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">

        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
          className="logo-text text-7xl md:text-9xl text-[#4a1e1e]"
        >
          CHIKASHOWA
        </motion.h1>

        {/* BAR */}
        <div className="w-72 h-3 border-2 border-[#4a1e1e] mt-8 overflow-hidden">

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="h-full bg-[#8b1e1e]"
          />

        </div>

        <p className="mt-5 font-black tracking-[6px] text-sm">
          SHOWA STREET ARCHIVE
        </p>

      </div>

    </motion.div>
  )
}