import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles'
import { Box } from '@material-ui/core';

interface DrawerProps {
    drawer: any;
    handleDrawerToggle: () => void
    mobileOpen: boolean;
    container: () => HTMLElement
}

function DrawerMenu({ drawer, handleDrawerToggle, mobileOpen, container }: DrawerProps) {

    const classes = useStyles()
    const theme = useTheme()


    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    BackdropProps={{ invisible: true }}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <Box p={1}>
                        {drawer}
                    </Box>
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    BackdropProps={{ invisible: true }}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <Box p={1}>

                        {drawer}
                    </Box>
                </Drawer>
            </Hidden>
        </nav>
    )
}

export { DrawerMenu }
