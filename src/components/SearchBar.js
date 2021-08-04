import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  createStyles,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { setSearch } from "../redux/actions/searchActions";
import { setChannels, resetChannels } from "../redux/actions/channelActions";
import "../styles/SearchBar.css";
import api from "../api";

const useStyles = makeStyles((theme) =>
  createStyles({
    searchBar: {
      height: 50,
    },
  })
);

const SearchBar = () => {
  const { searchString } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) submitSearch();
  };

  const handleReset = () => {
    dispatch(setSearch(""));
    dispatch(resetChannels());
  };

  const submitSearch = async (e) => {
    try {
      if (searchString !== "") {
        const response = await api.get(
          `https://api.twitch.tv/helix/search/channels?query=${searchString}&first=18`
        );
        dispatch(setChannels(response.data));
      }
    } catch (error) {
      console.log("Failed to search for channels: ", error);
    }
  };

  return (
    <Grid container className="search-bar-wrapper" justifyContent="center">
      <Grid item xs={6}>
        <div className="search-title">Find Your Favourite Twitch Channels!</div>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <TextField
              className={classes.searchBar}
              id="search-bar"
              label="Search for Channels"
              type="search"
              variant="outlined"
              fullWidth
              value={searchString}
              onChange={onChange}
              onKeyUp={handleEnter}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                className: classes.searchBar,
              }}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <Button
              className={classes.searchBar}
              variant="outlined"
              color="primary"
              fullWidth
              onClick={submitSearch}
            >
              Search
            </Button>
          </Grid>
          <Grid item xs={6} md={2}>
            <Button
              className={classes.searchBar}
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleReset}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
