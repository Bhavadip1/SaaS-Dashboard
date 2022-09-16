import { Grid } from "@mui/material";
import "./App.css";
import SideNavbar from "./Components/SideNavbar";
import Containtbar from "./Components/Containtbar";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid xs={3} className="gridSideNavbar">
          <SideNavbar />
        </Grid>
        <Grid xs={9} className="gridContantbar">
          <Containtbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
