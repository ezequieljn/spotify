import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { borderRadius } from '@material-ui/system';

export default makeStyles((theme: Theme) =>
    createStyles({
        containerMusicBodyContainer: {
            display: 'flex',
            flexDirection: 'row',
            transition: "background 0.3s",
            "&:hover": {
                backgroundColor: "#2a2a2a",
                containerMusicBodyTextSub: {
                    color: "#6f9"
                }
            },
            borderRadius: 5
        },
        containerMusicBodyIndex: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 30,
            height: 60,
        },
        containerMusicBodyDescripition: {
            display: 'flex',
            flexDirection: 'column',
            padding: 10,
            justifyContent: 'center',
            height: 60,
            width: "100%",
        },
        containerMusicBodyTime: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: 60,
        },
        containerMusicBodyText: {
            color: "#fff"
        },
        containerMusicBodyTextSub: {
            color: "#adadad"
        }
    }),
);