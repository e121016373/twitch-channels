import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { setSearch } from "../redux/actions/searchActions";
import { setChannels } from "../redux/actions/channelActions";
import "../styles/SearchBar.css";
import api from "../api";

const SearchBar = () => {
  const { searchString } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const submitSearch = async (e) => {
    try {
      if (e.keyCode === 13 && searchString !== "") {
        const response = await api.get(
          `https://api.twitch.tv/helix/search/channels?query=${searchString}&first=18`
        );
        dispatch(setChannels(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container className="search-bar-wrapper" justifyContent={"center"}>
      <Grid item xs={6}>
        <div className="search-title">Find Your Favourite Twitch Channels!</div>
        <TextField
          id="search-bar"
          label="Search for Channels"
          type="search"
          variant="outlined"
          fullWidth
          onChange={onChange}
          onKeyUp={submitSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
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
