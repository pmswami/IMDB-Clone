import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { routhPath } from "../../constants/route";

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
      <Link
        to={`${routhPath.categories}?category=popular`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={props.handleClose}>Popular</MenuItem>
      </Link>
      <Link
        to={`${routhPath.categories}?category=toprated`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={props.handleClose}>Top Rated</MenuItem>
      </Link>
      <Link
        to={`${routhPath.categories}?category=upcoming`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={props.handleClose}>Upcoming</MenuItem>
      </Link>
    </Menu>
  );
}

export default HeaderMenu;
