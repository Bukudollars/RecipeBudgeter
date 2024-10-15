import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

function NavButton({text, link}) {
    return (
        <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={link}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    );
};

export default NavButton;