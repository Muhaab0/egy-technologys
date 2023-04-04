import React from "react"
import Home from "./pages/home";
import { Routes, Route } from 'react-router-dom';
import Services from "./pages/services";
import DataSecurity from "./pages/dataSecurity";
import Solutions from "./pages/Solutions";
import WhywePage from "./pages/whywe";
import AboutPage from "./pages/aboutPage";
import Contact from "./pages/contact";
import OurProduct from "./pages/ourProduct";
import ProductDetails from "./pages/productDetails";


function App() {
  return (
    <div className="App">
       <Routes>
     <Route path="/"   element={<Home />} />
     <Route path="/service/:id" element={<Services />} />
     <Route path="/dataSecurity" element={<DataSecurity />} />
     <Route path="/solutions" element={<Solutions />} />
     <Route path="/why-we" element={<WhywePage />} />
     <Route path="/about" element={<AboutPage />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/product" element={<OurProduct />} />
     <Route path="/product/:id" element={<ProductDetails />} />
       </Routes>
    </div>
  );
}

export default App;
