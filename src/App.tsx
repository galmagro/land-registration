import React from 'react';
import './App.css';
import {
    AppBar,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Theme,
    Typography
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    ({
        drawer: {
            width: 240
        }
    })
);

function App() {

    const [state, setState] = React.useState({
       visibleDrawer: false
    });

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setState({ ...state, visibleDrawer : open });
    };

    const classes = useStyles();

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        Registro de terrenos
                    </Typography>
                </Toolbar>
                <Container maxWidth="lg">

                </Container>
                <Drawer open={state.visibleDrawer} onClose={toggleDrawer(false)} classes={{ paper: classes.drawer }}>
                    <List>
                        <ListItem>
                            <ListItemText>Propietarios</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>Terrenos</ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            </AppBar>
        </div>
    );
}

export default App;
