import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

import CustomCursor from "@/components/CustomCursor"
import ScrollProgress from "@/components/ScrollProgress"

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProductDetail from "@/pages/ProductDetail"
import VibeToggle from "@/components/VibeToggle"
import MouseGlow from "@/components/MouseGlow"
import Checkout from "@/pages/Checkout"

import Loader from "@/components/Loader"

export default function App() {

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)

  }, [])

  return (

    <BrowserRouter>
      <ScrollProgress />
    <div className="noise" />

<div className="japanese-bg">
  昭和
</div>


     <CustomCursor />
     <MouseGlow />
<VibeToggle />

      <AnimatePresence mode="wait">

        {loading ? (

          <Loader />

        ) : (

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/shop"
              element={<Shop />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/product/:id"
              element={<ProductDetail />}
            />
            <Route
  path="/checkout"
  element={<Checkout />}
/>

          </Routes>
          

        )}

      </AnimatePresence>

    </BrowserRouter>
  )
}