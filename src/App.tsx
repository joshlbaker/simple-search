import './App.css';

import Resident from './components';
import useResidentSearch from './hooks/useResidentSearch';

function App() {
  const { search, residents } = useResidentSearch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  };

  return (
    <main>
      <h1>Simple search</h1>

      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />

      <ul>
        {residents?.map((resident) => (
          <Resident key={resident.id} {...resident} />
        ))}
      </ul>

      {residents?.length === 0 && 'No residents found'}
    </main>
  );
}

export default App;
