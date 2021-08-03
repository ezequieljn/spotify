import { createTheme } from '@material-ui/core'

export const theme = createTheme({
    palette: {
        common: {
            black: "#000",
            white: "#fff",
        },
        type: "light",
        primary: {
            light: "#7986cb",
            main: "#3f51b5",
            dark: "#303f9f",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff4081",
            main: "#f50057",
            dark: "#c51162",
            contrastText: "#fff",
        },
        background: {
            paper: "#000",
            default: "#121212"
        },
        text: {
            primary: "#fff",
            secondary: "rgb(179, 179, 179)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff",
        },
        warning: {
            light: "#ffb74d",
            main: "#ff9800",
            dark: "#f57c00",
            contrastText: "rgba(0, 0, 0, 0.87)"
        },
        info: {
            light: "#64b5f6",
            main: "#2196f3",
            dark: "#1976d2",
            contrastText: "#fff",
        },
        success: {
            light: "#81c784",
            main: "#4caf50",
            dark: "#388e3c",
            contrastText: "rgba(0, 0, 0, 0.87)"
        },

        divider: "rgb(40, 40, 40)",
        action: {
            active: "#fff",
            hover: "rgb(40, 40, 40)",
            hoverOpacity: 0.04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12
        }

    }
});
