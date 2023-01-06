import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/detail/:id" element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;