import React from "react";
import { Button, Grid } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useSelector } from "react-redux";
import "../styles/ChannelGrid.css";
import ChannelCard from "./ChannelCard";

const ChannelGrid = () => {
  const { channels } = useSelector((state) => state.channel);

  const renderPagination = (disablePrev, disableNext) => {
    return (
      <Grid container item xs={12} justifyContent="space-between">
        <Button disabled={disablePrev} color="primary">
          <Grid container alignItems="center">
            <NavigateBeforeIcon />
            Previous
          </Grid>
        </Button>
        <Button disabled={disableNext} color="primary">
          <Grid container alignItems="center">
            Next
            <NavigateNextIcon />
          </Grid>
        </Button>
      </Grid>
    );
  };

  if (channels && channels.data)
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
          {renderPagination()}
        </Grid>
      </Grid>
    );
  else return null;
};

export default ChannelGrid;
