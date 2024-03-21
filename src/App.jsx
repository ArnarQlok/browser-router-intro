import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MissingPage from "./MissingPage";
import Layout from "./Layout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
