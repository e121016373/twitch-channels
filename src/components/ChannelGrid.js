import React from "react";
import { Button, Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import "../styles/ChannelGrid.css";
import ChannelCard from "./ChannelCard";
import { moreChannels } from "../redux/actions/channelActions";
import api from "../api";

const ChannelGrid = () => {
  const { channels } = useSelector((state) => state.channel);
  const { searchString } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const expandChannels = async () => {
    try {
      if (Object.keys(channels.pagination).length > 0) {
        const response = await api.get(
          `https://api.twitch.tv/helix/search/channels?query=${searchString}&first=18&after=${channels.pagination.cursor}`
        );
        dispatch(moreChannels(response.data));
      }
    } catch (error) {
      console.log("Failed to expand more channels: ", error);
    }
  };

  const renderMoreButton = (disableMore) => {
    return (
      <Grid container item xs={12} justifyContent="center">
        <Button
          fullWidth
          disabled={disableMore}
          color="primary"
          onClick={expandChannels}
        >
          <Grid container alignItems="center" direction="column">
            More
            <ExpandMoreIcon />
          </Grid>
        </Button>
      </Grid>
    );
  };
  if (channels && channels.data && channels.data.length > 0)
    return (
      <Grid container item justifyContent="center" xs={12}>
        <Grid container item xs={8} spacing={2}>
          {channels.data &&
            channels.data.map((channel) => {
              return (
                <Grid
                  className="channel-card"
                  container
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  key={channel.id}
                  justifyContent="space-around"
                >
                  <ChannelCard channel={channel} />
                </Grid>
              );
            })}
          {renderMoreButton(
            Object.keys(channels.pagination).length > 0 ? false : true
          )}
        </Grid>
      </Grid>
    );
  else return null;
};

export default ChannelGrid;
