import React, { useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import './css/add-listing.css'

export default function AddListstingContent() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [checked1, setChecked1] = useState({ checkOne: false, checkTwo: false });
    const [checked2, setChecked2] = useState({ checkThree: false, checkFour: false });
    const [checked3, setChecked3] = useState({ checkFive: false, checkSix: false });
    const [checked4, setChecked4] = useState({ checkSeven: false, checkEight: false });
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
        kids: useRef()
    };
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
        kids: useRef()
    };

    function handleCategory() {
        const selectedCategory = mainCategory.current?.value;

        setIsEnabled(selectedCategory === "mobiles");

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
        if (categories[selectedCategory]?.current) {
            categories[selectedCategory].current.classList.add("d-block");
            categories[selectedCategory].current.classList.remove("d-none");
        }

        if (forms[selectedCategory]?.current) {
            forms[selectedCategory].current.classList.remove("d-none");
        }
    }

    const handleChange1 = (name) => {
        setChecked1({
            checkOne: name === "checkOne" ? true : false,
            checkTwo: name === "checkTwo" ? true : false,
        });
    };

    const handleChange2 = (name) => {
        setChecked2({
            checkThree: name === "checkThree" ? true : false,
            checkFour: name === "checkFour" ? true : false,
        });
    };

    const handleChange3 = (name) => {
        setChecked1({
            checkFive: name === "checkFive" ? true : false,
            checkSix: name === "checkSix" ? true : false,
        });
    };

    const handleChange4 = (name) => {
        setChecked2({
            checkSeven: name === "checkSeven" ? true : false,
            checkEight: name === "checkEight" ? true : false,
        });
    };

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
                    <div className="forms-group d-md-flex gap-2">
                        <div className="form-category w-100">
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
                            <h1>a</h1>
                        </div>
                        <div ref={categories.mobiles} className="sub-categories mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2" disabled={!isEnabled}>
                                <option value="" disabled selected>Select Sub-Category</option>
                                <option value="tablets">Tablets</option>
                                <option value="accessories">Accessories</option>
                                <option value="phones">Mobile Phones</option>
                                <option value="watches">Smart Watches</option>
                            </select>
                            <div ref={forms.mobiles} className="form-second-group w-100 p-3 my-3 rounded-2 d-none">
                                <div className="first-form-dropdown d-flex align-items-center justify-content-between w-100">
                                    <label htmlFor="brand" className='w-75'>Brand</label>
                                    <select name="brand" id="brand" className='py-2 px-3 form-select w-100'>
                                        <option value="" selected disabled>Select Brands</option>
                                        <option value="" disabled className='disabled'>Popular Brands</option>
                                        <option value="1">Apple</option>
                                        <option value="2">Samsung</option>
                                        <option value="3">Other Tablets</option>
                                        <option value="4">Lenovo</option>
                                        <option value="5">Amazon</option>
                                        <option value="" disabled className='disabled'>Others</option>
                                        <option value="6">Apple</option>
                                        <option value="7">Dany Tabs</option>
                                        <option value="8">Huawei</option>
                                        <option value="9">Lenovo</option>
                                        <option value="10">Amazon</option>
                                        <option value="11">Asus</option>
                                        <option value="12">Dell</option>
                                        <option value="13">Alcatel</option>
                                        <option value="14">Huion</option>
                                        <option value="15">Wacom</option>
                                        <option value="16">Acer</option>
                                        <option value="17">Honor</option>
                                        <option value="18">RCA</option>
                                        <option value="19">Mione</option>
                                        <option value="20">Q Tabs</option>
                                        <option value="21">Samsung</option>
                                        <option value="22">Other Tablets</option>
                                    </select>
                                </div>
                                <div className="second-form-dropdown d-flex align-items-center justify-content-between w-100 my-3">
                                    <label htmlFor="brand" className='w-75'>Condition</label>
                                    <select name="brand" id="brand" className='py-2 px-3 form-select w-100'>
                                        <option value="" selected disabled>Select Condition</option>
                                        <option value="1">New</option>
                                        <option value="2">Open Box</option>
                                        <option value="3">Used</option>
                                        <option value="4">Refurbished</option>
                                        <option value="5">For Parts</option>
                                        <option value="6">Not Working</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div ref={categories.motors} className="sub-categories mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2">
                                <option value="" disabled selected>Select Sub-Category</option>
                                <option value="cars">Cars</option>
                                <option value="installments">Cars on Installments</option>
                                <option value="accessories">Car Accessories</option>
                                <option value="spare-parts">Spare Parts</option>
                            </select>
                            <div ref={forms.motors} className="form-second-group w-100 p-3 my-3 rounded-2">
                                <div className="first-form-dropdown d-flex align-items-center justify-content-between w-100">
                                    <label htmlFor="make" className='w-75'>Make</label>
                                    <select name="make" id="make" className='py-2 px-3 form-select w-100'>
                                        <option value="" selected disabled>Select make</option>
                                        <option value="" disabled className='disabled'>Popular Make</option>
                                        <option value="1">Suzuki</option>
                                        <option value="2">Toyota</option>
                                        <option value="3">Honda</option>
                                        <option value="4">Daihatsu</option>
                                        <option value="5">Nissan</option>
                                        <option value="" disabled className='disabled'>Others</option>
                                        <option value="6">Adam</option>
                                        <option value="7">Audi</option>
                                        <option value="8">BAIC</option>
                                        <option value="9">Bentely</option>
                                        <option value="10">BMW</option>
                                        <option value="11">Buick</option>
                                        <option value="12">Cadiac</option>
                                        <option value="13">Changan</option>
                                        <option value="14">Chery</option>
                                        <option value="15">Chevrolet</option>
                                        <option value="16">Chrysler</option>
                                        <option value="17">Classic & Antiques</option>
                                        <option value="18">Daewoo</option>
                                        <option value="19">Daihatsu</option>
                                        <option value="20">Datsun</option>
                                        <option value="21">Dodge</option>
                                        <option value="22">Dongfeng</option>
                                        <option value="23">FAW</option>
                                        <option value="24">Flat</option>
                                        <option value="25">Ford</option>
                                        <option value="26">GMC</option>
                                        <option value="27">Haval</option>
                                        <option value="28">Hino</option>
                                        <option value="29">Honda</option>
                                        <option value="30">Honri</option>
                                        <option value="31">Hummer</option>
                                        <option value="32">Hyundai</option>
                                        <option value="33">Isuzu</option>
                                        <option value="34">JAC</option>
                                        <option value="35">Jaguar</option>
                                        <option value="36">Jeep</option>
                                        <option value="37">JW Forland</option>
                                        <option value="38">Land Rover</option>
                                        <option value="39">Lexus</option>
                                        <option value="40">Mazda</option>
                                        <option value="41">Mercedes</option>
                                        <option value="42">MG</option>
                                        <option value="43">Mitsubishi</option>
                                        <option value="44">Mushtaq</option>
                                        <option value="45">Nissan</option>
                                        <option value="46">Other Brands</option>
                                        <option value="47">Peugeot</option>
                                        <option value="48">Porsche</option>
                                        <option value="49">Prince</option>
                                        <option value="50">Proton</option>
                                        <option value="51">Range Rover</option>
                                        <option value="52">Renault</option>
                                        <option value="53">Seres</option>
                                        <option value="54">Ssangyong</option>
                                        <option value="55">Subaru</option>
                                        <option value="56">Suzuki</option>
                                        <option value="57">Tesla</option>
                                        <option value="58">Toyota</option>
                                        <option value="59">United</option>
                                        <option value="60">Volkswagen</option>
                                        <option value="61">ZOTYE</option>
                                    </select>
                                </div>
                                <div className="second-form-dropdown d-flex align-items-center justify-content-between w-100 my-3">
                                    <label htmlFor="brand" className='w-75'>Condition</label>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input type="checkbox" name="checkOne" className='checkOne' checked={checked1.checkOne} onChange={() => handleChange1("checkOne")} />
                                        <input type="checkbox" name="checkTwo" className='checkTwo' checked={checked1.checkTwo} onChange={() => handleChange1("checkTwo")} />
                                    </div>
                                </div>
                                <div className="third-form-dropdown d-flex align-items-center justify-content-between w-100 my-3">
                                    <label htmlFor="year">Year</label>
                                    <input type="number" name="year" id="year" className='year-input px-3 py-2 rounded-2' placeholder='Enter Year' />
                                </div>
                                <div className="fourth-form-dropdown d-flex align-items-center justify-content-between w-100 my-3">
                                    <label htmlFor="Fuel">Fuel</label>
                                    <select name="Fuel" id="Fuel" className="form-select px-3 py-2">
                                        <option value="" selected disabled>Select Fuel</option>
                                        <option value="1">Patrol</option>
                                        <option value="2">Diesel</option>
                                        <option value="3">LPG</option>
                                        <option value="4">CNG</option>
                                        <option value="5">Hybrid</option>
                                        <option value="6">Electric</option>
                                    </select>
                                </div>
                                <div className="fifth-form-dropdown d-flex align-items-center justify-content-between w-100 my-3">
                                    <label htmlFor="Trasmission" className='w-75'>Trasmission</label>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input type="checkbox" name="checkThree" className='checkThree' checked={checked2.checkThree} onChange={() => handleChange2("checkThree")} />
                                        <input type="checkbox" name="checkFour" className='checkFour' checked={checked2.checkFour} onChange={() => handleChange2("checkFour")} />
                                    </div>
                                </div>
                                <div className="sixth-form-dropdown d-flex align-items-center justify-content-between w-100 my-3">
                                    <label htmlFor="Body Type" className='w-75'>Body Type</label>
                                    <select name="Body Type" id="Body Type" className='form-select px-3 py-2'>
                                        <option value="" selected disabled>Select Body Type</option>
                                        <option value="" disabled className='disabled'>Popular Body Type</option>
                                        <option value="1">Sedan</option>
                                        <option value="2">Hatchback</option>
                                        <option value="3">Other</option>
                                        <option value="4">Small city car</option>
                                        <option value="5">SUV</option>
                                        <option value="" disabled className='disabled'>Others</option>
                                        <option value="6">Convertible</option>
                                        <option value="6">Estate</option>
                                        <option value="6">Hatchback</option>
                                        <option value="6">MPV</option>
                                        <option value="6">Other</option>
                                        <option value="6">Pickup</option>
                                        <option value="6">Sedan</option>
                                        <option value="6">Small city car</option>
                                        <option value="6">Sports / Coupe</option>
                                        <option value="6">SUV</option>
                                        <option value="6">Van / Bus</option>
                                    </select>
                                </div>
                                <div className="seventh-form-dropdown d-flex align-items-center justify-content-between w-100 my-3">
                                    <label htmlFor="Color">Color</label>
                                    <input type="color" name="Color" id="Color" className='w-100' />
                                </div>
                                <div className="eighth-form-dropdown d-flex align-items-center justify-content-between w-100 my-3">
                                    <label htmlFor="Number Of Seats">Number Of Seats</label>
                                    <input type="number" name="Number Of Seats" id="Number Of Seats" className='year-input px-3 py-2 rounded-2' placeholder='Enter number of seats' />
                                </div>
                                <div className="ninth-form-dropdown d-flex align-items-center justify-content-between w-100 my-3">
                                    <label htmlFor="Features" className='w-75'>Features</label>
                                    <div className="checkbox-main w-100">
                                        <div className="check-1">
                                            <div className="row align-items-center row-gap-2">
                                                <div className="col-md-6">
                                                    <div className="checkboxes w-100">
                                                        <div className="checkbox-1 d-flex align-items-center w-100 gap-1">
                                                            <input type="checkbox" name="Features1" id="Features1" />
                                                            <span>ABS</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkboxes">
                                                        <div className="checkbox-2 d-flex align-items-center w-100 gap-1">
                                                            <input type="checkbox" name="Features2" id="Features2" />
                                                            <span>Airbags</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkboxes">
                                                        <div className="checkbox-1 d-flex align-items-center w-100 gap-1">
                                                            <input type="checkbox" name="Features3" id="Features3" />
                                                            <span>Premium Wheels</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkboxes">
                                                        <div className="checkbox-2 d-flex align-items-center w-100 gap-1">
                                                            <input type="checkbox" name="Features4" id="Features4" />
                                                            <span>AM/FM Radio</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tenth-form-dropdown d-flex align-items-center justify-content-between w-100 my-3">
                                    <label htmlFor="Number Of Owners">Number Of Owners</label>
                                    <input type="number" name="Number Of Owners" id="Number Of Owners" className='year-input px-3 py-2 rounded-2' placeholder='Enter number of owners' />
                                </div>
                                <div className="eleventh-form-dropdown d-flex align-items-center justify-content-between w-100 my-3">
                                    <label htmlFor="Car Documents" className='w-75'>Car Documents</label>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input type="checkbox" name="checkFive" className='checkFive' checked={checked3.checkFive} onChange={() => handleChange3("checkFive")} />
                                        <input type="checkbox" name="checkSix" className='checkSix' checked={checked3.checkSix} onChange={() => handleChange3("checkSix")} />
                                    </div>
                                </div>
                                <div className="twelveth-form-dropdown d-flex align-items-center justify-content-between w-100 my-3">
                                    <label htmlFor="Assembly" className='w-75'>Assembly</label>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input type="checkbox" name="checkSeven" className='checkSeven' checked={checked4.checkSeven} onChange={() => handleChange4("checkSeven")} />
                                        <input type="checkbox" name="checkEight" className='checkEight' checked={checked4.checkEight} onChange={() => handleChange4("checkEight")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={categories["property-sale"]} className="sub-categories mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2">
                                <option value="" disabled selected>Select Sub-Category</option>
                                <option value="lands">Lands & Plots</option>
                                <option value="houses">Houses</option>
                                <option value="apartments">Apartments</option>
                            </select>
                            <h1 ref={forms["property-sale"]} className="d-none">Property for Sale</h1>
                        </div>
                        <div ref={categories["property-rent"]} className="sub-categories mt-md-0 w-100 d-none">
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
                            <h1 ref={forms["property-rent"]} className="d-none">Property for Rent</h1>
                        </div>
                        <div ref={categories.electronics} className="sub-categories mt-md-0 w-100 d-none">
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
                            <h1 ref={forms.electronics} className="d-none">Electronics & Home Appliances</h1>
                        </div>
                        <div ref={categories.bikes} className="sub-categories mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Motorcycles</option>
                                <option value="2">Spare Parts</option>
                                <option value="3">Bike Accessories</option>
                                <option value="4">Bicycles</option>
                                <option value="5">ATV & Quads</option>
                                <option value="6">Scooters</option>
                            </select>
                            <h1 ref={forms.bikes} className="d-none">Bikes</h1>
                        </div>
                        <div ref={categories["find-business"]} className="sub-categories mt-md-0 w-100 d-none">
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
                            <h1 ref={forms["find-business"]} className="d-none">Business, Industrial & Agriculture</h1>
                        </div>
                        <div ref={categories["find-service"]} className="sub-categories mt-md-0 w-100 d-none">
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
                            <h1 ref={forms["find-service"]} className="d-none">Services</h1>
                        </div>
                        <div ref={categories["find-job"]} className="sub-categories mt-md-0 w-100 d-none">
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
                            <h1 ref={forms["find-job"]} className="d-none">Jobs</h1>
                        </div>
                        <div ref={categories.animals} className="sub-categories mt-md-0 w-100 d-none">
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
                            <h1 ref={forms.animals} className="d-none">Animals</h1>
                        </div>
                        <div ref={categories.furniture} className="sub-categories mt-md-0 w-100 d-none">
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
                            <h1 ref={forms.furniture} className="d-none">Furniture & Home Decor</h1>
                        </div>
                        <div ref={categories.fashion} className="sub-categories mt-md-0 w-100 d-none">
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
                            <h1 ref={forms.fashion} className="d-none">Fashion & Beauty</h1>
                        </div>
                        <div ref={categories.books} className="sub-categories mt-md-0 w-100 d-none">
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Books & Magazines</option>
                                <option value="2">Musical Instruments</option>
                                <option value="3">Sports Equipment</option>
                                <option value="4">Gym & Fitness</option>
                                <option value="5">Other Hobbies</option>
                            </select>
                            <h1 ref={forms.books} className="d-none">Books</h1>
                        </div>
                        <div ref={categories.kids} className="sub-categories mt-md-0 w-100 d-none">
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
                            <h1 ref={forms.kids} className="d-none">Kids</h1>
                        </div>
                    </div>
                </form>
            </Container>
            {/* Form end */}
        </div >
    )
}