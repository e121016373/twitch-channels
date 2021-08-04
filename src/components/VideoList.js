import {
  Grid,
  List,
  ListItem,
  Typography,
  Divider,
  Link,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import "../styles/VideoList.css";

const VideoList = () => {
  const { videos } = useSelector((state) => state.channel.channel);

  if (videos.length)
    return (
      <>
        <Typography align="center">Recent Streams</Typography>
        <List className="video-list" component="nav">
          {videos.map((video) => {
            const img = video.thumbnail_url
              .replace("%{width}", "300")
              .replace("%{height}", "150");

            return (
              <Grid key={video.id}>
                <Divider />
                <Link href={video.url} underline="none" target="_blank">
                  <ListItem button>
                    <Grid container spacing={2} alignItems="center">
                      <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="center"
                      >
                        <img src={img} alt={video.title} />
                      </Grid>
                      <Grid item xs={12} md={6} container direction="column">
                        <Typography variant="subtitle1" color="primary">
                          {video.title}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          Duration: {video.duration}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          Views: {video.view_count}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          Published At: {video.created_at.substring(0, 10)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                </Link>
              </Grid>
            );
          })}
        </List>
      </>
    );
  else return null;
};

export default VideoList;
