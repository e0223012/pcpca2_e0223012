import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activities from "./pages/Activities";
import ActivityDetail from "./pages/ActivityDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Activities />} />   {/* ADD THIS */}
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<ActivityDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;