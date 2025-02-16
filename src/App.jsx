import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import MobilesCategory from './Pages/MobilesCategory'
import CarsCategory from './Pages/CarsCategory'
import BuisnessCategory from './Pages/BuisnessCategory'
import FindJobCategory from './Pages/FindJobCategory'
import MotorcyclesCategory from "./Pages/MotorcyclesCategory";
import PopertyForSaleCategory from './Pages/PopertyForSaleCategory'
import ServiceProvidersCategory from './Pages/ServiceProvidersCategory';
import Categorydropdown from "./components/Dropdown/Categorydropdown";
import FooterGrowPage from './Pages/GrowPage'
import FooterAdvertisePage from './Pages/AdvertisePage'
import AddListingPage from "./Pages/AddListingPage";
import './App.css'
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
        <Route path="/service-category" element={<ServiceProvidersCategory />} />
        <Route path="/footer-grow-page" element={<FooterGrowPage />} />
        <Route path="/footer-advertise-page" element={<FooterAdvertisePage />} />
        <Route path="/add-listing" element={<AddListingPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
