import '../App.css';
import Button from '@material-ui/core/Button';

function Main() {
  return (
    <div className="App">
      <form>
        <h1>California House Price Prediction</h1>
        <p>Enter the information</p>
        <div>
          <input
            type="text"
          />
          <input
            type="text"
          />
          <Button variant="contained" color="primary">
            Check Price
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Main;
