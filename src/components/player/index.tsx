import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import backwardIcon from '../../assets/backward.svg'
import forwardIcon from '../../assets/forward.svg'
import pauseIcon from '../../assets/pause.svg'
import playIcon from '../../assets/play.svg'
import { useMusic } from '../../hooks/useMusic.tsx'

interface PlayerProps {
  capePath: string
  musicPath: string
  title: string
  backwardMusic: string
  forwardMusic: string
}

export function Player({
  capePath,
  title,
  backwardMusic,
  forwardMusic,
  musicPath,
}: PlayerProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const { isPlaying, pauseMusic, playMusic, currentMusic } = useMusic()

  const currentPath = location.pathname

  const disableButtonIfLoveLikeYouPath =
    currentPath === '/music/love-like-you' ? true : false

  useEffect(() => {
    if (currentMusic !== musicPath) {
      playMusic(musicPath) // Reproduz a nova música
      pauseMusic() // Verifica se a música atual não corresponde à nova música
    }
  }, [musicPath, currentMusic, playMusic, pauseMusic])

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <img src={capePath} alt="" className="" />
      <div className="flex flex-col gap-4">
        <span>{title}</span>
        <div className="flex justify-center gap-4">
          <button
            className="w-11 h-11 mx hover:opacity-95 bg-stone-900 rounded-full disabled:opacity-45 disabled:cursor-not-allowed"
            onClick={() => navigate(backwardMusic)}
            disabled={disableButtonIfLoveLikeYouPath}
          >
            <img src={backwardIcon} alt="" className="mx-auto" />
          </button>
          <button
            className="w-11 h-11 mx hover:opacity-95 bg-stone-900 rounded-full"
            onClick={() => (isPlaying ? pauseMusic() : playMusic(musicPath))}
          >
            <img
              src={isPlaying ? pauseIcon : playIcon}
              alt=""
              className="mx-auto w-4"
            />
          </button>

          <button
            className="w-11 h-11 mx hover:opacity-95 bg-stone-900 rounded-full"
            onClick={() => navigate(forwardMusic)}
          >
            <img src={forwardIcon} alt="" className="mx-auto" />
          </button>
        </div>
      </div>
    </div>
  )
}
