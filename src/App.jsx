import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
