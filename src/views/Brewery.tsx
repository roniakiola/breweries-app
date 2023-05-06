import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useBreweries from '../hooks/useBreweries';
import Brewery from '../interfaces/interface.Brewery';

const BreweryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { breweries, loading } = useBreweries(id);
  const singleBrewery = breweries as Brewery;

  console.log(breweries);
  console.log(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{singleBrewery.name}</h1>
    </>
  );
};
export default BreweryDetails;
