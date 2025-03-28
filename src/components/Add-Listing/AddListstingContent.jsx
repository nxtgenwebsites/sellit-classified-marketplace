import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import "./css/add-listing.css";
import Mobiles from "./addListingCards/Mobiles";
import Motors from "./addListingCards/Motors";
import PropertyRent from "./addListingCards/PropertyRent";
import PropertySale from "./addListingCards/PropertySale";
import Electronics from "./addListingCards/electronics";
import Bikes from "./addListingCards/Bikes";
import Job from "./addListingCards/Job";
import Animals from "./addListingCards/Animals";
import Furniture from "./addListingCards/Furniture";
import Fashion from "./addListingCards/Fashion";
import Books_ from "./addListingCards/Books_";
import Kids_ from "./addListingCards/Kids_";
import MainCategory from "./addListingCards/MainCategory";
import AnimalDropdown from "./Add-Listing-Dropdowns/AnimalDropdown";
import BikesDropdown from "./Add-Listing-Dropdowns/BikesDropdown";
import BooksDropdown from "./Add-Listing-Dropdowns/BooksDropdown";
import ElectronicsDropdown from "./Add-Listing-Dropdowns/ElectronicsDropdown";
import FashionDropdown from "./Add-Listing-Dropdowns/FashionDropdown";
import FurnitureDropdown from "./Add-Listing-Dropdowns/FurnitureDropdown";
import JobDropdown from "./Add-Listing-Dropdowns/JobDropdown";
import KidsDropdown from "./Add-Listing-Dropdowns/KidsDropdown";
import MobileDropdown from "./Add-Listing-Dropdowns/MobileDropdown";
import MotorsDropdown from "./Add-Listing-Dropdowns/MotorsDropdown";
import PropertyRentDropdown from "./Add-Listing-Dropdowns/PropertyRentDropdown";
import PropertySaleDropdown from "./Add-Listing-Dropdowns/PropertySaleDropdown";
import SecondMain from "./addListingCards/SecondMain";
import ThirdMain from "./addListingCards/ThirdMain";
import { Link } from "react-router-dom";
import BuisnessDropdown from "./Add-Listing-Dropdowns/BuisnessDropdown";
import ServiceDropdown from "./Add-Listing-Dropdowns/ServiceDropdown";

