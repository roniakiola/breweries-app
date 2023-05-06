import { useParams } from 'react-router-dom';
import { Breadcrumbs, Typography, Box, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import useBreweries from '../hooks/useBreweries';
import Brewery from '../interfaces/interface.Brewery';

const SingleBrewery = () => {
  const { id } = useParams<{ id: string }>();
  const { breweries, loading } = useBreweries(id);

  const singleBrewery = breweries as Brewery;

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  console.log(breweries);
  console.log(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link to='/'>Home</Link>
          <Typography color='text.primary'>{singleBrewery.name}</Typography>
        </Breadcrumbs>
        <Box sx={{ width: '100%', mt: 10 }}>
          <Typography variant='h2'>{singleBrewery.name}</Typography>
          <Typography variant='h4'>
            Brewery Type: {singleBrewery.brewery_type}
          </Typography>
          <Typography variant='h4'>
            Address: {singleBrewery.address_1}, {singleBrewery.city},{' '}
            {singleBrewery.state}, {singleBrewery.postal_code}
          </Typography>
          <Typography variant='h4'>Phone: {singleBrewery.phone}</Typography>
          <Typography variant='h4'>
            Website: {singleBrewery.website_url}
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};
export default SingleBrewery;
