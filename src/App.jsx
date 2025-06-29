import { Routes, Route } from "react-router-dom";

// universalPages
import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";
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
import PaymentPage from "./Pages/PaymentPage";
import Preview from "./Pages/Preview";
import AddPage from "./Pages/Add";
import Categorydropdown from "./components/Dropdown/Categorydropdown";
// Dashboard Pages
import Sidebar from "./components/user-dashboard/sidebar/Sidebar";
import TopNavbar from "./Pages/user-dashboard/top-navbar/TopNavbar";
import AdsManagement from "./Pages/user-dashboard/manage-ads/AdsManagement";
// Layouts
import { Outlet } from "react-router-dom";
import "./App.css";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import Overview from "./Pages/user-dashboard/overview/Overview";
import UserPayments from "./Pages/user-dashboard/payments/UserPayments";
import Favorites from "./Pages/user-dashboard/favorites/Favorites";
import UserProfileSettings from "./Pages/user-dashboard/userprofile/UserProfileSettings";
import MessagesPage from "./Pages/user-dashboard/messages/MessagesPage";
import VerifyOTPPage from "./Pages/verify-otp";
import ForgotPasswordPage from "./Pages/forgot-password";
import NewPasswordPage from "./Pages/new-password";
import VerifyUser from "./Pages/Verify-User";
import OverviewPage from "./Pages/admin-dashbord/overview/Overview";
import SidebarAdmin from "./Pages/admin-dashbord/sidebar/Sidebar";
import ManageUsersPage from "./Pages/admin-dashbord/manage-users/ManageUsers";


// Layout for general user pages (with Header + Footer)
const UserLayout = () => (
  <>
    <Header />
<Categorydropdown />
    <Outlet />
    <Footer />
  </>
);

// Layout for user dashboard (with Sidebar + TopNavbar)
const DashboardLayout = () => (
  <div className="d-flex">
    <Sidebar />
    <div className="w-100">
      <TopNavbar />
      <Outlet />
    </div>
  </div>

);
// Layout for user dashboard (with Sidebar + TopNavbar)
const AdminLayout = () => (
  <div className="d-flex">
    <SidebarAdmin />
    <div className="w-100">
      <TopNavbar />
      <Outlet />
    </div>
  </div>
);




function App() {
  return (
    <>
      <Routes>
        {/* General User Layout */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/mobiles-category" element={<MobilesCategory />} />
          <Route
            path="/motorcycle-category"
            element={<MotorcyclesCategory />}
          />
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
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/verify-otp" element={<VerifyOTPPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/verify-user" element={<VerifyUser />} />
          <Route path="/new-password" element={<NewPasswordPage />} />
        </Route>

        {/* Admin Dashboard Layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard/ads-management" element={<AdsManagement />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/payments" element={<UserPayments />} />
          <Route
            path="/dashboard/profile-setting"
            element={<UserProfileSettings />}
          />
          <Route path="/dashboard/messages" element={<MessagesPage />} />
          <Route path="/dashboard/favorites" element={<Favorites />} />
          <Route path="/dashboard/add-listing" element={<AddListingPage />} />
        </Route>

        {/* Admin Dashboard Layout */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/overview" element={<OverviewPage />} />
          <Route path="/dashboard/manage-users" element={<ManageUsersPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
