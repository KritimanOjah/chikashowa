import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from "@/context/CartContext"
import Lenis from "@studio-freight/lenis"

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <CartProvider>
    <App />
  </CartProvider>
</StrictMode>,
)
