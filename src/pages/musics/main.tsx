import { Button } from '../../components/button/index.tsx'

export function MainMusicPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-20 gap-6">
      <h2>Agora, algumas músicas que me lembram você</h2>
      <Button path="/music/love-like-you" />
    </div>
  )
}
