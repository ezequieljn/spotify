import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        descriptionContainer: {
            display: 'flex',
            flexDirection: 'row',
        },
        descriptionImageContainer: {
            padding: 10,
            background: '#fff',
        },

        descriptionImageMain: {
            minHeight: 70,
            minWidth: 70,
        },

        descriptionAlbum: {
            padding: 10
        },
        descriptionInfo: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 10,
        },
        descriptionArtistImageContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        descriptionArtistImageMain: {
            borderRadius: 50
        },
        description: {
            marginLeft: 10,
        },
        playContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
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
            width: 30,
            height: 30,
        },
        containerMusicHeaderText: {
            color: "#adadad"
        },
        divider: {
            marginTop: 10,
            marginBottom: 10,
        },
        textColor: {
            color: theme.palette.text.primary,
        }
    }),
);