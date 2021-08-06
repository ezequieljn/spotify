import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        containerNoDrop: {
            display: "flex",
            background: theme.palette.background.paper,
            width: 35,
            height: 35,
            borderRadius: 35 / 2,
            justifyContent: 'center',
            alignItems: "center",
            cursor: "no-drop",
            marginLeft: 5,
            marginRight: 5
        },
        container: {
            display: "flex",
            background: theme.palette.background.paper,
            width: 35,
            height: 35,
            borderRadius: 35 / 2,
            justifyContent: 'center',
            alignItems: "center",
            cursor: "pointer",
            marginLeft: 5,
            marginRight: 5
        },
    }),
);