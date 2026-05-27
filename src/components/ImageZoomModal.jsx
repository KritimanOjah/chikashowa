import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

export default function ImageZoomModal({
  image,
  open,
  onClose,
}) {

  return (

    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
        >

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 border-2 border-white p-3 text-white"
          >
            <X />
          </button>

          {/* IMAGE */}
          <motion.img
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            src={image}
            alt=""
            onClick={(e) =>
              e.stopPropagation()
            }
            className="max-w-full max-h-[90vh] object-contain"
          />

        </motion.div>

      )}

    </AnimatePresence>

  )
}