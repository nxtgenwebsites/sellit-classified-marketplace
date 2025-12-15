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
import TeamManagementPage from "./Pages/admin-dashbord/manage-team/ManageTeam";
import AdManagementPage from "./Pages/adds-manage/addsManageTeam";
import MobileAdsView from "./Pages/ads-view/MobileAdsView";
import CarsMotorsView from "./Pages/ads-view/CarsMotorsView";
import PropertyAdsView from "./Pages/ads-view/PropertyAdsView";
import PropertyRentAdsView from "./Pages/ads-view/propertyRentView";
import KidsAdsView from "./Pages/ads-view/KidsAdsView";
import AnimalAdsView from "./Pages/ads-view/AnimalAdsView";
import BikesAdsView from "./Pages/ads-view/BikesAdsView";
import ElectronicsAdsView from "./Pages/ads-view/ElectronicsAdsView";
import FashionAdsView from "./Pages/ads-view/FashionAdsView";
import BooksSportsAdsView from "./Pages/ads-view/BooksSportsAdsView";
import FurnitureAdsView from "./Pages/ads-view/FurnitureAdsView";
import ManagePayments from "./Pages/admin-dashbord/manage-payments/ManagePayments";


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
          <Route path="/search" element={<MobilesCategory />} />
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
          <Route path="/mobile_ads/:id" element={<MobileAdsView />} />
          <Route path="/motors_ads/:id" element={<CarsMotorsView />} />
          <Route path="/property_ads/:id" element={<PropertyAdsView />} />
          <Route path="/kids_ads/:id" element={<KidsAdsView />} />
          <Route path="/electronics_ads/:id" element={<ElectronicsAdsView />} />
          <Route path="/animal_ads/:id" element={<AnimalAdsView />} />
          <Route path="/bike_ads/:id" element={<BikesAdsView />} />
          <Route path="/fashion_ads/:id" element={<FashionAdsView />} />
          <Route path="/furniture_ads/:id" element={<FurnitureAdsView />} />
          <Route
            path="/books_sports_ads/:id"
            element={<BooksSportsAdsView />}
          />
          <Route
            path="/property_rent_ads/:id"
            element={<PropertyRentAdsView />}
          />
          <Route path="/example" element={<Example />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/verify-otp" element={<VerifyOTPPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/verify-user" element={<VerifyUser />} />
          <Route path="/new-password" element={<NewPasswordPage />} />
        </Route>

        {/* User Dashboard Layout */}
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
          <Route
            path="/dashboard/manage-team"
            element={<TeamManagementPage />}
          />
          <Route
            path="/dashboard/manage-payments"
            element={<ManagePayments />}
          />
        </Route>
        <Route path="/manage-ads" element={<AdManagementPage />} />
      </Routes>
    </>
  );
}

export default App;
