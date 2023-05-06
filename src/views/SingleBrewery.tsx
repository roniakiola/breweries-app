import { useParams } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';
import Link from '@mui/material/Link';

import useBreweries from '../hooks/useBreweries';
import Brewery from '../interfaces/interface.Brewery';

const SingleBrewery = () => {
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
      <Breadcrumbs aria-label='breadcrumb'>
        <Link color='text.primary' href='/'>
          Home
        </Link>
        <Typography color='text.primary'>{singleBrewery.name}</Typography>
      </Breadcrumbs>
      <h1>{singleBrewery.name}</h1>
    </>
  );
};
export default SingleBrewery;
