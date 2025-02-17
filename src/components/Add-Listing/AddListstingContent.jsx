import React, { useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import './css/add-listing.css'

export default function AddListstingContent() {
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
        kids: useRef()
    };

    const headings = {
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
        kids: useRef()
    };

    const mainCategory = useRef();
    const [isEnabled, setIsEnabled] = useState(false);

    function handleCategory() {
        const selectedCategory = mainCategory.current?.value;

        setIsEnabled(selectedCategory === "mobiles");

        Object.values(categories).forEach((categoryRef) => {
            if (categoryRef.current) {
                categoryRef.current.classList.remove("d-block");
                categoryRef.current.classList.add("d-none");
            }
        });
        Object.values(headings).forEach((headingRef) => {
            if (headingRef.current) {
                headingRef.current.classList.add("d-none");
            }
        });
        if (categories[selectedCategory]?.current) {
            categories[selectedCategory].current.classList.add("d-block");
            categories[selectedCategory].current.classList.remove("d-none");
        }

        if (headings[selectedCategory]?.current) {
            headings[selectedCategory].current.classList.remove("d-none");
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
                    <div className="form-group d-md-flex gap-2">
                        <div className="category w-100">
                            <select ref={mainCategory} onChange={handleCategory} className="form-select px-3 py-2">
                                <option value="" disabled selected>Select Category</option>
                                <option value="mobiles">Mobiles</option>
                                <option value="motors">Motors</option>
                                <option value="property-sale">Property for Sale</option>
                                <option value="property-rent">Property for Rent</option>
                                <option value="electronics">Electronics & Home Appliances</option>
                                <option value="bikes">Bikes</option>
                                <option value="find-business">Business, Industrial & Agriculture</option>
                                <option value="find-service">Services</option>
                                <option value="find-job">Jobs</option>
                                <option value="animals">Animals</option>
                                <option value="furniture">Furniture & Home Decor</option>
                                <option value="fashion">Fashion & Beauty</option>
                                <option value="books">Books, Sports & Hobbies</option>
                                <option value="kids">Kids</option>
                            </select>
                        </div>
                        <div ref={categories.mobiles} className="sub-category mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2" disabled={!isEnabled}>
                                <option value="" disabled selected>Select Sub-Category</option>
                                <option value="tablets">Tablets</option>
                                <option value="accessories">Accessories</option>
                                <option value="phones">Mobile Phones</option>
                                <option value="watches">Smart Watches</option>
                            </select>
                            <h1 ref={headings.mobiles} className="d-none">Mobiles Category</h1>
                        </div>
                        <div ref={categories.motors} className="sub-category mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2">
                                <option value="" disabled selected>Select Sub-Category</option>
                                <option value="cars">Cars</option>
                                <option value="installments">Cars on Installments</option>
                                <option value="accessories">Car Accessories</option>
                                <option value="spare-parts">Spare Parts</option>
                            </select>
                            <h1 ref={headings.motors} className="d-none">Motors Category</h1>
                        </div>
                        <div ref={categories["property-sale"]} className="sub-category mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2">
                                <option value="" disabled selected>Select Sub-Category</option>
                                <option value="lands">Lands & Plots</option>
                                <option value="houses">Houses</option>
                                <option value="apartments">Apartments</option>
                            </select>
                            <h1 ref={headings["property-sale"]} className="d-none">Property for Sale</h1>
                        </div>
                        <div ref={categories["property-rent"]} className="sub-category mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Houses</option>
                                <option value="2">Apartements & Flats</option>
                                <option value="3">Portions & Floors</option>
                                <option value="4">Shops - Offices - Commercial Space</option>
                                <option value="5">Rooms</option>
                                <option value="6">Roomates & Paying Guests</option>
                                <option value="7">Vacation Rentals - Guest Houses</option>
                                <option value="8">Land & Plots</option>
                            </select>
                            <h1 ref={headings["property-rent"]} className="d-none">Property for Rent</h1>
                        </div>
                        <div ref={categories.electronics} className="sub-category mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Computer & Accessories</option>
                                <option value="2">Games & Entertainment</option>
                                <option value="3">Cameras & Accessories</option>
                                <option value="4">Television & Accessories</option>
                                <option value="5">Video-Audios</option>
                                <option value="6">AC & Coolers</option>
                                <option value="7">Fans</option>
                                <option value="8">Heaters & Geysers</option>
                                <option value="9">Air Purifiers & Humidifiers</option>
                                <option value="10">Washing Machines & Dryers</option>
                                <option value="11">Irons & Steamers</option>
                                <option value="12">Generators, UPS & Power Solutions</option>
                                <option value="13">Other Applications</option>
                                <option value="14">Refrigerators & Freezers</option>
                                <option value="15">Water Dispensers</option>
                                <option value="16">Microwaves & Ovens</option>
                                <option value="17">Kitchen Applications</option>
                            </select>
                            <h1 ref={headings.electronics} className="d-none">Electronics & Home Appliances</h1>
                        </div>
                        <div ref={categories.bikes} className="sub-category mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Motorcycles</option>
                                <option value="2">Spare Parts</option>
                                <option value="3">Bike Accessories</option>
                                <option value="4">Bicycles</option>
                                <option value="5">ATV & Quads</option>
                                <option value="6">Scooters</option>
                            </select>
                            <h1 ref={headings.bikes} className="d-none">Bikes</h1>
                        </div>
                        <div ref={categories["find-business"]} className="sub-category mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Buisness For Sale</option>
                                <option value="2">Food & Restraunt</option>
                                <option value="3">Construction & Heavy Machinery</option>
                                <option value="4">Agriculture</option>
                                <option value="5">Medical & Pharma</option>
                                <option value="6">Trade & Industrial Machinery</option>
                                <option value="7">Other Buisness & Industry</option>
                            </select>
                            <h1 ref={headings["find-business"]} className="d-none">Business, Industrial & Agriculture</h1>
                        </div>
                        <div ref={categories["find-service"]} className="sub-category mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
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
                            <h1 ref={headings["find-service"]} className="d-none">Services</h1>
                        </div>
                        <div ref={categories["find-job"]} className="sub-category mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Accounting & Finance</option>
                                <option value="2">Advertising & PR</option>
                                <option value="3">Architecture & Interior Design</option>
                                <option value="4">Clerical & Administration</option>
                                <option value="5">Content Writing</option>
                                <option value="6">Customer Service</option>
                                <option value="7">Delivery Riders</option>
                                <option value="8">Domestic Staff</option>
                                <option value="9">Education</option>
                                <option value="10">Engineering</option>
                                <option value="11">Graphic Design</option>
                                <option value="12">Hotels & Tourism</option>
                                <option value="13">Human Resources</option>
                                <option value="14">Internships</option>
                                <option value="15">IT & Networking</option>
                                <option value="16">Manufacturing</option>
                                <option value="17">Marketing</option>
                                <option value="18">Medical</option>
                                <option value="19">Online</option>
                                <option value="20">Other Jobs</option>
                                <option value="21">Part Time</option>
                                <option value="22">Real Estate</option>
                                <option value="23">Restraunt & Hospitality</option>
                                <option value="24">Sales</option>
                                <option value="25">Security</option>
                            </select>
                            <h1 ref={headings["find-job"]} className="d-none">Jobs</h1>
                        </div>
                        <div ref={categories.animals} className="sub-category mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Cats</option>
                                <option value="2">Dogs</option>
                                <option value="3">Horses</option>
                                <option value="4">Rabbits</option>
                                <option value="5">Other Animals</option>
                                <option value="6">Hens</option>
                                <option value="7">Parrots</option>
                                <option value="8">Pigeons</option>
                                <option value="9">Finches</option>
                                <option value="10">Doves</option>
                                <option value="11">Peacocks</option>
                                <option value="12">Ducks</option>
                                <option value="13">Other Birds</option>
                                <option value="14">Fertile Eggs</option>
                                <option value="15">Fish</option>
                                <option value="16">Livestock</option>
                                <option value="17">Pet Food & Accessories</option>
                            </select>
                            <h1 ref={headings.animals} className="d-none">Animals</h1>
                        </div>
                        <div ref={categories.furniture} className="sub-category mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Sofa & Chairs</option>
                                <option value="2">Beds & Wardrobes</option>
                                <option value="3">Tables & Dining</option>
                                <option value="4">Bathroom Accessories</option>
                                <option value="5">Garden & Outdoor</option>
                                <option value="6">Painting & Mirrors</option>
                                <option value="7">Rugs & Carpets</option>
                                <option value="8">Curtains & Blinds</option>
                                <option value="9">Office Furniture</option>
                                <option value="10">Home Decoration</option>
                                <option value="11">Other Household Items</option>
                            </select>
                            <h1 ref={headings.furniture} className="d-none">Furniture & Home Decor</h1>
                        </div>
                        <div ref={categories.fashion} className="sub-category mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                            <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                            <option value="1">Fashion Accessories</option>
                            <option value="2">Clothes</option>
                            <option value="3">Footwear</option>
                            <option value="4">Bags</option>
                            <option value="5">Jewellery</option>
                            <option value="6">Makeup</option>
                            <option value="7">Skin & Hair</option>
                            <option value="8">Watches</option>
                            <option value="9">Fragrance</option>
                            <option value="10">Wedding</option>
                            <option value="11">Other Fashion</option>
                        </select>
                            <h1 ref={headings.fashion} className="d-none">Fashion & Beauty</h1>
                        </div>
                        <div ref={categories.books} className="sub-category mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Books & Magazines</option>
                                <option value="2">Musical Instruments</option>
                                <option value="3">Sports Equipment</option>
                                <option value="4">Gym & Fitness</option>
                                <option value="5">Other Hobbies</option>
                            </select>
                            <h1 ref={headings.books} className="d-none">Books</h1>
                        </div>
                        <div ref={categories.kids} className="sub-category mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Kids Furniture</option>
                                <option value="2">Kids Vehicles</option>
                                <option value="3">Toys</option>
                                <option value="4">Baby Gear</option>
                                <option value="5">Bath & Diapers</option>
                                <option value="6">Swings & Sildes</option>
                                <option value="7">Kids Clothing</option>
                                <option value="8">Kids Accessories</option>
                            </select>
                            <h1 ref={headings.kids} className="d-none">Kids</h1>
                        </div>
                    </div>
                </form>
            </Container>
            {/* Form end */}
        </div >
    )
}