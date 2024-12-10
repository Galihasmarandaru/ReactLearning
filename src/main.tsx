import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Advice from '#/Advice/Advice.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Advice />
  </StrictMode>,
)