export default function AddListstingContent() {
  // Category references
  const mainCategory = useRef();
  const categories = {
    mobiles: useRef(),
    motors: useRef(),
    "property-sale": useRef(),
    "property-rent": useRef(),
    "find-business": useRef(),
    "find-service": useRef(),
    "find-job": useRef(),
    electronics: useRef(),
    bikes: useRef(),
    animals: useRef(),
    furniture: useRef(),
    fashion: useRef(),
    books: useRef(),
    kids: useRef(),
  };
  // Form section references
  const forms = {
    mobiles: useRef(),
    motors: useRef(),
    "property-sale": useRef(),
    "property-rent": useRef(),
    "find-business": useRef(),
    "find-service": useRef(),
    "find-job": useRef(),
    electronics: useRef(),
    bikes: useRef(),
    animals: useRef(),
    furniture: useRef(),
    fashion: useRef(),
    books: useRef(),
    kids: useRef(),
  };
  function handleCategory() {
    const defaultValueCategory = mainCategory.current?.value;
    // Hide all categories and forms
    Object.values(categories).forEach((categoryRef) => {
      if (categoryRef.current) {
        categoryRef.current.classList.remove("d-block");
        categoryRef.current.classList.add("d-none");
      }
    });

    Object.values(forms).forEach((headingRef) => {
      if (headingRef.current) {
        headingRef.current.classList.add("d-none");
      }
    });

    // Show defaultValue category and form
    if (categories[defaultValueCategory]?.current) {
      categories[defaultValueCategory].current.classList.add("d-block");
      categories[defaultValueCategory].current.classList.remove("d-none");
    }

    if (forms[defaultValueCategory]?.current) {
      forms[defaultValueCategory].current.classList.remove("d-none");
    }
  }
  return (
    <div className="py-3">
      <Container>
        {/* Form Heading */}
        <div className="listing-heading">
          <h1 className="fw-semibold">Post New Ads</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        {/* Form */}
        <form>
          <div className="forms-group p-4 my-3 rounded-2 bg-white shadow">
            <div className="form-category">
              <MainCategory />
              <div className="main-div d-lg-flex gap-2 w-100">
                <div className="main w-100">
                  <select
                    ref={mainCategory}
                    onChange={handleCategory}
                    className="form-select px-3 py-2"
                  >
                    <option value="" disabled selected>
                      Select Category
                    </option>
                    <option value="mobiles">Mobiles</option>
                    <option value="motors">Motors</option>
                    <option value="property-sale">Property for Sale</option>
                    <option value="property-rent">Property for Rent</option>
                    <option value="electronics">
                      Electronics & Home Appliances
                    </option>
                    <option value="bikes">Bikes</option>
                    <option value="find-business">
                      Business, Industrial & Agriculture
                    </option>
                    <option value="find-service">Services</option>
                    <option value="find-job">Jobs</option>
                    <option value="animals">Animals</option>
                    <option value="furniture">Furniture & Home Decor</option>
                    <option value="fashion">Fashion & Beauty</option>
                    <option value="books">Books, Sports & Hobbies</option>
                    <option value="kids">Kids</option>
                  </select>
                </div>
                <div
                  ref={categories.animals}
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                >
                  <AnimalDropdown />
                </div>
                <div
                  ref={categories.bikes}
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                >
                  <BikesDropdown />
                </div>
                <div
                  ref={categories.books}
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                >
                  <BooksDropdown />
                </div>
                <div
                  ref={categories.electronics}
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                >
                  <ElectronicsDropdown />
                </div>
                <div
                  ref={categories.fashion}
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                >
                  <FashionDropdown />
                </div>
                <div
                  ref={categories.furniture}
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                >
                  <FurnitureDropdown />
                </div>
                <div
                  ref={categories["find-job"]}
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                >
                  <JobDropdown />
                </div>
                <div
                  ref={categories.kids}
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                >
                  <KidsDropdown />
                </div>
                <div
                  ref={categories.mobiles}
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                >
                  <MobileDropdown />
                </div>
                <div
                  ref={categories.motors}
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                >
                  <MotorsDropdown />
                </div>
                <div
                  ref={categories["property-sale"]}
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                >
                  <PropertySaleDropdown />
                </div>
                <div
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                  ref={categories["property-rent"]}
                >
                  <PropertyRentDropdown />
                </div>
                <div
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                  ref={categories["property-sale"]}
                >
                  <PropertySaleDropdown />
                </div>
                <div
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                  ref={categories["find-business"]}
                >
                  <BuisnessDropdown />
                </div>
                <div
                  className="sub-categories mt-md-0 w-100 d-none mt-3"
                  ref={categories["find-service"]}
                >
                  <ServiceDropdown />
                </div>
              </div>
            </div>
            <div ref={forms.mobiles} className="w-100 d-none">
              <Mobiles />
            </div>
            <div ref={forms.motors} className="w-100 d-none">
              <Motors />
            </div>
            <div ref={forms["property-sale"]} className="w-100 d-none">
              <PropertySale />
            </div>
            <div ref={forms["property-rent"]} className="w-100 d-none">
              <PropertyRent />
            </div>
            <div ref={forms.electronics} className="w-100 d-none">
              <Electronics />
            </div>
            <div ref={forms.bikes} className="w-100 d-none">
              <Bikes />
            </div>
            {/* <div ref={forms["find-business"]} className="w-100 d-none">
            </div> */}
            {/* <div ref={forms["find-service"]} className="w-100 d-none">
            </div> */}
            <div ref={forms["find-job"]} className="w-100 d-none">
              <Job />
            </div>
            <div ref={forms.animals} className="w-100 d-none">
              <Animals />
            </div>
            <div ref={forms.furniture} className="w-100 d-none">
              <Furniture />
            </div>
            <div ref={forms.fashion} className="w-100 d-none">
              <Fashion />
            </div>
            <div ref={forms.books} className="w-100 d-none">
              <Books_ />
            </div>
            <div ref={forms.kids} className="w-100 d-none">
              <Kids_ />
            </div>
          </div>
          <div className="forms_second-group p-4 my-3 rounded-3 bg-white shadow">
            <SecondMain />
          </div>
          <div className="forms_third-group p-4 my-3 rounded-3 bg-white shadow">
            <ThirdMain />
          </div>
          <div className="text-center mx-auto w-100 mt-3">
            <Link to={"/successful"} className="">
              <button
                type="submit"
                className="rounded-3 nav-btn text-decoration-none secondary-button"
              >
                Add Listings
              </button>
            </Link>
          </div>
        </form>
      </Container>
      {/* Form end */}
    </div>
  );
}
