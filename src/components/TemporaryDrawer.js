import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HotelIcon from "@material-ui/icons/Hotel";
import CameraEnhanceIcon from "@material-ui/icons/CameraEnhance";
import RoomServiceIcon from "@material-ui/icons/RoomService";

import logo from '../assets/img/test-logo.png';


const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  listItemText: {
    fontSize: "1.1em"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav" aria-label="side navbar">
        <img className="nav-logo" src={logo} alt="Mercadito Logo" srcset="" />

        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText
            primary="Nosotros"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <HotelIcon />
          </ListItemIcon>
          <ListItemText
            primary="Productos"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <RoomServiceIcon />
          </ListItemIcon>
          <ListItemText
            primary="Pedidos"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <CameraEnhanceIcon />
          </ListItemIcon>
          <ListItemText
            primary="Contacto"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
