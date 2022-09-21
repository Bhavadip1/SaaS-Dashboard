import { Grid } from "@mui/material";
import "./App.css";
import SideNavbar from "./Components/SideNavbar";
import Containtbar from "./Components/Containtbar";

function App() {
  return (
    <div className="App">
      <Grid container className="Container">
        <Grid xl={3} sm={3} md={3} xs={2} className="gridSideNavbar">
          <SideNavbar />
        </Grid>
        <Grid xl={9} sm={9} md={9} xs={10} className="gridContantbar">
          <Containtbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
