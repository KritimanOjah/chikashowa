import Navbar from "@/components/Navbar"

export default function About() {
  return (
    <div className="min-h-screen bg-[#f6ecd9] text-[#4a1e1e]">

      <Navbar cart={[]} total={0} />

      <section className="max-w-6xl mx-auto px-8 py-20">

        <p className="inline-block bg-[#8b1e1e] text-white px-4 py-2 border-2 border-[#4a1e1e] rotate-[-2deg] font-black mb-6">
          OUR STORY
        </p>

        <h1 className="text-[60px] md:text-[110px] leading-[0.9] mb-10">
          BUILT FOR
          <br />
          LOUD PEOPLE
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="space-y-6 text-lg leading-8 font-medium">

            <p>
              CHIKASHOWA is a Japanese Showa-era inspired
              streetwear brand focused on racing culture,
              retro graphics, vintage rebellion, and anti-minimalist design.
            </p>

            <p>
              We believe modern fashion has become too clean,
              too corporate, and too safe.
            </p>

            <p>
              Our designs are inspired by old manga ads,
              Bosozoku bikes, 1980s magazines,
              garage culture, and underground Japanese aesthetics.
            </p>

          </div>

          <div className="bg-[#8b1e1e] text-white border-4 border-[#4a1e1e] p-8 rotate-[1deg] shadow-xl">

            <h2 className="text-6xl mb-6">
              MINIMALISM
              <br />
              IS BORING
            </h2>

            <p className="text-lg leading-8 font-medium">
              CHIKASHOWA exists for people who want fashion
              with personality, noise, texture, and emotion.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}