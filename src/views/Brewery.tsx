import { useParams } from 'react-router-dom';
import useBreweries from '../hooks/useBreweries';

const Brewery = () => {
  const { id } = useParams();
  // const { breweries, loading } = useBreweries();
  return (
    <>
      <h1>Brewery details</h1>
    </>
  );
};
export default Brewery;
