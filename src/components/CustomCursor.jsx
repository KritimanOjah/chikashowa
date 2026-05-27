import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [isPointer, setIsPointer] =
    useState(false)

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      })

      const target =
        e.target.closest("button, a")

      setIsPointer(!!target)
    }

    window.addEventListener(
      "mousemove",
      moveCursor
    )

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      )
    }

  }, [])

  return (

    <motion.div
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isPointer ? 2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      className="fixed top-0 left-0 z-[99999] w-6 h-6 rounded-full bg-[#8b1e1e] pointer-events-none mix-blend-difference"
    />

  )
}