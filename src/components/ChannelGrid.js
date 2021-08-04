import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import "../styles/ChannelGrid.css";
import ChannelCard from "./ChannelCard";

const ChannelGrid = () => {
  const { channels } = useSelector((state) => state.channel);

  return (
    <Grid
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
      </Grid>
    </Grid>
  );
};

export default ChannelGrid;
