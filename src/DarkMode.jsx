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
    body{
        background: ${({theme})=> theme.body} 
    }
    h1, h2, .homeShortDescription, .partAndDescription p , .skills-para, .testimonials p, .testimonials h3, .reviews h4{
        color: ${({ theme }) => theme.text};
    }
    .partAndDescription h2 {
        color: ${({ theme }) =>
          theme.partAndDescriptionH2Color || theme.text};
    }
    h1, .partAndDescription h2, .testimonials h3, .suggestion, .reviews h4, .reviews label{
        text-shadow: ${({ theme }) => theme.textShadow};
    }
    .skills::after{
        background-color: ${({ theme }) =>  theme.MoonColDark };
        box-shadow: ${({ theme }) => theme.MoonlightDark}
    }
  
`;
const LightTheme = {
    body: '#fff'
}
const DarkTheme = {
    body: '#121212',
    text: '#fff',
    partAndDescriptionH2Color: '#dcdcdc',
    MoonColDark : 'var(--col-moon)',
    MoonlightDark : '0px 0px 50px 20px var(--col-light-moon)',
    textShadow: '2px 2px 4px  var(--col-red)'
}

export  { DarkMode, GlobaleStyles, LightTheme, DarkTheme}