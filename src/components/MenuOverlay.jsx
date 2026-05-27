import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const links = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "SHOP",
    path: "/shop",
  },
  {
    title: "ABOUT",
    path: "/about",
  },
  {
    title: "CONTACT",
    path: "/contact",
  },
]

export default function MenuOverlay({
  menuOpen,
  setMenuOpen,
}) {

  if (!menuOpen) return null

  return (

    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="fixed inset-0 z-[999] bg-[#111111]/95 backdrop-blur-3xl overflow-hidden"
    >

      {/* BIG JAPANESE TEXT */}
      <div className="absolute top-10 right-10 text-[180px] text-white/5 font-black rotate-[-12deg]">
        昭和
      </div>

      {/* GLOW */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full bg-[#8b1e1e]/20 blur-3xl" />

      {/* LINKS */}
      <div className="h-full flex flex-col items-center justify-center gap-10">

        {links.map((link, index) => (

          <motion.div
            key={link.title}
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.7,
            }}
          >

            <Link
              to={link.path}
              onClick={() =>
                setMenuOpen(false)
              }
              className="text-[60px] md:text-[120px] leading-none font-black text-white hover:text-[#d4a017] transition duration-300"
            >
              {link.title}
            </Link>

          </motion.div>

        ))}

      </div>

    </motion.div>

  )
}