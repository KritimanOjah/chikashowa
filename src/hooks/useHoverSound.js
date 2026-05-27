import useSound from "use-sound"

import hoverSfx from "@/assets/hover.mp3"

export default function useHoverSound() {

  const [play] = useSound(hoverSfx, {
    volume: 0.2,
  })

  return play
}