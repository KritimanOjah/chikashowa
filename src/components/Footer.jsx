import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-[#f5e9d0] border-t-4 border-[#4a1e1e] mt-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">
<div className="absolute top-10 left-10 rotate-[-12deg] border-4 border-[#8b1e1e] text-[#8b1e1e] px-4 py-2 font-black opacity-20">
  昭和
</div>

<div className="absolute bottom-10 right-10 rotate-12 border-4 border-[#d4a017] text-[#d4a017] px-4 py-2 font-black opacity-20">
  東京
</div>
        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <h2 className="text-3xl font-black tracking-widest text-[#4a1e1e]">
              CHIKASHOWA
            </h2>

            <p className="mt-4 text-[#3d3028]">
              Japanese Showa-inspired streetwear.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#4a1e1e] mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">

              <Link to="/">
                Home
              </Link>

              <Link to="/shop">
                Shop
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </div>
          </div>

          <div>
            <div className="border-t border-[#4a1e1e] mt-12 pt-6 text-center text-sm text-[#3d3028]">
  © 2026 CHIKASHOWA — Built for vintage racing culture.
</div>
  <h3 className="text-xl font-bold text-[#4a1e1e] mb-4">
    CONNECT
  </h3>

  <p className="mb-5 text-[#3d3028]">
    Vintage racing and retro Japanese fashion.
  </p>

  <div className="flex gap-3">

    <a
      href="#"
      className="bg-[#4a1e1e] text-white px-4 py-2 rounded-full"
    >
      IG
    </a>

    <a
      href="#"
      className="bg-[#4a1e1e] text-white px-4 py-2 rounded-full"
    >
      FB
    </a>

    <a
      href="#"
      className="bg-[#4a1e1e] text-white px-4 py-2 rounded-full"
    >
      MAIL
    </a>

  </div>
</div>

        </div>

      </div>

    </footer>
  )
}

export default Footer