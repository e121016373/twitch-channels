import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import "../styles/ChannelCard.css";

const ChannelCard = (props) => {
  const { channel } = props;

  return (
    <Grid item xs={12}>
      <Card className="channel-card">
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
    </Grid>
  );
};

export default ChannelCard;
