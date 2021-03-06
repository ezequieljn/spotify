import {
    ListItem,
    ListItemText,
    ListItemIcon as Listitemicon,
} from '@material-ui/core';
import useStyle from './styles';
import Image from 'next/image'
import Link from 'next/link'

interface ListitemiconType {
    text: string;
    icon?: any;
    url: string;
}

function ListItemIcon({ text, icon: Icon, url }: ListitemiconType) {
    const classes = useStyle()
    return (
        <Link href={`${url}`} passHref>
            <ListItem button key={text} className={classes.container}>
                <Listitemicon>
                    {
                        Icon && <Image src={Icon} color={"#f63"} />
                    }
                </Listitemicon>
                <ListItemText primary={text} className={classes.text} />
            </ListItem>
        </Link>
    )
}

export { ListItemIcon }