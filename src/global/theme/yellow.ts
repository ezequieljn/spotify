import { createTheme } from '@material-ui/core'

export const themeYellow = createTheme({
    palette: {
        common: {
            black: "#000",
            white: "#fff",
        },
        primary: {
            main: "#FFCC00",
        },
        secondary: {
            main: "#E5B800",
        },
        background: {
            paper: "#FDDD48",
            default: "#FDED72"
        },
        text: {
            primary: "#121212",
            secondary: "#adadad",
            disabled: "#fff",
            hint: "rgba(0, 0, 0, 0.38)",
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
