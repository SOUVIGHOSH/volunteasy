import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JoinPage from "./pages/Join";
import GetInTouch from "./pages/Getintouch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/volunteasy/" element={<Homepage />} />
        <Route path="/volunteasy/join" element={<JoinPage />} />
        <Route path="/volunteasy/register" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}

export default App;
