import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingCart, Menu } from "lucide-react"
import { useCart } from "@/context/CartContext"
import MenuOverlay from "@/components/MenuOverlay"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {

  const {
    cart,
    total,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart()

  const [menuOpen, setMenuOpen] =
    useState(false)

  return (

    <nav className="sticky top-0 z-50 border-b-4 border-[#4a1e1e] bg-[#d4a017] px-6 py-4 flex items-center justify-between shadow-lg">

      {/* LOGO */}
      <Link
        to="/"
        className="logo-text text-5xl leading-none"
      >
        CHIKASHOWA
      </Link>

      <div className="flex items-center gap-6">

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden border-4 border-[#4a1e1e] bg-[#fff7ea] p-3"
        >
          <Menu />
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6 font-black uppercase text-sm tracking-widest">

          <Link
            to="/"
            className="hover:rotate-[-2deg] transition"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="hover:rotate-[2deg] transition"
          >
            Shop
          </Link>

          <Link
            to="/about"
            className="hover:rotate-[-2deg] transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:rotate-[2deg] transition"
          >
            Contact
          </Link>

        </div>

        {/* CART */}
        <Sheet>

          <SheetTrigger asChild>

            <button className="relative border-4 border-[#4a1e1e] bg-[#fff7ea] p-3">

              <ShoppingCart />

              {cart.length > 0 && (

                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#8b1e1e] text-white flex items-center justify-center text-sm font-black">

                  {cart.length}

                </div>

              )}

            </button>

          </SheetTrigger>

          <SheetContent className="bg-[#fff7ea]/95 backdrop-blur-2xl border-l-4 border-[#4a1e1e] shadow-2xl">

            <SheetHeader>

              <SheetTitle className="text-4xl">
                YOUR CART
              </SheetTitle>

            </SheetHeader>

            <div className="mt-8 flex flex-col gap-4">

              {cart.length === 0 && (

                <p className="font-medium">
                  Your cart is empty.
                </p>

              )}

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="border-2 border-[#4a1e1e] p-4 bg-white hover:translate-x-2 transition duration-300"
                >

                  <div className="flex justify-between items-center">

                    <div>

                      <h3 className="text-2xl">
                        {item.name}
                      </h3>

                      <div className="flex items-center gap-3 mt-2">

                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="w-8 h-8 border-2 border-[#4a1e1e] font-black"
                        >
                          −
                        </button>

                        <span className="font-black text-lg">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="w-8 h-8 border-2 border-[#4a1e1e] font-black"
                        >
                          +
                        </button>

                      </div>

                      <p className="font-medium mt-2">
                        ₹{item.price * item.quantity}
                      </p>

                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="mt-2 text-sm font-black text-[#8b1e1e]"
                      >
                        REMOVE
                      </button>

                    </div>

                  </div>

                </div>

              ))}

              {cart.length > 0 && (

                <div className="border-t-4 border-[#4a1e1e] pt-4 mt-4">

                  <div className="flex justify-between items-center mb-4">

                    <h3 className="text-3xl">
                      TOTAL
                    </h3>

                    <p className="text-2xl font-black">
                      ₹{total}
                    </p>

                  </div>

                  <button className="w-full rounded-none bg-[#8b1e1e] hover:bg-[#651515] hover:scale-[1.02] transition duration-300 border-2 border-[#4a1e1e] py-4 text-lg font-black text-white">
                    CHECKOUT
                  </button>

                </div>

              )}

            </div>

          </SheetContent>

        </Sheet>

      </div>

      {/* NEW MENU OVERLAY */}
      <MenuOverlay
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

    </nav>
  )
}