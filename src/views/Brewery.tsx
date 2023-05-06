import { useParams } from 'react-router-dom';
import useBreweries from '../hooks/useBreweries';

const Brewery = () => {
  const { id } = useParams();
  const { breweries, loading } = useBreweries(id);
  const singleBrewery = breweries[0];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{singleBrewery.name}</h1>
    </>
  );
};
export default Brewery;
