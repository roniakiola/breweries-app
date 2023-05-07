import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Home from './views/Home';
import SingleBrewery from './views/SingleBrewery';
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
