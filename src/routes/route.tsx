import { HashRouter, Route, Routes } from 'react-router'
import { MusicProvider } from '../context/music-context.tsx'
import { ProfileProvider } from '../context/profile-context.tsx'
import { ChristmasMean } from '../pages/christmans-mean/index.tsx'
import { GreetingsPage } from '../pages/greetings/index.tsx'
import { Home } from '../pages/home/home.tsx'
import { CongratulationPage } from '../pages/musics/congratulations.tsx'
import { DieForYouPage } from '../pages/musics/die-for-you.tsx'
import { EditPage } from '../pages/musics/edit.tsx'
import { GetYouPage } from '../pages/musics/get-you.tsx'
import { LoveLikeYouPage } from '../pages/musics/love-like.tsx'
import { MainMusicPage } from '../pages/musics/main.tsx'
import { PlaylistPage } from '../pages/musics/playlist.tsx'
import { SureThingPage } from '../pages/musics/sure-thing.tsx'
import { PolaroidPage } from '../pages/polaroid/index.tsx'
import { WelcomePage } from '../pages/welcome/index.tsx'

export function ApplicationRoute() {
  return (
    <HashRouter>
      <ProfileProvider>
        <MusicProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/polaroid" element={<PolaroidPage />} />
            <Route path="/christmasmean" element={<ChristmasMean />} />
            <Route path="/music" element={<MainMusicPage />} />
            <Route path="/music/love-like-you" element={<LoveLikeYouPage />} />
            <Route path="/music/get-you" element={<GetYouPage />} />
            <Route path="/music/die-for-you" element={<DieForYouPage />} />
            <Route path="/music/sure-thing" element={<SureThingPage />} />
            <Route path="/music/edit" element={<EditPage />} />
            <Route
              path="/music/congratulation"
              element={<CongratulationPage />}
            />
            <Route path="/music/playlist" element={<PlaylistPage />} />
            <Route path="/greetings" element={<GreetingsPage />} />
          </Routes>
        </MusicProvider>
      </ProfileProvider>
    </HashRouter>
  )
}
