import React, { ReactNode, useState } from 'react';
import { Divider } from '@material-ui/core';

import List from '@material-ui/core/List';

import { ListItemIcon } from './ListItemIcon';
import { DrawerMenu } from './Drawer'
import useStyles from './styles'

import InicioSvg from '../../assets/menu/inicio.svg'
import BuscarSvg from '../../assets/menu/buscar.svg'
import BibliotecaSvg from '../../assets/menu/biblioteca.svg'

import InicioBlackSvg from '../../assets/menu/inicio_black.svg'
import BuscarBlackSvg from '../../assets/menu/buscar_black.svg'
import BibliotecaBlackSvg from '../../assets/menu/biblioteca_black.svg'



interface Props {
    window?: () => Window;
    children?: ReactNode;
    Player?: React.FC;

}

const Menu: React.FC<Props> = ({ window, children, Player }) => {
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>

            <List>
                <ListItemIcon text="Início" icon={InicioBlackSvg} />
                <ListItemIcon text="Buscar" icon={BuscarBlackSvg} />
                <ListItemIcon text="Sua Biblioteca" icon={BibliotecaBlackSvg} />
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
            {
                Player && <Player />
            }
        </div>

    )
}
export default Menu
export { Menu, DrawerMenu, ListItemIcon }