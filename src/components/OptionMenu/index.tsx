"use client";
import React, { useState, useEffect, useRef } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useStyles } from "./styles";

interface IOptionMenuProps {
  options: any[];
  selectItem?: any;
  menuStyles?: React.CSSProperties | undefined;
  postLink?: string;
}

const OptionMenu: React.FC<IOptionMenuProps> = (props) => {
  const {
    options,
    selectItem,
    menuStyles = { marginLeft: 30 },
    postLink,
  } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleClick = () => {
      setAnchorEl(menuRef.current);
    };

    handleClick();

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: any) => {
    if (option.onClick) {
      option.onClick();
    }
    handleClose();
  };

  return (
    <div ref={menuRef}>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          style: menuStyles,
        }}
      >
        {options.map((option) =>
          option.type === "select" ? (
            <MenuItem key={option.label} className={classes.menuItemSelect}>
              {selectItem}
            </MenuItem>
          ) : (
            <MenuItem
              key={option.label}
              onClick={() => handleOptionClick(option)}
              className={classes.menuItem}
            >
              {option.icon}
              {option.label}
            </MenuItem>
          )
        )}
      </Menu>
    </div>
  );
};

export default OptionMenu;
