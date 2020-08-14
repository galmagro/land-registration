import 'fontsource-roboto';
import React from 'react';
import './App.css';
import {
    AppBar,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem,
    Theme,
    Typography
} from "@material-ui/core";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import LandlordForm from "./landlord/LandlordForm";
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation();

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
            <CssBaseline/>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        {t("land_register")}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <p>{t("home")}</p>
                    </Route>
                    <Route exact path="/lands">
                        <p>{t("lands")}</p>
                    </Route>
                    <Route exact path="/landlords">
                        <p>{t("landlords")}</p>
                    </Route>
                    <Route exact path="/landlords/new">
                        <LandlordForm/>
                    </Route>
                </Switch>
                <Drawer open={state.visibleDrawer} onClose={toggleDrawer(false)} classes={{ paper: classes.drawer }}>
                    <List>
                        <ListItem>
                            <ListItem>
                                <Link to="/landlords">{t("landlords")}</Link>
                            </ListItem>
                        </ListItem>
                        <ListItem>
                            <ListItem>
                                <Link to="/lands">{t("lands")}</Link>
                            </ListItem>
                        </ListItem>
                    </List>
                </Drawer>
            </Router>
            </MuiPickersUtilsProvider>
        </div>
    );
}

export default App;
