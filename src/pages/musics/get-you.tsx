import { Player } from '../../components/player/index.tsx'

import getYouCape from '../../assets/capes/getyou.png'
import getYouMusic from '../../assets/musics/get-you-audio.mp3'

export function GetYouPage() {
  return (
    <div className="grid grid-cols-2 justify-between items-center h-screen px-20 gap-12 ">
      <Player
        capePath={getYouCape}
        title="Get You - Daniel Ceaser"
        forwardMusic="/music/die-for-you"
        musicPath={getYouMusic}
        backwardMusic="/music/love-like-you"
      />
      <h3 className="">
        Amor, seus olhos são incrivelmente mágicos, eu não sei o que seria de
        mim se eu não tivesse a capacidade de poder enxergar, eu com certeza
        seria muito triste por não poder ver a beleza que seus olhos transmitem
        e o quão eles me deixam bem e o quão parecem dizer “Calma, eu estou
        aqui” quando estou junto de você.
      </h3>
    </div>
  )
}
