import { Grid } from "@material-ui/core";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ChannelGrid from "./components/ChannelGrid";
import ChannelModal from "./components/ChannelModal";

function App() {
  return (
    <Grid container className="App">
      <SearchBar />
      <ChannelGrid />
      <ChannelModal />
    </Grid>
  );
}

export default App;
