import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Pages/index.js";
import Contact from "./Pages/contact.js";
import Footer from "./Section/footer.js";
import ScrollToTop from "./Component/scrolltotop";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
