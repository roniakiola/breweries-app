import { AppBar, IconButton, Typography, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import SearchBrewery from './SearchBrewery';

const Navbar = () => {
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Breweries
          </Typography>
          <SearchBrewery />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
