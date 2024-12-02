import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QuestPage from './pages/QuestPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuestPage />
  </StrictMode>,
)
