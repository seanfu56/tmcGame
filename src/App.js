import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [game, setGame] = useState("");
  const navigate = useNavigate();
  return (
    <div className="App">
      <button
        onClick={() => {
          if (game === "") {
            setGame("organ");
          } else {
            setGame("");
          }
        }}
      >
        game
      </button>
      {game === "" ? (
        <header className="App-header">
          <p>台大傳醫讀書會遊戲</p>
        </header>
      ) : (
        <input placeholder="input password" />
      )}
      <button
        onClick={() => {
          navigate("/organ");
        }}
      >
        to route
      </button>
      <Router>
        <Routes>
          <Route path="/organ" element={<p>六腑</p>} />
          <Route path="/disease" element={<p>病因</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
