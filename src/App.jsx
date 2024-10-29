
import { useContext } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import ThemeContext from './context/ThemeContext';

function App() {
  const {dark} = useContext(ThemeContext);

  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
      <Header/>
      <Body/>
    </div>
  )
}

export default App
