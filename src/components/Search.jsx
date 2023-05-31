const Search = ({fetchVideos}) => {
  const [queryString, setQueryString] = React.useState('');
  const [debounceTimeout, setDebounceTimeout] = React.useState(null);

  const handleSubmit = () => {
    fetchVideos(queryString);
  };

  // const handleUpdateQuery = ({target}) => {
  //   //when user types into an input
  //   // check for a timeout
  //   console.log(debounceTimeout);
  //   if (debounceTimeout) {
  //     clearTimeout(debounceTimeout);
  //     setDebounceTimeout(null);
  //   }
  //   setQueryString(target.value);
  //   setDebounceTimeout(setTimeout(() => {
  //     fetchVideos(queryString);
  //     setDebounceTimeout(null); // turns it to null
  //   }, 1000));
  //   // if timeout exists
  //   // delete timeout and restart timeout
  //   // we update queryString
  // };

  React.useEffect(()=> {
    if (!queryString.length) {
      return;
    }

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
      setDebounceTimeout(null);
    }

    setDebounceTimeout(setTimeout(() => {
      fetchVideos(queryString);
      setDebounceTimeout(null);
    }, 500));

  }, [queryString]);

  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        value={queryString}
        onChange={({target}) => setQueryString(target.value) }
      />
      <button className="btn hidden-sm-down" onClick={handleSubmit} >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
