import React from "react";
import { Grid, Paper, Modal, Fade, Backdrop } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/actions/channelActions";
import ChannelIntro from "./ChannelIntro";
import "../styles/ChannelModal.css";
import VideoList from "./VideoList";

const ChannelModal = () => {
  const { showChannelModal } = useSelector((state) => state.channel);
  const dispatch = useDispatch();
  console.log(showChannelModal);

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
                className="channel-modal-wrapper"
                container
                item
                xs={12}
                direction="column"
              >
                <ChannelIntro />
                <VideoList />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default ChannelModal;
