import { Grid } from "@material-ui/core";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ChannelGrid from "./components/ChannelGrid";

function App() {
  return (
    <Grid container className="App">
      <SearchBar />
      <ChannelGrid />
    </Grid>
  );
}

export default App;
