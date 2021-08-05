import React, { ReactNode } from 'react';
import { Box, Divider } from '@material-ui/core';

import List from '@material-ui/core/List';

import { ListItemIcon } from './ListItemIcon';
import { DrawerMenu } from './Drawer'
import useStyles from './styles'

import InicioSvg from '../../assets/menu/inicio.svg'
import BuscarSvg from '../../assets/menu/buscar.svg'
import BibliotecaSvg from '../../assets/menu/biblioteca.svg'
import AppBar from '@material-ui/core/AppBar';

interface Props {
    window?: () => Window;
    children?: ReactNode;

}

const Menu: React.FC<Props> = ({ window, children }) => {
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
                {children}
            </main>

        </div>

    )
}
export default Menu
export { Menu, DrawerMenu, ListItemIcon }