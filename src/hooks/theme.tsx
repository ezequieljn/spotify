import { createContext, useContext, ReactNode, useState } from 'react'
import { setCookie } from 'nookies'
interface ThemeProps {
    children: ReactNode
}

interface ThemeContextData {
    theme: string;
    changeTheme: (arg: 'dark' | 'yellow' | 'purple') => void;
}

const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProps) {
    const [theme, setTheme] = useState(null)

    function changeTheme(theme: 'dark' | 'yellow' | 'purple') {
        setTheme(theme)
        setCookie(null, 'spotifyTheme', theme, { path: '/', maxAge: 604800, })
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export function useTheme() {
    return useContext(ThemeContext)
}