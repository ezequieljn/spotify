import { createTheme } from '@material-ui/core'

export const themePurple = createTheme({
    palette: {
        common: {
            black: "#000",
            white: "#fff",
        },
        primary: {
            main: "#b37feb",
        },
        secondary: {
            main: "#9254de",
        },
        background: {
            paper: "#531dab",
            default: "#722ed1"
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
