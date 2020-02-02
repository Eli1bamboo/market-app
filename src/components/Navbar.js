import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

//TODO: Eli checkeate estos Routes. Eran los que yo tenia en otro site. No se si aplican para aca.

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TemporaryDrawer from "./TemporaryDrawer";
import logo from '../assets/img/test-logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '90px',
    backgroundColor: 'transparent',
    margin: 0,
    padding: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        style={{
          display: "flex",
          color: "black",
          background: "transparent",
          boxShadow: "none"
        }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
        <img className='nav-logo' src={logo} alt="Mercadito Logo" srcset=""/>
          <IconButton
            edge="start"
            className={"classes.menuButton burger"}
            color="default"
            aria-label="menu"
            style={{ paddingRight: 0 }}
          >
            <TemporaryDrawer />
          </IconButton>
          <Typography className="nav-links">
            <Link href="#">
              Nosotros
            </Link>
            <Link href="#" color="inherit">
              Productos
            </Link>
            <Link href="#" variant="body2">
              Pedidos
            </Link>
            <Link href="#" variant="body2">
              Contacto
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
