import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

export default function VibeToggle() {

  const audioRef = useRef(null)

  const [playing, setPlaying] =
    useState(false)

  useEffect(() => {

    audioRef.current.volume = 0.3

  }, [])

  const toggleMusic = () => {

    if (!playing) {

      audioRef.current.play()

    } else {

      audioRef.current.pause()

    }

    setPlaying(!playing)

  }

  return (

    <>

      <audio
        ref={audioRef}
        loop
      >
        <source
          src="/music/showa.mp3"
          type="audio/mp3"
        />
      </audio>

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[999] w-16 h-16 rounded-full border-4 border-[#4a1e1e] bg-[#8b1e1e] text-white flex items-center justify-center shadow-2xl"
      >

        {playing ? (
          <Volume2 size={28} />
        ) : (
          <VolumeX size={28} />
        )}

      </motion.button>

    </>

  )
}