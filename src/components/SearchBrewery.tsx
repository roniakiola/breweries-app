import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, TextField, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import useBreweries from '../hooks/useBreweries';
import debounce from '../functions/debounce';
import Brewery from '../interfaces/interface.Brewery';

const SearchBrewery = () => {
  const [input, setInput] = useState('');
  const { breweries } = useBreweries();
  const [filteredBreweries, setFilteredBreweries] = useState<Brewery[]>([]);

  const searchBreweries = debounce((query: string) => {
    const foundBreweries = (breweries as Brewery[]).filter((brewery: Brewery) =>
      brewery.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBreweries(foundBreweries);
    console.log(foundBreweries);
  }, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInput(query);
    searchBreweries(query);
  };
  const handleClear = () => {
    setInput('');
  };

  return (
    <>
      <TextField
        label='Search Breweries'
        variant='outlined'
        size='small'
        sx={{ color: 'white', bgcolor: 'white' }}
        value={input}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleClear}>
              <HighlightOffIcon />
            </IconButton>
          ),
        }}
      />
      {input && (
        <Box
          sx={{
            bgcolor: '#1976d2',
            width: '50%',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '200px',
            overflow: 'auto',
            right: '10px',
            top: '60px',
          }}
        >
          {filteredBreweries.map((brewery) => (
            <Box sx={{ m: 1, p: 1, bgcolor: 'white' }}>
              <Link to={brewery.id}>{brewery.name}</Link>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default SearchBrewery;
