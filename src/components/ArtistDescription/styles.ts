import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        containerPaper: {
            padding: 20,
            backgroundColor: "#181818"
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
            padding: 1,
            background: "#131313",
            width: 70,
            height: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
        },
    }),
);