import { useEffect, useState } from 'react';

import Brewery from '../interfaces/interface.Brewery';

const useBreweries = (id?: string) => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchBrewery = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setBreweries(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    setLoading(true);
    if (id) {
      fetchBrewery(`https://api.openbrewerydb.org/v1/breweries/${id}`);
    } else {
      fetchBrewery('https://api.openbrewerydb.org/v1/breweries');
    }
  }, [id]);
  return { breweries, loading };
};

export default useBreweries;
