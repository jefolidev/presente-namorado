import { FormEvent, useState } from 'react'
import { useProfile } from '../../hooks/useProfile.tsx'

import { useNavigate } from 'react-router'
import arrow from '../../assets/arrow.svg'

export function Home() {
  const [typedUsername, setTypedUsername] = useState('')

  const [isFirstErrorMessageHidden, setIsFirstErrorMessageHidden] =
    useState(true)
  const [isSecondErrorMessageHidden, setIsSecondErrorMessageHidden] =
    useState(true)

  const [pressedButtonTimes, setPressedButtonTimes] = useState(0)

  const { setTheUserName } = useProfile()
  const navigate = useNavigate()

  const allowedNames = [
    'namorado do jeferson',
    'mundo do jeferson',
    'amor do jeferson',
    'neném do jeferson',
    'homem do jeferson',
  ]

  const firstErrorMessageStyle = isFirstErrorMessageHidden ? 'hidden' : 'block'
  const secondErrorMessageStyle = isSecondErrorMessageHidden
    ? 'hidden'
    : 'block'

  function showAndHideTheErrorMessage() {
    setPressedButtonTimes((prevState) => prevState + 1)

    if (pressedButtonTimes <= 1) {
      setIsFirstErrorMessageHidden(false)
      setTimeout(() => setIsFirstErrorMessageHidden(true), 1000)
    }

    if (pressedButtonTimes > 1) {
      setIsSecondErrorMessageHidden(false)
      setTimeout(() => setIsSecondErrorMessageHidden(true), 5000)
    }
  }

  function formSubmitHandle(e: FormEvent) {
    e.preventDefault()

    const hasAllowedNames = allowedNames.some((name) => {
      return name === typedUsername.trim().toLowerCase()
    })

    if (hasAllowedNames) {
      setTheUserName(typedUsername)
      navigate('/welcome')
      console.log('Username permitido: ', typedUsername)
    } else {
      showAndHideTheErrorMessage()

      console.log('Username não permitido:', typedUsername)
    }
  }

  return (
    <div className="flex flex-col relative font font-inter items-center justify-center h-screen">
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-4xl">Insira seu nome no campo abaixo</h1>
        <form className="flex gap-8" onSubmit={formSubmitHandle}>
          <input
            type="text"
            value={typedUsername}
            onChange={(e) => setTypedUsername(e.target.value)}
            className="border-b-2 focus:border-b-2 focus:py-2 transition-all duration-200 outline-none text-center border-stone-900  focus:outline-none w-full text-xl font-medium px-4"
          />
          <button className="bg-stone-900 flex items-center justify-center rounded-full  w-9 h-8 hover:bg-stone-800/95">
            <img src={arrow} alt="" className="w-2" />
          </button>
        </form>
      </div>
      <span
        className={`text-center font-inter font-bold text-red-500 text-lg absolute bottom-24 ${firstErrorMessageStyle}`}
      >
        Nome incorreto, por favor tente novamente
      </span>

      <span
        className={`text-center font-inter font-bold text-red-500 text-lg absolute bottom-24 inline w-[42rem] ${secondErrorMessageStyle}`}
      >
        Av maria cara, você realmente não gosta de mim mesmo né? O nome certo é
        <p className="font-extrabold inline">“namorado do jeferson”</p>. Meu
        deus do céu, que namorado podre, nam.
      </span>
    </div>
  )
}
