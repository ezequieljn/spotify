import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            maxWidth: 800,
            minWidth: 300,
            background: "#ffffff",
            borderRadius: 50,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
            color: "#000"
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
        iconSearch: {
            color: "#000",
            fontSize: 27,
        },
        container: {
            alignItems: 'center',
        },
        inputText: {

        },
        gridContainerButtonLeftRight: {
            backgroundSize: 'cover',
        },
        containerButtonLeftRight: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundSize: 'cover',
        },
        textColor: {
            color: theme.palette.text.primary,
        }
    }),
);