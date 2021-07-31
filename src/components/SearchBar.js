import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/actions/searchActions";
import "../styles/SearchBar.css";
import { Grid, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  const searchString = useSelector((state) => state.searchString);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <Grid container className="search-bar-wrapper" justifyContent={"center"}>
      <Grid item xs={6}>
        <div className="search-title">Find Your Favourite Channels!</div>
        <TextField
          id="search-bar"
          label="Search for Channels"
          type="search"
          variant="outlined"
          fullWidth
          onChange={onChange}
          InputProps={{
            startAdornment: (
              <InputAdornment posiition="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
