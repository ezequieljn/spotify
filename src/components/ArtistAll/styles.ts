import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        artistContainer: {
            cursor: "no-drop",
            background: theme.palette.secondary.main,
            borderRadius: 5,
            transition: "background 0.3s",
            "&:hover": {
                background: theme.palette.primary.main
            }
        },
        containerImage: {
            padding: theme.spacing(2),
        },
        artistImage: {
            borderRadius: 100
        },
        containerDescription: {
            padding: theme.spacing(2),
        },
        textColor: {
            color: theme.palette.text.primary,
        }
    }),
);