import './App.css';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes >
        <Route exact path="/" component={Home}/>
        </Routes>
      <Home/>
    </div>
  );
}

export default App;
