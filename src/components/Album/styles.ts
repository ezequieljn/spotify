import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        albumContainer: {
            cursor: 'pointer',
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
        albumImage: {
            borderRadius: 5
        },
        containerDescription: {
            padding: theme.spacing(2),
        }
    }),
);