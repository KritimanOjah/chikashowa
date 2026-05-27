import { motion } from "framer-motion"

export default function RevealText({
  children,
  className = "",
}) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 120,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className={`overflow-hidden ${className}`}
    >

      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>

    </motion.div>
  )
}