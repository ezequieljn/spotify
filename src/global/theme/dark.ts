import { createTheme } from '@material-ui/core'

export const theme = createTheme({
    palette: {
        common: {
            black: "#000",
            white: "#fff",
        },
        primary: {
            main: "#181818",
        },
        secondary: {
            main: "#282828",
        },
        background: {
            paper: "#000",
            default: "#121212"
        },
        text: {
            primary: "#fff",
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
