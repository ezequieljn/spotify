import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        containerMusicHeaderContainer: {
            display: 'flex',
            flexDirection: 'row',

        },
        containerMusicHeaderIndex: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 30,
            height: 30,
        },
        containerMusicHeaderDescripition: {
            display: 'flex',
            padding: 10,
            alignItems: 'center',
            height: 30,
            width: "100%",
        },
        containerMusicHeaderTime: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: 30,
        },
        containerMusicHeaderText: {
            color: "#adadad"
        }
    }),
);