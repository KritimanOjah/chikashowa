import { motion } from "framer-motion"
import { useRef } from "react"

export default function MagneticButton({
  children,
  className,
  onClick,
}) {

  const ref = useRef(null)

  function handleMouseMove(e) {

    const element = ref.current

    const rect =
      element.getBoundingClientRect()

    const x =
      e.clientX - rect.left - rect.width / 2

    const y =
      e.clientY - rect.top - rect.height / 2

    element.style.transform =
      `translate(${x * 0.15}px, ${y * 0.15}px)`
  }

  function handleMouseLeave() {

    ref.current.style.transform =
      "translate(0px, 0px)"
  }

  return (

    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  )
}