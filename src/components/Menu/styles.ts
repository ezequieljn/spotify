import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',

        },
        content: {
            flexGrow: 1,
        },
        contentDiv: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            background: theme.palette.background.default,
        }
    }),
);