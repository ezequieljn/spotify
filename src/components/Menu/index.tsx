import React, { ReactNode, useState } from 'react';
import { Box, Divider, Typography } from '@material-ui/core';

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

import { useTheme } from '../../hooks/theme'
import Link from 'next/link'

import { IoIosMore } from 'react-icons/io'
import { useTheme as useThemeMaterial } from '@material-ui/core'

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
    const themeMaterial = useThemeMaterial()
    const { changeTheme, theme } = useTheme()

    const drawer = (
        <div>
            <Box className={classes.containerIconBox}>
                <IoIosMore size={30} color={themeMaterial.palette.text.primary} />
            </Box>
            <List>
                <ListItemIcon text="Início" icon={theme === "yellow" ? InicioBlackSvg : InicioSvg} />
                <ListItemIcon text="Buscar" icon={theme === "yellow" ? BuscarBlackSvg : BuscarSvg} />
                <ListItemIcon text="Sua Biblioteca" icon={theme === "yellow" ? BibliotecaBlackSvg : BibliotecaSvg} />
            </List>
            <Divider />
            <List>
                <Box className={classes.conteinerThemeText}>
                    <Typography className={classes.textColor} variant="h6">Tema</Typography>
                </Box>
                <Box className={classes.conteinerTheme}>
                    <button className={classes.containerButton} onClick={() => changeTheme('dark')}>Dark</button>
                    <button className={classes.containerButton} onClick={() => changeTheme('yellow')}>Yellow</button>
                    <button className={classes.containerButton} onClick={() => changeTheme('purple')}>Purple</button>
                </Box>
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
                <div className={classes.contentDiv}>
                    {children}
                </div>
            </main>
            {
                Player && <Player />
            }
        </div>

    )
}
export default Menu
export { Menu, DrawerMenu, ListItemIcon }