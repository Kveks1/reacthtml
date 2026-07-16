import BodoBokseklubb from "./pages/BodoBokseklubb";
import Aktuelt from "./pages/Aktuelt";
import Kontakt from "./pages/Kontakt";
import Priser from "./pages/Priser";
import Trening from "./pages/Trening";
import EpostDemo from "./pages/EpostDemo";

import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<BodoBokseklubb />} />
            <Route path="/aktuelt" element={<Aktuelt />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/priser" element={<Priser />} />
            <Route path="/trening" element={<Trening />} />
            <Route path="/epostdemo" element={<EpostDemo />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
