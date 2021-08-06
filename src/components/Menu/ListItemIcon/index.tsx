import {
    ListItem,
    ListItemText,
    ListItemIcon as Listitemicon,
} from '@material-ui/core';
import useStyle from './styles';
import Image from 'next/image'


interface ListitemiconType {
    text: string;
    icon?: any;
}

function ListItemIcon({ text, icon: Icon }: ListitemiconType) {
    const classes = useStyle()
    return (
        <ListItem button key={text} className={classes.container}>
            <Listitemicon>
                {
                    Icon && <Image src={Icon} color={"#f63"} />
                }
            </Listitemicon>
            <ListItemText primary={text} />
        </ListItem>
    )
}

export { ListItemIcon }