import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import ChannelCard from "./ChannelCard";
import "../styles/ChannelGrid.css";

const ChannelGrid = () => {
  const { channels } = useSelector((state) => state.channel);

  return (
    <Grid
      className="channel-grid"
      container
      item
      justifyContent="center"
      xs={12}
    >
      <Grid container item xs={8} spacing={2}>
        {channels.data &&
          channels.data.map((channel) => {
            return (
              <Grid
                className="channel-card"
                item
                xs={12}
                md={6}
                lg={4}
                key={channel.id}
              >
                <ChannelCard channel={channel} />
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default ChannelGrid;
