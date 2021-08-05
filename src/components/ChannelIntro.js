import React from "react";
import { useSelector } from "react-redux";
import { Grid, Avatar, Typography } from "@material-ui/core";
import "../styles/ChannelIntro.css";

const ChannelIntro = () => {
  const { channel } = useSelector((state) => state.channel);

  return (
    <Grid
      className="about"
      container
      item
      xs={12}
      spacing={1}
      direction="row"
      justifyContent="space-around"
    >
      <Grid
        className="profile-image-wrapper"
        container
        item
        xs={12}
        md={4}
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          className="profile-image"
          src={channel.profileImg}
          alt={channel.broadcaster_name}
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={6}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          className="channel-info-wrapper"
          container
          item
          xs={10}
          direction="column"
        >
          <Typography
            noWrap
            variant="h6"
            color="primary"
            style={{ fontWeight: 600 }}
          >
            {channel.broadcaster_name}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Followers: {channel.numFollowers}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Number of Views: {channel.numViews}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {channel.teamName && `Team: ${channel.teamName}`}
          </Typography>
          <br />
          <Typography>{channel.description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChannelIntro;
