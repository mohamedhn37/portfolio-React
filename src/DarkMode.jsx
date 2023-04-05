import {useState} from 'react'
import { createGlobalStyle } from 'styled-components'

const DarkMode = () => {
    const [theme, setTheme] = useState("light")
    const toggleTheme =()=>{
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }
  return [ theme, toggleTheme];
}
const GlobaleStyles = createGlobalStyle`
    body {
        background: ${({theme})=> theme.body} 
    }
`;
const LightTheme = {
    body: '#fff',
    text: '#121212'
}
const DarkTheme = {
    body: '#121212',
    text: '#fff'
}

export  { DarkMode, GlobaleStyles, LightTheme, DarkTheme}