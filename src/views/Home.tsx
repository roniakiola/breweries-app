import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';

import useBreweries from '../hooks/useBreweries';
import Brewery from '../interfaces/interface.Brewery';

const Home = () => {
  const { breweries, loading } = useBreweries();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Grid container spacing={2}>
      {(breweries as Brewery[]).map((brewery) => (
        <Grid item key={brewery.id} xs={12} sm={6} md={4}>
          <Link to={brewery.id}>
            <Card variant='outlined'>
              <CardContent>
                <Typography>{brewery.name}</Typography>
                <Typography>{brewery.street}</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
