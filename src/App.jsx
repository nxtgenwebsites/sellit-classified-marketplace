import { Route, Routes } from "react-router-dom";

// universalPages
import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";
import Categorydropdown from "./components/Dropdown/Categorydropdown";
// homePages
import HomePage from "./Pages/HomePage";
import MobilesCategory from "./Pages/MobilesCategory";
import CarsCategory from "./Pages/CarsCategory";
import BuisnessCategory from "./Pages/BuisnessCategory";
import FindJobCategory from "./Pages/FindJobCategory";
import MotorcyclesCategory from "./Pages/MotorcyclesCategory";
import PopertyForSaleCategory from "./Pages/PopertyForSaleCategory";
import ServiceProvidersCategory from "./Pages/ServiceProvidersCategory";
// footerPages

import FooterGrowPage from "./Pages/GrowPage";
import FooterAdvertisePage from "./Pages/AdvertisePage";
// Add Listing Pages
import AddListingPage from "./Pages/AddListingPage";
import Succesful_listing_page from "./components/Add-Listing/Succesful_listing_page"
import Example from "./components/Add-Listing/Example"
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Categorydropdown />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mobiles-category" element={<MobilesCategory />} />
        <Route path="/motorcycle-category" element={<MotorcyclesCategory />} />
        <Route path="/cars-category" element={<CarsCategory />} />
        <Route path="/buisness-category" element={<BuisnessCategory />} />
        <Route path="/job-category" element={<FindJobCategory />} />
        <Route path="/property-rent" element={<PopertyForSaleCategory />} />
        <Route path="/property-sale" element={<PopertyForSaleCategory />} />
        <Route
          path="/service-category"
          element={<ServiceProvidersCategory />}
        />
        <Route path="/footer-grow-page" element={<FooterGrowPage />} />
        <Route
          path="/footer-advertise-page"
          element={<FooterAdvertisePage />}
        />
        <Route path="/add-listing" element={<AddListingPage />} />
        <Route path="/successful" element={<Succesful_listing_page />} />
        <Route path="/example" element={<Example />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
