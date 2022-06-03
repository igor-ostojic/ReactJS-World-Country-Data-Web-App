const SearchFilter = ({ setSearchTerm }) => {
  return (
    <form className="search-filter">
      <button type="submit" disabled>
        Search
      </button>
      <input
        type="search"
        placeholder="Search for a country..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchFilter;
