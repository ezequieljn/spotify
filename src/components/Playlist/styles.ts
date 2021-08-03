import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        albumImageContainer: {

        },
        image: {
            background: "#f63",
            padding: 10,
            display: "flex",
            justifyContent: "space-between"
        },
        imageMusic: {
            background: "#00f",
            display: "flex",
            justifyContent: "space-between"
        },
        time: {
            display: "flex",
            background: "#fd3",
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