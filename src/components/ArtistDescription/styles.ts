import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        containerPaper: {
            padding: 20,
            backgroundColor: theme.palette.primary.dark,
        },
        imagemArtist: {
            margin: 20
        },
        paperContainer: {
            height: 92,
            width: 92,
            borderRadius: 50
        },
        artistContainer: {
            borderColor: theme.palette.text.primary,
            borderWidth: 1,
            padding: 1,
            background: theme.palette.primary.main,
            width: 70,
            height: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
        },
        titleName: {
            color: theme.palette.text.primary,
        },
        titleArtist: {
            color: theme.palette.text.primary,
        }
    }),
);