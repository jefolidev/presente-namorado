import { useContext } from 'react'
import { ProfileContext } from '../context/profile-context.tsx'

export function useProfile() {
  return useContext(ProfileContext)
}
