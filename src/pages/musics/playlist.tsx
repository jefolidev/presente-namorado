import { Button } from '../../components/button/index.tsx'

export function PlaylistPage() {
  return (
    <div className="grid grid-cols-3 items-center justify-center h-screen px-20 gap-12">
      <div className="flex flex-col gap-8  items-center col-span-2">
        <h3>
          Criei uma playlist no spotify com essas músicas pra caso você esteja
          se sentindo distante. Essas músicas agora sempre vão ser uma forma de
          você se sentir mais próximo de mim.
        </h3>
        <Button path="/greetings" />
      </div>

      <iframe
        className="rounded-xl w-full "
        src="https://open.spotify.com/embed/playlist/6SVPiwF1wyufcukx8sI8HK?utm_source=generator"
        height={352}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}
