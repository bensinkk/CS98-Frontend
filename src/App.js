import Main from './Components/Main';
import Success from './Components/Success';
import {Grid} from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <Grid 
      container 
      spacing={3}
      direction="row"
      justify="center"
      alignItems="center"
      >
      <Grid item xs={5}>
      <Main />
      </Grid>
      <Grid item xs={5}>
      <Success />
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
