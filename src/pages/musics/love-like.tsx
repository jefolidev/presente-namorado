import { Player } from '../../components/player/index.tsx'

import loveLikeYouCape from '../../assets/capes/lovelikeyou.png'
import loveLikeAudio from '../../assets/musics/love-like-you-audio.mp3'

export function LoveLikeYouPage() {
  return (
    <div className="grid grid-cols-2 justify-between items-center h-screen px-20 gap-12 ">
      <Player
        capePath={loveLikeYouCape}
        title="Love Like You - Rebecca Sugar"
        forwardMusic="/music/get-you"
        backwardMusic=""
        musicPath={loveLikeAudio}
      />
      <h3 className="">
        Simplesmente a música que descreve o que eu penso sobre você. Eu acho
        incrível o amor que você sente por mim, eu nunca imaginei que alguém
        poderia sentir tanto por mim o que eu por um grande período de tempo
        conseguia sentir por mim mesmo. Eu sou muito grato de verdade por te ter
        na minha vida e por me trazer pra realidade e ter feito eu aprender a me
        amar.
      </h3>
    </div>
  )
}
