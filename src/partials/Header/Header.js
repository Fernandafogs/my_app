import { useState } from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemButton,
} from '@mui/material';

import { useHistory } from 'react-router-dom';


import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import useStyles from './Header.style';

const Header = ({ user }) => {  
    const classes = useStyles();
    const history = useHistory();

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {    
        setMenuOpen(!menuOpen);
    }  
    
    const handleMenuClick = route => {
        history.push(route);
        handleToggleMenu();
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => handleToggleMenu()}
                        >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}sx={{ flexGrow: 1, marginLeft: 5 }}>
                        My App
                    </Typography>
                    {
                        user.logged
                        ? <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 5 }}>{user.email}</Typography>
                        : <Button color="inherit">Login</Button>

                    }
                </Toolbar>
            </AppBar>
            <Drawer    
                open = {menuOpen}
                onClose = {() => handleToggleMenu()}
            >
                <List>
                    <ListItem>
                        <ListItemButton onClick={() => handleMenuClick ('/')} >
                            <ListItemIcon>
                                <HomeIcon />                            
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => handleMenuClick ('/customers')}>
                            <ListItemIcon>
                                <PersonAddIcon />                            
                            </ListItemIcon>
                            <ListItemText>Lista de Clientes</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => handleMenuClick ('/customers/add')}>
                            <ListItemIcon>
                                <PersonAddIcon />                            
                            </ListItemIcon>
                            <ListItemText>Cadastro de Clientes</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}   

export default Header;

