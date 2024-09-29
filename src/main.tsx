import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {GameOfLife} from "./view/gameOfLife.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameOfLife />
  </StrictMode>,
)
