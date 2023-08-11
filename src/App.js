import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>台大傳醫讀書會遊戲</p>
      </header>
      <input placeholder="input password" />
      {/* <Router>
        <Routes>
          <Route path="/organ" element={<p>六腑</p>} />
          <Route path="/disease" element={<p>病因</p>} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
