import { Button } from '../../components/button'
import { useProfile } from '../../hooks/useProfile'

export function WelcomePage() {
  const { username } = useProfile()

  return (
    <div className="flex flex-col items-center justify-center h-screen px-20 gap-4">
      <h2 className="text-center">
        Feliz Natal,
        <p className="text-red-500 inline text-[2.5rem]">
          {''} {username}
        </p>
        !
      </h2>
      <Button path="/polaroid" />
    </div>
  )
}
