import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        container: {
            "&:hover": {
                backgroundColor: theme.palette.secondary.main,
            },
            borderRadius: 5
        },
        text: {
            color: theme.palette.text.primary,
        }
    }),
);