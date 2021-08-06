import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        containerIconBox: {
            marginLeft: theme.spacing(2),
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
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
        },
        conteinerThemeText: {

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        conteinerTheme: {

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        textColor: {
            color: theme.palette.text.primary,
        },
        containerButton: {
            width: 70
        }
    }),
);