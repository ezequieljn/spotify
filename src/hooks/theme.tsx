import { createContext, useContext, ReactNode, useState } from 'react'

interface ThemeProps {
    children: ReactNode
}

interface ThemeContextData {
    theme: string;
    setTheme: any;
}

const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProps) {
    const [theme, setTheme] = useState('yellow')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export function useTheme() {
    return useContext(ThemeContext)
}