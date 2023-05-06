import useBreweries from '../hooks/useBreweries';

const Home = () => {
  const { breweries, loading } = useBreweries();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {breweries.map((brewery) => (
        <li key={brewery.id}>
          <h2>{brewery.name}</h2>
          <p>{brewery.street}</p>
        </li>
      ))}
    </ul>
  );
};

export default Home;
