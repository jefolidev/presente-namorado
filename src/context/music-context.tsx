/* eslint-disable react-refresh/only-export-components */
import { createContext, useRef, useState } from 'react'

interface MusicContextProps {
  isPlaying: boolean
  currentMusic: string | null
  playMusic: (url: string) => void
  pauseMusic: () => void
}

export const MusicContext = createContext({} as MusicContextProps)

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentMusic, setCurrentMusic] = useState<string | null>(null)

  const playMusic = (path: string) => {
    if (!audioRef.current || path !== currentMusic) {
      // Inicializa uma nova música ou troca a atual
      if (audioRef.current) {
        audioRef.current.pause()
      }
      audioRef.current = new Audio(path)
      setCurrentMusic(path)
    }

    if (audioRef.current) {
      // Toca a música apenas se estiver pausada
      if (audioRef.current.paused) {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <MusicContext.Provider
      value={{ isPlaying, playMusic, pauseMusic, currentMusic }}
    >
      {children}
    </MusicContext.Provider>
  )
}
