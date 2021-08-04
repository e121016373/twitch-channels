import React from "react";
import { Grid, Paper, Modal, Fade, Backdrop, Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/actions/channelActions";
import "../styles/ChannelDetail.css";

const ChannelDetail = () => {
  const { channel, showChannelModal } = useSelector((state) => state.channel);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(openModal(false));
  };

  return (
    <Modal
      className="modal"
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={showChannelModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={showChannelModal}>
        <Grid container item justifyContent="center" xs={12}>
          <Grid item xs={8} lg={6}>
            <Paper>
              <Grid
                className="channel-detail-wrapper"
                container
                item
                xs={12}
                direction="column"
              >
                <Grid
                  className="about"
                  container
                  item
                  xs={12}
                  spacing={1}
                  direction="row"
                >
                  <Grid
                    className="profile-image-wrapper"
                    container
                    item
                    xs={12}
                    md={6}
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                  >
                    <Avatar
                      className="profile-image"
                      src={channel.profileImg}
                      alt={channel.broadcaster_name}
                    />
                  </Grid>
                  <Grid container item xs={12} md={6} justifyContent="center">
                    <Grid
                      className="channel-info-wrapper"
                      container
                      item
                      xs={9}
                      direction="column"
                    >
                      <Grid item>
                        <h2>About: {channel.broadcaster_name}</h2>
                      </Grid>
                      <Grid item>
                        <div>Followers: {channel.numFollowers}</div>
                      </Grid>
                      <Grid item>
                        <div>Number of Views: {channel.numViews}</div>
                      </Grid>
                      <Grid item>
                        <div>Team: {channel.teamName || "N/A"}</div>
                      </Grid>
                      <br />
                      <Grid item>
                        <div>{channel.description}</div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>TODO: Put Videos Here</Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default ChannelDetail;
