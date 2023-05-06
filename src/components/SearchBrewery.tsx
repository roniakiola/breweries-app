import { useState } from 'react';

import TextField from '@mui/material/TextField';
import useBreweries from '../hooks/useBreweries';
import debounce from '../functions/debounce';
import Brewery from '../interfaces/interface.Brewery';

const SearchBrewery = () => {
  const [input, setInput] = useState('');
  const { breweries } = useBreweries();

  const searchBreweries = debounce((query: string) => {
    const filteredBreweries = (breweries as Brewery[]).filter(
      (brewery: Brewery) =>
        brewery.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(filteredBreweries);
  }, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInput(query);
    searchBreweries(query);
  };

  return (
    <>
      <TextField
        label='Controlled'
        variant='outlined'
        size='small'
        sx={{ color: 'white', bgcolor: 'white' }}
        value={input}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBrewery;
