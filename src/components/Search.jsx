var Search = (props) => {

  const debouncedFn = _.debounce((query) => {
    props.handleInputChange(query);
  }, 500);

  var onChange = (event) => {
    event.persist();
    debouncedFn(event.target.value);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={onChange} />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
