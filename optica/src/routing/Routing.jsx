import {
    Routes,
    Route,
    BrowserRouter as Router,
  
  } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Footer from "../Components/Generales/Footer";
import Navbar from "../Components/Generales/Navbar";
import ServicesPage from "../Pages/ServicesPage";
import ProductsPage from "../Pages/ProductsPage";
import ContactPage from "../Pages/ContactPage";
import AbourtPage from "../Pages/AbourtPage";

const Routing = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-nosotros" element={<AbourtPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
        </Routes>
   <Footer/>
    </Router>
  )
}

export default Routing