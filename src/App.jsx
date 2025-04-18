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
import Featured_succesful_listing_page from "./components/Add-Listing/Featured_succesful_listing_page";
import Example from "./components/Add-Listing/Example";
import "./App.css";
import PaymentPage from "./Pages/PaymentPage";
import Preview from "./Pages/Preview";
import AddPage from "./Pages/Add";

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
        <Route
          path="/successful"
          element={<Featured_succesful_listing_page />}
        />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/example" element={<Example />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
