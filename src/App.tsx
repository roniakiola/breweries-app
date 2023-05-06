import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Home from './views/Home';
import SingleBrewery from './views/Brewery';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Container sx={{ mt: 10 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<SingleBrewery />} />
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
