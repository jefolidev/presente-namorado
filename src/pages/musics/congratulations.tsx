import { Player } from '../../components/player/index.tsx'

import congratulation from '../../assets/capes/congratulation.png'
import congratulationmusic from '../../assets/musics/congratulations-audio.mp3'

export function CongratulationPage() {
  return (
    <div className="grid grid-cols-2 justify-between items-center h-screen px-20 gap-12 ">
      <Player
        musicPath={congratulationmusic}
        capePath={congratulation}
        title="Congratulation - Mac Miller"
        forwardMusic="/music/playlist"
        backwardMusic="/music/sure-thing"
      />
      <h3 className="">
        Como poderia deixar essa música faltar, você me ensinou a te amar igual
        à essa música descreve. O sol não brilha quando estou sozinho e eu
        realmente perco minha mente quando estou sem você comigo. Você é tudo
        que eu poderia sonhar e imaginar de melhor, obrigado por tanto.
      </h3>
    </div>
  )
}
