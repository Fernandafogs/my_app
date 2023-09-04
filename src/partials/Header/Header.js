import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './Header.style';

const Header = () => {  
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}sx={{ flexGrow: 1, marginLeft: 5 }}>
                    My App
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}   

export default Header;


/*
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
} from '@mui/material';

import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

//JSS - javascript styling system
const useStyles = styled(() => ({  
    title: {
       flexGrow: 1,
    },

    loginButton: {
        marginLeft: 'auto',
    },
})) 
        

const Header = () => { 
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 5 }}>
                        My App
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
  } 

  export default Header;

  */
