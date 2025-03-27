import React, { useRef, lazy, Suspense } from "react";
import Container from "react-bootstrap/Container";
import "./css/add-listing.css";
import { MainCategory, SecondMain, ThirdMain } from "./addListingCards";
import { Link } from "react-router-dom";
import {
  AnimalDropdown,
  BikesDropdown,
  BooksDropdown,
  ElectronicsDropdown,
  FashionDropdown,
  FurnitureDropdown,
  JobDropdown,
  KidsDropdown,
  MobileDropdown,
  MotorsDropdown,
  PropertyRentDropdown,
  PropertySaleDropdown,
  BuisnessDropdown,
  ServiceDropdown,
} from "./Add-Listing-Dropdowns";

const Mobiles = lazy(() => import("./addListingCards/Mobiles"));
const Motors = lazy(() => import("./addListingCards/Motors"));
const PropertyRent = lazy(() => import("./addListingCards/PropertyRent"));
const PropertySale = lazy(() => import("./addListingCards/PropertySale"));
const Electronics = lazy(() => import("./addListingCards/electronics"));
const Bikes = lazy(() => import("./addListingCards/Bikes"));
const Job = lazy(() => import("./addListingCards/Job"));
const Animals = lazy(() => import("./addListingCards/Animals"));
const Furniture = lazy(() => import("./addListingCards/Furniture"));
const Fashion = lazy(() => import("./addListingCards/Fashion"));
const Books_ = lazy(() => import("./addListingCards/Books_"));
const Kids_ = lazy(() => import("./addListingCards/Kids_"));

export default function AddListingContent() {
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

  const forms = { ...categories };

  function handleCategory() {
    const selectedCategory = mainCategory.current?.value;
    Object.values(categories).forEach((categoryRef) => {
      if (categoryRef.current) {
        categoryRef.current.classList.remove("d-block");
        categoryRef.current.classList.add("d-none");
      }
    });

    Object.values(forms).forEach((formRef) => {
      if (formRef.current) {
        formRef.current.classList.add("d-none");
      }
    });

    if (categories[selectedCategory]?.current) {
      categories[selectedCategory].current.classList.add("d-block");
      categories[selectedCategory].current.classList.remove("d-none");
    }

    if (forms[selectedCategory]?.current) {
      forms[selectedCategory].current.classList.remove("d-none");
    }
  }

  return (
    <div className="py-3">
      <Container>
        <div className="listing-heading">
          <h1 className="fw-semibold">Post New Ads</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <form>
          <div className="forms-group p-4 my-3 rounded-2">
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
                    {Object.keys(categories).map((key) => (
                      <option key={key} value={key}>
                        {key.replace(/-/g, " ").toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                {Object.entries(categories).map(([key, ref]) => (
                  <div
                    key={key}
                    ref={ref}
                    className="sub-categories mt-md-0 w-100 d-none mt-3"
                  >
                    {key === "animals" && <AnimalDropdown />}
                    {key === "bikes" && <BikesDropdown />}
                    {key === "books" && <BooksDropdown />}
                    {key === "electronics" && <ElectronicsDropdown />}
                    {key === "fashion" && <FashionDropdown />}
                    {key === "furniture" && <FurnitureDropdown />}
                    {key === "find-job" && <JobDropdown />}
                    {key === "kids" && <KidsDropdown />}
                    {key === "mobiles" && <MobileDropdown />}
                    {key === "motors" && <MotorsDropdown />}
                    {key === "property-sale" && <PropertySaleDropdown />}
                    {key === "property-rent" && <PropertyRentDropdown />}
                    {key === "find-business" && <BuisnessDropdown />}
                    {key === "find-service" && <ServiceDropdown />}
                  </div>
                ))}
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              {Object.entries(forms).map(([key, ref]) => (
                <div key={key} ref={ref} className="w-100 d-none">
                  {key === "mobiles" && <Mobiles />}
                  {key === "motors" && <Motors />}
                  {key === "property-sale" && <PropertySale />}
                  {key === "property-rent" && <PropertyRent />}
                  {key === "electronics" && <Electronics />}
                  {key === "bikes" && <Bikes />}
                  {key === "find-job" && <Job />}
                  {key === "animals" && <Animals />}
                  {key === "furniture" && <Furniture />}
                  {key === "fashion" && <Fashion />}
                  {key === "books" && <Books_ />}
                  {key === "kids" && <Kids_ />}
                </div>
              ))}
            </Suspense>
          </div>
          <div className="forms_second-group p-4 my-3 rounded-2 bg-white">
            <SecondMain />
          </div>
          <div className="forms_third-group p-4 my-3 rounded-2 bg-white">
            <ThirdMain />
          </div>
          <div className="text-center mx-auto w-100 mt-3">
            <Link to={"/successful"}>
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
    </div>
  );
}
