import { useContext } from 'react'
import { MusicContext } from '../context/music-context.tsx'

export const useMusic = () => {
  const context = useContext(MusicContext)
  return context
}
