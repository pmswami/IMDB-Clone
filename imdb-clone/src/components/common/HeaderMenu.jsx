import React from "react";
import { Menu, MenuItem } from "@mui/material";

function HeaderMenu(props) {
  const openMenu = Boolean(props.open);

  return (
    <Menu
      id="basic-menu"
      anchorEl={props.open}
      open={openMenu}
      onClose={props.handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={props.handleClose}>Popular</MenuItem>
      <MenuItem onClick={props.handleClose}>Top Rated</MenuItem>
      <MenuItem onClick={props.handleClose}>Upcoming</MenuItem>
    </Menu>
  );
}

export default HeaderMenu;
