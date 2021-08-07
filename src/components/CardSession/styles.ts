import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


export default makeStyles((theme: Theme) =>
    createStyles({
        box: {
            marginTop: 25,
            aspectRatio: "18/17",
            borderRadius: 10,

        },
        text: {
            color: theme.palette.common.white,
        },

    }),
);