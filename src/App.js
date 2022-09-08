// Pages
import AddInfo from "./pages/addInfo";
import ShowChart from "./pages/showChart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/charts" element={<ShowChart />} />
          <Route path="/" exact element={<AddInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
