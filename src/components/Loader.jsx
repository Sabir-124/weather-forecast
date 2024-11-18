import { useContext } from 'react';
import '../styles/loader.css'
import ThemeContext from '../context/themeContext';

const Loader = () => {
  const {dark} = useContext(ThemeContext);

  return (
    <div className={`container-${dark ? 'dark' : 'light'}`}>
      <div className="cloud"></div>
      <div className="rain">
        <span className='drop' style={{"--i":11}}></span>
        <span className='drop' style={{"--i":16}}></span>
        <span style={{"--i":13}}></span>
        <span style={{"--i":18}}></span>
        <span style={{"--i":10}}></span>
        <span style={{"--i":19}}></span>
        <span style={{"--i":12}}></span>
        <span className='drop' style={{"--i":14}}></span>
        <span className='drop' style={{"--i":16}}></span>
      </div>
    </div>
  )
}

export default Loader;