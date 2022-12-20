import React, { useState } from "react";

import Button from "../button/Button";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onGetSearchValue(searchValue);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={handleChange}
        placeholder="What are you feeling like"
      />
      <Button className="search-btn">Search</Button>
    </form>
  );
}

export default SearchBar;
