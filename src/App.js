import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JoinPage from "./pages/Join";
import GetInTouch from "./pages/Getintouch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/register" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}

export default App;
