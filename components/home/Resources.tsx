import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from "next/link";

const options = [
    { text: "White Paper", path: "/whitepaper" },
    { text: "Yellow Paper", path: "/yellowpaper" },
    { text: "Github", path: "https://github.com/spreadly-dao" },
    { text: "FAQ", path: "/faq" },
  ];

export default function Resources() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
 
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{paddingLeft: "1.5rem"}}>
      <List
        aria-label="resources tab"
      >
        <ListItem
          aria-haspopup="listbox"
          aria-label="resources"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="Resources"
            style={{ textTransform: "uppercase" }}
          />
        </ListItem>
      </List>
      <Menu
        id="resources-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            style={{ textTransform: "uppercase" }}
          >
            {option.text == "Github" ?
            <a href={option.path} target="_blank" rel="noopener noreferrer">{option.text}</a>
            :
            <Link href={option.path}>{option.text}</Link>
        }
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
