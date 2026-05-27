import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import ParallaxCard from "@/components/ParallaxCard"
import { useCart } from "@/context/CartContext"
import products from "@/data/products"
import MagneticButton from "@/components/MagneticButton"
import Marquee from "@/components/Marquee"
import FeaturedCollection from "@/components/FeaturedCollection"
import PageTransition from "@/components/PageTransition"
import HorizontalGallery from "@/components/HorizontalGallery"
import RevealText from "@/components/RevealText"
import LookbookModal from "@/components/LookbookModal"
import { useState } from "react"
import ImageReveal from "@/components/ImageReveal"
import FloatingBadge from "@/components/FloatingBadge"
import SplitText from "@/components/SplitText"
import SectionReveal from "@/components/SectionReveal"

export default function Home() {

    const [lookbookOpen, setLookbookOpen] =
  useState(false)

  const { addToCart } = useCart()

  return (

    <PageTransition>

      <div className="min-h-screen overflow-hidden bg-[#f6ecd9] text-[#4a1e1e]">

        <Navbar />

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative border-b-4 border-[#4a1e1e]"
        >

          <div className="relative min-h-screen overflow-hidden flex items-center">

            {/* VIDEO */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="/videos/showa.mp4"
                type="video/mp4"
              />
            </video>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />

            {/* GRAIN */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* FLOATING IMAGES */}
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="/images/hero1.jpg"
              className="absolute top-20 right-10 w-52 rotate-[8deg] border-4 border-white shadow-2xl hidden lg:block"
            />

            <motion.img
              initial={{ y: 0 }}
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="/images/hero2.jpg"
              className="absolute bottom-10 left-10 w-60 rotate-[-6deg] border-4 border-white shadow-2xl hidden lg:block"
            />

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 max-w-7xl mx-auto px-8"
            >

              <p className="inline-block bg-[#8b1e1e] text-white px-5 py-2 font-black rotate-[-2deg] mb-8 border-2 border-white">
                東京 STREET ARCHIVE
              </p>

             <div className="leading-[0.85] text-white max-w-5xl">

  <SplitText
    text="SHOWA"
    className="text-[70px] md:text-[180px] font-black"
  />

  <SplitText
    text="SPEED"
    className="text-[70px] md:text-[180px] font-black"
  />

</div>

              <p className="text-white/80 text-xl max-w-xl mt-8 leading-relaxed">
                Japanese racing nostalgia,
                underground streetwear,
                and vintage rebellion reborn
                for the modern archive.
              </p>

              <div className="flex flex-col md:flex-row gap-6 mt-10">

                <MagneticButton className="bg-[#8b1e1e] hover:bg-[#651515] text-white border-4 border-white rounded-none px-10 py-7 text-xl font-black">
                  SHOP NOW
                </MagneticButton>

                <Button
  onClick={() => setLookbookOpen(true)}
  className="border-4 border-white bg-transparent hover:bg-white hover:text-black text-white rounded-none px-10 py-7 text-xl font-black"
>
  LOOKBOOK
</Button>
              </div>

              {/* JAPANESE DECOR */}
              <div className="absolute top-20 right-10 text-[120px] font-black text-white/5 rotate-[-12deg]">
                東京
              </div>

              <div className="absolute bottom-10 left-10 text-[90px] font-black text-white/5 rotate-[8deg]">
                昭和
              </div>

            </motion.div>

          </div>

        </motion.section>

       <SectionReveal>
  <Marquee />
</SectionReveal>

        {/* PRODUCTS */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="px-8 py-20 border-t-4 border-[#4a1e1e]"
        >

          <div className="max-w-7xl mx-auto">

            <div className="flex items-end justify-between mb-10">

              <div>

                <p className="font-black uppercase tracking-[4px] text-sm">
                  New Arrivals
                </p>

                <RevealText>
  <h2 className="text-7xl leading-none">
    FEATURED DROPS
  </h2>
</RevealText>

              </div>

              <p className="max-w-md font-medium text-right">
                Oversized Showa-inspired pieces built for collectors,
                racers, drifters, and vintage streetwear lovers.
              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {products.map((product) => (

                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                >

                  <ParallaxCard>

                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: product.id * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="group bg-[#fff7ea] border-4 border-[#4a1e1e] overflow-hidden hover:-translate-y-2 transition duration-300 shadow-xl"
                    >

                      <div className="relative h-[420px] overflow-hidden bg-[#e8dcc7]">
<FloatingBadge text="LIMITED DROP" />
                        <ImageReveal
  src={product.image}
  alt={product.name}
/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />

                        <div className="absolute bottom-4 left-4 bg-[#8b1e1e] text-white px-4 py-2 border-2 border-[#f6ecd9] font-black rotate-[-2deg]">
                          {product.label}
                        </div>

                      </div>

                      <div className="p-5">

                        <div className="flex justify-between items-center mb-4">

                          <h3 className="text-4xl">
                            {product.name}
                          </h3>

                          <span className="font-black text-xl">
                            ₹{product.price}
                          </span>

                        </div>

                        <Button
                          onClick={(e) => {
                            e.preventDefault()
                            addToCart(product)
                          }}
                          className="w-full rounded-none bg-[#8b1e1e] hover:bg-[#651515] border-2 border-[#4a1e1e] py-6 text-lg font-black tracking-wide transition duration-300 hover:tracking-[0.2em]"
                        >
                          ADD TO CART
                        </Button>

                      </div>

                    </motion.div>

                  </ParallaxCard>

                </Link>

              ))}

            </div>

          </div>

        </motion.section>

<SectionReveal>
        <HorizontalGallery /></SectionReveal>

       <SectionReveal> <FeaturedCollection /></SectionReveal>

        {/* SHOWCASE GALLERY */}
        <section className="px-8 py-24 border-t-4 border-[#4a1e1e] bg-[#efe4cf]">

          <div className="max-w-7xl mx-auto">

            <div className="mb-14">

              <p className="font-black uppercase tracking-[4px] text-sm mb-3">
                Tokyo Archive
              </p>

              <RevealText>
  <h2 className="text-6xl md:text-8xl leading-none">
    STREET GALLERY
  </h2>
</RevealText>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              {/* BIG IMAGE */}
              <div className="md:col-span-2 overflow-hidden border-4 border-[#4a1e1e] bg-black group">

                <img
                  src="/gallery/gallery1.jpg"
                  alt=""
                  className="w-full h-[650px] object-cover opacity-90 group-hover:scale-105 transition duration-700"
                />

              </div>

              {/* SIDE STACK */}
              <div className="flex flex-col gap-6">

                <div className="overflow-hidden border-4 border-[#4a1e1e] bg-black group">

                  <img
                    src="/gallery/gallery2.jpg"
                    alt=""
                    className="w-full h-[312px] object-cover opacity-90 group-hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="overflow-hidden border-4 border-[#4a1e1e] bg-black group">

                  <img
                    src="/gallery/gallery3.jpg"
                    alt=""
                    className="w-full h-[312px] object-cover opacity-90 group-hover:scale-105 transition duration-700"
                  />

                </div>

              </div>

            </div>

            {/* SECOND ROW */}
            <div className="grid md:grid-cols-4 gap-6 mt-6">

              {[
                "/gallery/gallery4.jpg",
                "/gallery/gallery5.jpg",
                "/gallery/gallery6.jpg",
                "/gallery/gallery7.jpg",
              ].map((img, index) => (

                <div
                  key={index}
                  className="overflow-hidden border-4 border-[#4a1e1e] bg-black group"
                >

                  <img
                    src={img}
                    alt=""
                    className="w-full h-[320px] object-cover opacity-90 group-hover:scale-110 transition duration-700"
                  />

                </div>

              ))}

            </div>

          </div>

        </section>

        <LookbookModal
  isOpen={lookbookOpen}
  onClose={() => setLookbookOpen(false)}
/>

        <Footer />

      </div>

    </PageTransition>
  )
}