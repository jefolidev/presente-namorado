import { Player } from '../../components/player'

import dieForYouCape from '../../assets/capes/theweeknd.png'
import dieforyoumusic from '../../assets/musics/die-for-you-audio.mp3'

export function DieForYouPage() {
  return (
    <div className="grid grid-cols-2 justify-between items-center h-screen px-20 gap-12 ">
      <Player
        musicPath={dieforyoumusic}
        capePath={dieForYouCape}
        title="Die For You - The Weeknd"
        forwardMusic="/music/sure-thing"
        backwardMusic="/music/get-you"
      />
      <h3 className="">
        Essa música traduz o que eu sinto por você, a minha enorme dificuldade
        de me limitar ao “eu te amo”, você pode não reparar, mas eu tenho uma
        raiva muito grande de não conseguir transmitir o quanto eu te amo do
        fundo da minha alma, pra mim, o simples “eu te amo” não consegue
        traduzir o quanto eu realmente eu te amo e acho muito difícil alguma
        palavra em algum dia conseguir traduzir o que eu sinto por você
      </h3>
    </div>
  )
}
