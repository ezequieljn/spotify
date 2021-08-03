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

    return (
        <ListItem button key={text}>
            <Listitemicon>
                {
                    Icon && <Image src={Icon} color="#fff" />
                }
            </Listitemicon>
            <ListItemText primary={text} />
        </ListItem>
    )
}

export { ListItemIcon }