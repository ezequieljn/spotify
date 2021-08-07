import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        textColor: {
            marginTop: 15,
            color: theme.palette.text.primary,
        },
        textSession: {
            color: theme.palette.text.primary,
        }
    }),
);