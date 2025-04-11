import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import AboutUs from "./pages/AboutUs";
import NealFungames from "./pages/NealFungames";

import Activities from "./pages/Activities";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/neal-fun-games" element={<NealFungames />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
