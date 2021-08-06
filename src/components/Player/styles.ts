import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        appBarContainer: {
            height: 75,
            display: 'flex',
            alignItems: 'center',
        },
        appBar: {
            position: 'fixed',
            zIndex: theme.zIndex.drawer + 1,
            width: '100%',
            background: theme.palette.secondary.dark,
            height: 80,
            left: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'row',
            borderTop: '1px solid',
        },
        containerBoxName: {
            display: 'flex',
            flex: 3,
            width: '100%',
            height: 80,
            alignItems: 'center',
        },
        containerBoxPlayer: {
            marginTop: 5,
            display: 'flex',
            flex: 4,
            width: '100%',
            height: 80,
            flexDirection: 'column',
        },
        containerBoxPlayerIcon: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        containerBoxVolume: {
            display: 'flex',
            flex: 3,
            width: '100%',
            height: 80,
        },
        containerBoxPlayerTime: {
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 3,
            marginRight: 3,
            alignItems: 'center',
        },
        containerBoxPlayerTimeContainer: {
            height: 5,
            width: '100%',
            background: "#535353",
            borderRadius: 5,
            marginLeft: 5,
            marginRight: 5,
        },
        containerBoxPlayerTimeContainerS: {
            height: 5,
            width: '50%',
            borderRadius: 5,
        },
        slider: {
            color: theme.palette.text.primary,
            marginLeft: 15,
            marginRight: 15,
        },
        sliderVolume: {
            color: theme.palette.text.primary,

        },
        marginLeftRight20: {
            marginLeft: 10,
            marginRight: 10
        },
        marginLeftRight5: {
            marginLeft: 3,
            marginRight: 2
        }
    }),
);