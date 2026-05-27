import { motion } from "framer-motion"

export default function SplitText({
  text,
  className,
}) {

  const letters = text.split("")

  return (

    <h1 className={className}>

      {letters.map((letter, index) => (

        <motion.span
          key={index}
          initial={{
            y: 200,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: index * 0.03,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>

      ))}

    </h1>

  )
}