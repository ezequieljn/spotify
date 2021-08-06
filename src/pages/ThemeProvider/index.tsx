import { ReactNode } from 'react'
import { ThemeProvider } from '@material-ui/core'
import { useTheme } from '../../hooks/theme'
import { themeDark } from '../../global/theme/dark';
import { themePurple } from '../../global/theme/purple';
import { themeYellow } from '../../global/theme/yellow';

interface ThemeProps {
    children: ReactNode
}

export default function Themes({ children }: ThemeProps) {
    const { theme } = useTheme()
    return (
        <ThemeProvider theme={theme === 'dark' ? themeDark : theme === 'yellow' ? themeYellow : theme === 'purple' ? themePurple : themeDark}>
            {children}
        </ThemeProvider>
    )
}