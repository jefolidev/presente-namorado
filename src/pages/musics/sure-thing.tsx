import surething from '../../assets/capes/surething.png'
import surethingmusic from '../../assets/musics/sure thing-audio.mp3'
import { Player } from '../../components/player/index.tsx'

export function SureThingPage() {
  return (
    <div className="grid grid-cols-2 justify-between items-center h-screen px-20 gap-12 ">
      <Player
        musicPath={surethingmusic}
        capePath={surething}
        title="Congratulation - Daniel Ceaser"
        forwardMusic="/music/edit"
        backwardMusic="/music/die-for-you"
      />
      <h3 className="">
        Essa é simples mas diz muito. É surpreendente o quanto você me completa
        e me deixa bem, desde que você chegou na minha vida, você me deu um novo
        significado e mudou totalmente o que eu achava da vida. Então se eu sou
        o pintor, você é a pintura mais bonita que eu já fiz, se eu sou um
        repórter, você é a maior notícia que eu já pude ter a oportunidade de
        documentar.
      </h3>
    </div>
  )
}
