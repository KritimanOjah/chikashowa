import { motion } from "framer-motion"
import { useRef } from "react"

export default function ParallaxCard({
  children,
}) {

  const ref = useRef(null)

  const handleMouseMove = (e) => {

    const card = ref.current

    if (!card) return

    const rect =
      card.getBoundingClientRect()

    const x =
      e.clientX - rect.left

    const y =
      e.clientY - rect.top

    const rotateY =
      ((x / rect.width) - 0.5) * 16

    const rotateX =
      ((y / rect.height) - 0.5) * -16

    card.style.transform =
      `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
      `
  }

  const reset = () => {

    const card = ref.current

    if (!card) return

    card.style.transform =
      `
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
      `
  }

  return (

    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      style={{
        transformStyle:
          "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  )
}