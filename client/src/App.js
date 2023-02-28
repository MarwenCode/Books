import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Books from "./pages/Books";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/"  element={<Books />}  />
          <Route  path="/add"  element={<Add />}  />
          <Route  path="/update"  element={<Update  />}  />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
