import { Grid } from "@material-ui/core";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ChannelGrid from "./components/ChannelGrid";
import ChannelDetail from "./components/ChannelDetail";

function App() {
  return (
    <Grid container className="App">
      <SearchBar />
      <ChannelGrid />
      <ChannelDetail />
    </Grid>
  );
}

export default App;
