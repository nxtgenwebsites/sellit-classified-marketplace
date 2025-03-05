import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import "./css/add-listing.css";
import Mobiles from "./addListingCards/Mobiles";
import Motors from "./addListingCards/Motors";
import PropertyRent from "./addListingCards/PropertyRent";
import PropertySale from "./addListingCards/PropertySale"
import Electronics from "./addListingCards/electronics";
import Bikes from "./addListingCards/Bikes";
import Job from "./addListingCards/Job";
import Animals from "./addListingCards/Animals";
import Furniture from "./addListingCards/Furniture";
import Fashion from "./addListingCards/Fashion";
import Books_ from "./addListingCards/Books_"
import Kids_ from "./addListingCards/Kids_"
import MainCategory from "./addListingCards/MainCategory";

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
        const selectedCategory = mainCategory.current?.value;
        // Hide all categories and forms
        Object.values(categories).forEach(categoryRef => {
            if (categoryRef.current) {
                categoryRef.current.classList.remove("d-block");
                categoryRef.current.classList.add("d-none");
            }
        });

        Object.values(forms).forEach(headingRef => {
            if (headingRef.current) {
                headingRef.current.classList.add("d-none");
            }
        });

        // Show selected category and form
        if (categories[selectedCategory]?.current) {
            categories[selectedCategory].current.classList.add("d-block");
            categories[selectedCategory].current.classList.remove("d-none");
        }

        if (forms[selectedCategory]?.current) {
            forms[selectedCategory].current.classList.remove("d-none");
        }
    }
    return (
        <div>
            <Container>
                {/* Form Heading */}
                <div className="listing-heading">
                    <h1 className="fw-semibold">Post New Ads</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                {/* Form */}
                <form>
                    <div className="forms-group d-lg-flex gap-2">
                        <div className="form-category">
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
                            <MainCategory />
                        </div>
                        <div ref={categories.mobiles}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <Mobiles />
                        </div>
                        <div ref={categories.motors}
                            className="sub-categories mt-md-0 w-100 d-none" >
                            <Motors />
                        </div>
                        <div ref={categories["property-sale"]}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <PropertySale />
                        </div>
                        <div ref={categories["property-rent"]}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <PropertyRent />
                        </div>
                        <div ref={categories.electronics}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <Electronics />
                        </div>
                        <div ref={categories.bikes}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <Bikes />
                        </div>
                        <div ref={categories["find-business"]}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2">
                                <option value="select-subcategory" selected disabled>
                                    Select Sub-Category
                                </option>
                                <option value="1">Buisness For Sale</option>
                                <option value="2">Food & Restraunt</option>
                                <option value="3">Construction & Heavy Machinery</option>
                                <option value="4">Agriculture</option>
                                <option value="5">Medical & Pharma</option>
                                <option value="6">Trade & Industrial Machinery</option>
                                <option value="7">Other Buisness & Industry</option>
                            </select>
                        </div>
                        <div ref={categories["find-service"]}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2">
                                <option value="select-subcategory" selected disabled>
                                    Select Sub-Category
                                </option>
                                <option value="1">Agriculture & Interior Design</option>
                                <option value="2">Camera Installments</option>
                                <option value="3">Car Rental</option>
                                <option value="4">Car Services</option>
                                <option value="5">Catering & Restraunt</option>
                                <option value="6">Contruction Services</option>
                                <option value="7">Consultancy Services</option>
                                <option value="8">Domestic Help</option>
                                <option value="9">Drivers & Taxi</option>
                                <option value="10">Tuitions & Academics</option>
                                <option value="11">Electronics & Computer Repair</option>
                                <option value="12">Event Services</option>
                                <option value="13">Farm & Fresh Food</option>
                                <option value="14">Health & Beauty</option>
                                <option value="15">Home & Office Repair</option>
                                <option value="16">Insurance Service</option>
                                <option value="17">Movers & Packers</option>
                                <option value="18">Renting Services</option>
                                <option value="19">Tailor Services</option>
                                <option value="20">Travel & Visa</option>
                                <option value="21">Video & Photography</option>
                                <option value="22">Web Development</option>
                                <option value="23">Other Services</option>
                            </select>
                        </div>
                        <div ref={categories["find-job"]}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <Job />
                        </div>
                        <div ref={categories.animals}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <Animals />
                        </div>
                        <div ref={categories.furniture}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <Furniture />
                        </div>
                        <div ref={categories.fashion}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <Fashion />
                        </div>
                        <div ref={categories.books}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <Books_ />
                        </div>
                        <div ref={categories.kids}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <Kids_ />
                        </div>
                    </div>
                    <div className="btn text-center mx-auto w-100">
                        <button type="submit" className="submit-btn">Post</button>
                    </div>
                </form>
            </Container>
            {/* Form end */}
        </div >
    );
}