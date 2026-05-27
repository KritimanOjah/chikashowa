import { motion } from "framer-motion"

export default function Marquee() {

  return (

    <div className="overflow-hidden border-y-4 border-[#4a1e1e] bg-[#8b1e1e] py-4">

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >

        <div className="flex gap-16 text-white text-2xl font-black tracking-[0.2em] uppercase pr-16">

          <span>SHOWA RETRO</span>
          <span>東京 STREET CULTURE</span>
          <span>RACING DIVISION</span>
          <span>VINTAGE ARCHIVE</span>
          <span>DRIFT TOKYO</span>
          <span>昭和 STYLE</span>

        </div>

        <div className="flex gap-16 text-white text-2xl font-black tracking-[0.2em] uppercase pr-16">

          <span>SHOWA RETRO</span>
          <span>東京 STREET CULTURE</span>
          <span>RACING DIVISION</span>
          <span>VINTAGE ARCHIVE</span>
          <span>DRIFT TOKYO</span>
          <span>昭和 STYLE</span>

        </div>

      </motion.div>

    </div>
  )
}