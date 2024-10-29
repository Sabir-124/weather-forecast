import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { WeatherProvider } from './context/WeatherContext.jsx'
import { DefaultProvider } from './context/DefaultContext.jsx'
import { ThemeProvider } from './context/themeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <WeatherProvider>
        <DefaultProvider>
          <App />
        </DefaultProvider>
      </WeatherProvider>
    </ThemeProvider>
  </StrictMode>,
)
