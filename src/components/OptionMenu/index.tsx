"use client"
import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useStyles } from './styles';

interface IOptionMenuProps {
  options: any[];
  selectItem?: any;
  menuStyles?: React.CSSProperties | undefined;
  postLink?: string;
}

const OptionMenu: React.FC<IOptionMenuProps> = props => {
  const { options, selectItem, menuStyles = { marginTop: 15, marginLeft: 30 }, postLink } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [shareAnchorEl, setShareAnchorEl] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState<boolean>(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setShareAnchorEl(event.currentTarget);
  };

  const handleOptionClick = (option:any) => {
    if (option.onClick) {
      option.onClick();
    }
    setAnchorEl(null);
    if (option.label.includes('Share')) {
      setShowShareMenu(true);
    }
  };

  const classes = useStyles();

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={e=>handleClick}
        className={classes.optionIcon}>
        <MoreHorizIcon />
      </IconButton>
      {open && (
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open
          transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          onClose={() => setAnchorEl(null)}
          PaperProps={{
            style: menuStyles,
          }}>
          {options.map(option =>
            option.type === 'select' ? (
              <MenuItem key={option.label} className={classes.menuItemSelect}>
                {selectItem}
              </MenuItem>
            ) : (
              <MenuItem key={option.label} onClick={(e) => handleOptionClick(option)} className={classes.menuItem}>
                {option.label}
              </MenuItem>
            ),
          )}
        </Menu>
      )}
     
    </div>
  );
};

export default OptionMenu;
