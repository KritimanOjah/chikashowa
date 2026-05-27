import Navbar from "@/components/Navbar"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f6ecd9] text-[#4a1e1e]">

      <Navbar cart={[]} total={0} />

      <section className="max-w-5xl mx-auto px-8 py-20">

        <p className="inline-block bg-[#8b1e1e] text-white px-4 py-2 border-2 border-[#4a1e1e] rotate-[-2deg] font-black mb-6">
          CONTACT
        </p>

        <h1 className="text-[60px] md:text-[110px] leading-[0.9] mb-12">
          LET’S TALK
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* INFO */}
          <div className="space-y-6">

            <div className="border-4 border-[#4a1e1e] bg-[#fff7ea] p-6">
              <h2 className="text-4xl mb-2">
                EMAIL
              </h2>

              <p className="font-medium">
                hello@chikashowa.com
              </p>
            </div>

            <div className="border-4 border-[#4a1e1e] bg-[#d4a017] p-6">
              <h2 className="text-4xl mb-2">
                INSTAGRAM
              </h2>

              <p className="font-medium">
                @chikashowa
              </p>
            </div>

            <div className="border-4 border-[#4a1e1e] bg-[#8b1e1e] text-white p-6">
              <h2 className="text-4xl mb-2">
                RESPONSE TIME
              </h2>

              <p className="font-medium">
                Usually within 24 hours.
              </p>
            </div>

          </div>

          {/* FORM */}
          <div className="border-4 border-[#4a1e1e] bg-[#fff7ea] p-8 shadow-xl">

            <div className="space-y-5">

              <Input
                placeholder="Your Name"
                className="rounded-none border-2 border-[#4a1e1e] h-14"
              />

              <Input
                placeholder="Your Email"
                className="rounded-none border-2 border-[#4a1e1e] h-14"
              />

              <Textarea
                placeholder="Your Message"
                className="rounded-none border-2 border-[#4a1e1e] min-h-[180px]"
              />

              <Button className="w-full rounded-none bg-[#8b1e1e] hover:bg-[#651515] border-2 border-[#4a1e1e] py-6 text-lg font-black">
                SEND MESSAGE
              </Button>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}