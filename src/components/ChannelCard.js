import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import "../styles/ChannelCard.css";
import api from "../api";
import { selectChannel, openModal } from "../redux/actions/channelActions";

const ChannelCard = (props) => {
  const { channel } = props;
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const responses = await Promise.all([
        api.get(
          `https://api.twitch.tv/helix/channels?broadcaster_id=${channel.id}`
        ),
        api.get(
          `https://api.twitch.tv/helix/users/follows?to_id=${channel.id}`
        ),
        api.get(
          `https://api.twitch.tv/helix/teams/channel?broadcaster_id=${channel.id}`
        ),
        api.get(`https://api.twitch.tv/helix/users?id=${channel.id}`),
        api.get(`https://api.twitch.tv/helix/videos?user_id=${channel.id}`),
      ]);

      if (responses.every((res) => res.status === 200)) {
        const [resChannel, resFollowers, resTeam, resUser, resVideos] =
          responses;

        let channelInfo = { profileImg: channel.thumbnail_url };
        if (resChannel && resChannel.data.data)
          channelInfo = { ...channelInfo, ...resChannel.data.data[0] };
        if (resFollowers)
          channelInfo = {
            ...channelInfo,
            numFollowers: resFollowers.data.total,
          };

        if (resTeam && resTeam.data.data)
          channelInfo = {
            ...channelInfo,
            teamName: resTeam.data.data[0].team_display_name,
          };
        if (resUser && resUser.data.data)
          channelInfo = {
            ...channelInfo,
            description: resUser.data.data[0].description,
            numViews: resUser.data.data[0].view_count,
          };
        if (resVideos && resVideos.data.data)
          channelInfo = {
            ...channelInfo,
            videos: resVideos.data.data,
          };

        dispatch(selectChannel(channelInfo));
        dispatch(openModal(true));
      }
    } catch (error) {
      console.log("Failed to get channel information: ", error);
    }
  };

  return (
    <Card className="channel-card" onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          className="card-media"
          image={channel.thumbnail_url}
          title={channel.display_name}
          alt={channel.display_name}
          height="270px"
          component="img"
        />
        <CardContent>
          <Typography
            className="card-title"
            gutterBottom
            variant="h6"
            component="h2"
          >
            {channel.title || channel.display_name}
          </Typography>
          <Typography
            className="card-broadcaster"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {`Broadcaster: ${channel.broadcaster_login}`}
          </Typography>

          <Typography
            className="card-gamename"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {channel.game_name && `Game: ${channel.game_name}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChannelCard;
