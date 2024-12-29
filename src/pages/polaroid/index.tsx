import polaroid1 from '../../assets/polaroid 1.png'
import polaroid2 from '../../assets/polaroid 2.png'
import polaroid3 from '../../assets/polaroid 3.png'
import { Button } from '../../components/button/index.tsx'

export function PolaroidPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-20 gap-6">
      <h2 className="self-start">Obrigado por tanto!</h2>
      <div className="flex flex-col gap-12 ">
        <div className="flex w-full justify-around items-center">
          <img src={polaroid1} alt="" className="w-80" />
          <img src={polaroid2} alt="" className="w-80" />
          <img src={polaroid3} alt="" className="w-80" />
        </div>
        <span>
          Você é a melhor pessoa desse mundo! Eu agradeço demais por estar com
          alguém tão incrível por tanto tempo e eu sou muito grado por ter
          alguém como você desde o início do dia até o fim dele. Diferente do
          dia que tenho que possui fim, o nosso amor nunca vai ter isso, ele vai
          ser pra sempre.
        </span>
      </div>
      <Button path="/christmasmean" />
    </div>
  )
}
