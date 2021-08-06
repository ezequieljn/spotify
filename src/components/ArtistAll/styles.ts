import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        artistContainer: {
            cursor: "no-drop",
            background: "#181818",
            borderRadius: 5,
            transition: "background 0.3s",
            "&:hover": {
                background: '#282828'
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
        }
    }),
);