/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'

interface ProfileProviderProps {
  children: React.ReactNode
}

interface ProfileContextProps {
  username: string
  setTheUserName: (username: string) => void
}

export const ProfileContext = createContext({} as ProfileContextProps)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [username, setUserName] = useState('')

  function setTheUserName(username: string) {
    setUserName(username)
  }

  return (
    <ProfileContext.Provider value={{ username, setTheUserName }}>
      {children}
    </ProfileContext.Provider>
  )
}
