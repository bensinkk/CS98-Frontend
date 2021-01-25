import '../App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function Main() {
  return (
    <div className="App">
      <form>
        <h1>King County House Price Prediction</h1>
        <p>Enter the information below and click the button to see your estimation</p>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid>
          <input
              type="text"
            />
            </Grid>
            <Grid>
          <input
              type="text"
            />
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Check Price
          </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Main;