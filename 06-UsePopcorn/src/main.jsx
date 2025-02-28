import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StarRatings from './StarRating.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRatings  maxRating={10}/>
  </StrictMode>,
)
