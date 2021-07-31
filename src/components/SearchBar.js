import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/actions/searchActions";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const searchString = useSelector((state) => state.searchString);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="search-bar-wrapper">
      <div>Find Your Favorite Channel</div>
      <form>
        <input type="text" onChange={onChange}></input>
      </form>
    </div>
  );
};

export default SearchBar;
