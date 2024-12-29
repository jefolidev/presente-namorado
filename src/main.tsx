import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApplicationRoute as Route } from './routes/route.tsx'

import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Route />
  </StrictMode>
)
