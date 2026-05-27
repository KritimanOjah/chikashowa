import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const images = [
  "/images/look1.jpg",
  "/images/look2.jpg",
  "/images/look3.jpg",
  "/images/look4.jpg",
]

export default function HorizontalGallery() {

  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-70%"]
  )

  return (

    <section
      ref={targetRef}
      className="relative h-[300vh] bg-[#111]"
    >

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        <motion.div
          style={{ x }}
          className="flex gap-8 px-8"
        >

          {images.map((image, index) => (

            <div
              key={index}
              className="relative min-w-[85vw] h-[80vh] overflow-hidden border-4 border-white"
            >

              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  )
}