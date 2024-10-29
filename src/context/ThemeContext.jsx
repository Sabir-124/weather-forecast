import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const THEME_KEY = 'theme';

function ThemeProvider({children}) {
  const [dark, setDark] = useState(true);

  const saveTheme = (theme) => {
    localStorage.setItem(THEME_KEY, JSON.stringify(theme));
  }

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));
    if (savedTheme !== null) {
      setDark(savedTheme);
      return;
    }
  }, []);

  return (
    <ThemeContext.Provider value={{dark, setDark, saveTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider};
export default ThemeContext;

