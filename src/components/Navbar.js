import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => (
    <AppBar position="sticky">
        <Toolbar>
            <Typography variant="h6">
                POV Landscaping
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Navbar;
