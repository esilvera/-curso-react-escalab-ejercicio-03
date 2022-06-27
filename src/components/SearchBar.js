const SearchBar = (props) => {

  return (
  <div>
    <input type="text" placeholder="Ciudad ..." />
    <button onClick={() => props.onSearch('Santiago')}>Agregar</button>
  </div>
  );
};

export default SearchBar;
