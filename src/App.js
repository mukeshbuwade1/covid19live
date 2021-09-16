import Covid from "./component/Covid"
import './App.css';

function App() {
  return (
    <>
      <div className="main_body">
        <div className="text_area">
          <p className="live"><i>&#128308;</i> Live</p>
          <h1>Covid-19 Live Update</h1>
        </div>
        <Covid />
      </div>
    </>
    
  );
}

export default App;
