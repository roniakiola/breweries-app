import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Container,
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './views/Home';
import Brewery from './views/Brewery';

const App = () => {
  return (
    <Router>
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
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: 10 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Brewery />} />
          </Routes>
        </Container>
      </>
    </Router>
  );
};

export default App;

//Fetch and display all companies
// - Make react-hook-form to search
// - Make axios fetch
// - Use Material UI cards to display each company
// - Display on page, make pagination?

//Display singe company
// - Fetch single company with ID
// - Make routing for each company
// - Bread crumps with material UI
// - Show details in company page

//Create search component
// - User input to search companies on main page
// - How to make?

//Material UI for design
// - Use ready components as much as possible
// - Make responsive

//Performance optimization where applicable

//deploy
