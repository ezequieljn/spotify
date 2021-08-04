import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        albumImageContainer: {
            borderRadius: 3,
        },
        image: {
            borderRadius: 3,
            transition: "background 0.7s",
            "&:hover": {
                background: '#282828'
            },
            padding: theme.spacing(1),
            display: "flex",
            justifyContent: "space-between"
        },
        imageMusic: {
            display: "flex",
            justifyContent: "space-between"
        },
        time: {
            display: "flex",
            alignItems: "center"
        },
        musicDescription: {
            marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },
    }),
);