import React, { ReactNode } from 'react';
import { Divider } from '@material-ui/core';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';

import { ListItemIcon } from './ListItemIcon';
import { DrawerMenu } from './Drawer'
import useStyles from './styles'

import InicioSvg from '../../assets/menu/inicio.svg'
import BuscarSvg from '../../assets/menu/buscar.svg'
import BibliotecaSvg from '../../assets/menu/biblioteca.svg'

interface Props {
    window?: () => Window;
    children?: ReactNode;
    AppBar?: React.FC;
}

const Menu: React.FC<Props> = ({ window, children, AppBar }) => {
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>

            <List>
                <ListItemIcon text="Início" icon={InicioSvg} />
                <ListItemIcon text="Buscar" icon={BuscarSvg} />
                <ListItemIcon text="Sua Biblioteca" icon={BibliotecaSvg} />
            </List>
            <Divider />
            <List>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <DrawerMenu
                container={container}
                mobileOpen={mobileOpen}
                drawer={drawer}
                handleDrawerToggle={handleDrawerToggle} />
            <main className={classes.content}>
                <AppBar />
                {children}
            </main>
        </div>
    )
}

export { Menu }