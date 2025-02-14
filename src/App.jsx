import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import MobilesCategory from './Pages/MobilesCategory'
import CarsCategory from './Pages/CarsCategory'
import BuisnessCategory from './Pages/BuisnessCategory'
import FindJobCategory from './Pages/FindJobCategory'
import MotorcyclesCategory from "./Pages/MotorcyclesCategory";
import PopertyForSaleCategory from './Pages/PopertyForSaleCategory'
import ServiceProvidersCategory from './Pages/ServiceProvidersCategory'
import Categorydropdown from "./components/Categorydropdown";
import FooterGrowPage from './Pages/FooterGrowPage'
import FooterAdvertisePage from './Pages/FooterAdvertisePage'
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
      </Routes>
      <Footer />
    </>
  )
}

export default App
