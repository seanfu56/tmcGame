import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header.jsx";

function App() {
  // const navigate = useNavigate();
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<p>homepage</p>} />
          <Route path="/organ" element={<p>六腑</p>} />
          <Route path="/disease" element={<p>病因</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
