import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import "./css/add-listing.css";
import { CiCamera } from "react-icons/ci";

export default function AddListstingContent() {
    const [isEnabled, setIsEnabled] = useState(false);
    // Checkbox
    const [checked1, setChecked1] = useState({
        checkOne: false,
        checkTwo: false,
    });
    const [checked2, setChecked2] = useState({
        checkThree: false,
        checkFour: false,
    });
    const [checked3, setChecked3] = useState({
        checkFive: false,
        checkSix: false,
    });
    const [checked4, setChecked4] = useState({
        checkSeven: false,
        checkEight: false,
    });
    const [checked5, setChecked5] = useState({
        checkNine: false,
        checkTen: false,
    });
    const [checked6, setChecked6] = useState({
        checkEleven: false,
        checkTwelve: false,
    });
    const [checked7, setChecked7] = useState({
        checkThirteen: false,
        checkFourteen: false,
    });
    const [checked8, setChecked8] = useState({
        checkFifteen: false,
        checkSixteen: false,
    });
    const [checked9, setChecked9] = useState({
        checkSeventeen: false,
        checkEighteen: false,
    });
    const [checked10, setChecked10] = useState({
        checkNinteen: false,
        checkTwenty: false,
        checkTwentyOne: false,
    });
    const [checked11, setChecked11] = useState({
        checkTwentyTwo: false,
        checkTwentyThree: false,
    });
    const [checked12, setChecked12] = useState({
        checkTwentyFour: false,
        checkTwentyFive: false,
        checkTwentySix: false,
    });
    const [checked13, setChecked13] = useState({
        checkTwentySeven: false,
        checkTwentyEight: false,
    });
    const [checked14, setChecked14] = useState({
        checkTwentyNine: false,
        checkThirty: false,
        checkThirtyOne: false,
    });
    // Categories
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
        setChecked3({
            checkFive: name === "checkFive" ? true : false,
            checkSix: name === "checkSix" ? true : false,
        });
    };

    const handleChange4 = (name) => {
        setChecked4({
            checkSeven: name === "checkSeven" ? true : false,
            checkEight: name === "checkEight" ? true : false,
        });
    };

    const handleChange5 = (name) => {
        setChecked5({
            checkNine: name === "checkNine" ? true : false,
            checkTen: name === "checkTen" ? true : false,
        });
    };

    const handleChange6 = (name) => {
        setChecked6({
            checkEleven: name === "checkEleven" ? true : false,
            checkTwelve: name === "checkTwelve" ? true : false,
        });
    };

    const handleChange7 = (name) => {
        setChecked7({
            checkThirteen: name === "checkThirteen" ? true : false,
            checkFourteen: name === "checkFourteen" ? true : false,
        });
    };

    const handleChange8 = (name) => {
        setChecked8({
            checkFifteen: name === "checkFifteen" ? true : false,
            checkSixteen: name === "checkSixteen" ? true : false,
        });
    };

    const handleChange9 = (name) => {
        setChecked9({
            checkSeventeen: name === "checkSeventeen" ? true : false,
            checkEighteen: name === "checkEighteen" ? true : false,
        });
    };

    const handleChange10 = (name) => {
        setChecked10({
            checkNinteen: name === "checkNinteen" ? true : false,
            checkTwenty: name === "checkTwenty" ? true : false,
            checkTwentyOne: name === "checkTwentyOne" ? true : false,
        });
    };

    const handleChange11 = (name) => {
        setChecked11({
            checkTwentyTwo: name === "checkTwentyTwo" ? true : false,
            checkTwentyThree: name === "checkTwentyThree" ? true : false,
        });
    };

    const handleChange12 = (name) => {
        setChecked12({
            checkTwentyFour: name === "checkTwentyFour" ? true : false,
            checkTwentyFive: name === "checkTwentyFive" ? true : false,
            checkTwentySix: name === "checkTwentySix" ? true : false,
        });
    };

    const handleChange13 = (name) => {
        setChecked13({
            checkTwentySeven: name === "checkTwentySeven" ? true : false,
            checkTwentyEight: name === "checkTwentyEight" ? true : false,
        });
    };

    const handleChange14 = (name) => {
        setChecked14({
            checkTwentyNine: name === "checkTwentyNine" ? true : false,
            checkThirty: name === "checkThirty" ? true : false,
            checkThirtyOne: name === "checkThirtyOne" ? true : false,
        });
    };

    // Image Uploader
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Image Clicker
    const imageHandler = () => {
        document.getElementById("IMG").click()
    }
    const cameraIcon = () => {
        document.getElementById('cameraIcon').classList.add('z-n1');
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
                            <div className="form-first-group w-100 p-3 my-3 rounded-2">
                                <div
                                    className="img-div"
                                    style={{
                                        backgroundImage: image ? `url(${image})` : "none",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        width: "100px",
                                        height: "100px",
                                        cursor: "pointer",
                                        position: "relative"
                                    }}
                                    onClick={imageHandler}
                                    onChange={cameraIcon}
                                >
                                    <CiCamera className="camera-icon" id='cameraIcon' />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="IMG"
                                        className="d-none"
                                        onChange={handleImageChange}
                                    />
                                </div>
                                <div className="first-form_group d-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Ad Title">Ad Title</label>
                                    </div>
                                    <div className="input title-input w-100">
                                        <input
                                            type="text"
                                            name="Ad Title"
                                            id="Ad Title"
                                            className="w-100 px-3 py-2 rounded-2 year-input"
                                            minLength={1}
                                            maxLength={100}
                                            required
                                        />
                                        <small>
                                            Mention the key features of your item (e.g. brand, model,
                                            age, type)
                                        </small>
                                    </div>
                                </div>
                                <div className="second-form_group d-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Description">Description</label>
                                    </div>
                                    <div className="input description-input w-100">
                                        <textarea
                                            name="Description"
                                            id="Description"
                                            className="w-100 px-3 py-2 rounded-2 year-input"
                                            required
                                        ></textarea>
                                        <small>
                                            Include condition, features and reason for selling
                                        </small>
                                    </div>
                                </div>
                                <div className="third-form_group d-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Location">Location</label>
                                    </div>
                                    <div className="select location-input w-100">
                                        <select
                                            name="Location"
                                            id="Location"
                                            className="form-select"
                                            required
                                        >
                                            <option value="" disabled selected>
                                                Select Location
                                            </option>
                                            <option value="" disabled className="disabled-heading">
                                                Choose Region
                                            </option>
                                            <option value="1">Azad Kashmir, Pakistan</option>
                                            <option value="2">Balochistan, Pakistan</option>
                                            <option value="3">Islamabad, Pakistan</option>
                                            <option value="4">Kyber Pakhtunkhwa, Pakistan</option>
                                            <option value="5">Punjab, Pakistan</option>
                                            <option value="6">Sindh, Pakistan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="fourth-form_group d-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Location">Location</label>
                                    </div>
                                    <div className="input input-group price-input w-100">
                                        <span className="input-group-text rounded-start-2">
                                            PKR
                                        </span>
                                        <input
                                            type="number"
                                            placeholder="Enter Price"
                                            className="px-3 py-2 rounded-end-2"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="fifth-form_group d-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Name">Name</label>
                                    </div>
                                    <div className="input name-input w-100">
                                        <input
                                            type="text"
                                            placeholder="Enter Name"
                                            className="px-3 py-2 rounded-2 w-100 input-text"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="fourth-form_group d-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Mobile Number">Mobile Number</label>
                                    </div>
                                    <div className="input number-input w-100">
                                        <input
                                            type="number"
                                            placeholder="Enter Mobile Number"
                                            className="px-3 py-2 rounded-2 w-100 input-number"
                                            minLength={1}
                                            maxLength={11}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={categories.mobiles}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2" disabled={!isEnabled}>
                                <option value="" disabled selected>
                                    Select Sub-Category
                                </option>
                                <option value="tablets">Tablets</option>
                                <option value="accessories">Accessories</option>
                                <option value="phones">Mobile Phones</option>
                                <option value="watches">Smart Watches</option>
                            </select>
                            <div
                                ref={forms.mobiles}
                                className="form-second-group w-100 p-3 my-3 rounded-2 d-none"
                            >
                                <div className="first-form-dropdown d-flex align-items-center justify-content-between w-100">
                                    <label htmlFor="brand" className="w-75">
                                        Brand
                                    </label>
                                    <select
                                        name="brand"
                                        id="brand"
                                        className="py-2 px-3 form-select w-100"
                                    >
                                        <option value="" selected disabled>
                                            Select Brands
                                        </option>
                                        <option value="" disabled className="disabled">
                                            Popular Brands
                                        </option>
                                        <option value="1">Apple</option>
                                        <option value="2">Samsung</option>
                                        <option value="3">Other Tablets</option>
                                        <option value="4">Lenovo</option>
                                        <option value="5">Amazon</option>
                                        <option value="" disabled className="disabled">
                                            Others
                                        </option>
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
                                <div className="second-form-dropdown d-flex justify-content-between w-100 my-3">
                                    <label htmlFor="brand" className="w-75">
                                        Condition
                                    </label>
                                    <select
                                        name="brand"
                                        id="brand"
                                        className="py-2 px-3 form-select w-100"
                                    >
                                        <option value="" selected disabled>
                                            Select Condition
                                        </option>
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
                        <div ref={categories.motors}
                            className="sub-categories mt-md-0 w-100 d-none" >
                            <select className="form-select px-3 py-2">
                                <option value="" disabled selected>
                                    Select Sub-Category
                                </option>
                                <option value="cars">Cars</option>
                                <option value="installments">Cars on Installments</option>
                                <option value="accessories">Car Accessories</option>
                                <option value="spare-parts">Spare Parts</option>
                            </select>
                            <div
                                ref={forms.motors}
                                className="form-second-group w-100 p-3 my-3 rounded-2 d-none"
                            >
                                <div className="first-form-dropdown d-lg-flex justify-content-between w-100">
                                    <div className="label">
                                        <label htmlFor="make" className="w-75">
                                            Make
                                        </label>
                                    </div>
                                    <div className="select w-100">
                                        <select
                                            name="make"
                                            id="make"
                                            className="py-2 px-3 form-select w-100"
                                        >
                                            <option value="" selected disabled>
                                                Select make
                                            </option>
                                            <option value="" disabled className="disabled">
                                                Popular Make
                                            </option>
                                            <option value="1">Suzuki</option>
                                            <option value="2">Toyota</option>
                                            <option value="3">Honda</option>
                                            <option value="4">Daihatsu</option>
                                            <option value="5">Nissan</option>
                                            <option value="" disabled className="disabled">
                                                Others
                                            </option>
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
                                </div>
                                <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="brand" className="w-75">
                                            Condition
                                        </label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkOne"
                                            className="checkOne"
                                            checked={checked1.checkOne}
                                            onChange={() => handleChange1("checkOne")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkTwo"
                                            className="checkTwo"
                                            checked={checked1.checkTwo}
                                            onChange={() => handleChange1("checkTwo")}
                                        />
                                    </div>
                                </div>
                                <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="year">Year</label>
                                    </div>
                                    <div className="input w-100">
                                        <input
                                            type="number"
                                            name="year"
                                            id="year"
                                            className="year-input px-3 py-2 rounded-2"
                                            placeholder="Enter Year"
                                        />
                                    </div>
                                </div>
                                <div className="fourth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Fuel">Fuel</label>
                                    </div>
                                    <div className="select w-100">
                                        <select
                                            name="Fuel"
                                            id="Fuel"
                                            className="form-select px-3 py-2"
                                        >
                                            <option value="" selected disabled>
                                                Select Fuel
                                            </option>
                                            <option value="1">Patrol</option>
                                            <option value="2">Diesel</option>
                                            <option value="3">LPG</option>
                                            <option value="4">CNG</option>
                                            <option value="5">Hybrid</option>
                                            <option value="6">Electric</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="fifth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Trasmission" className="w-75">
                                            Trasmission
                                        </label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkThree"
                                            className="checkThree"
                                            checked={checked2.checkThree}
                                            onChange={() => handleChange2("checkThree")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkFour"
                                            className="checkFour"
                                            checked={checked2.checkFour}
                                            onChange={() => handleChange2("checkFour")}
                                        />
                                    </div>
                                </div>
                                <div className="sixth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Body Type" className="w-75">
                                            Body Type
                                        </label>
                                    </div>
                                    <div className="select w-100">
                                        <select
                                            name="Body Type"
                                            id="Body Type"
                                            className="form-select px-3 py-2"
                                        >
                                            <option value="" selected disabled>
                                                Select Body Type
                                            </option>
                                            <option value="" disabled className="disabled">
                                                Popular Body Type
                                            </option>
                                            <option value="1">Sedan</option>
                                            <option value="2">Hatchback</option>
                                            <option value="3">Other</option>
                                            <option value="4">Small city car</option>
                                            <option value="5">SUV</option>
                                            <option value="" disabled className="disabled">
                                                Others
                                            </option>
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
                                </div>
                                <div className="seventh-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Color">Color</label>
                                    </div>
                                    <div className="input w-100">
                                        <input
                                            type="color"
                                            name="Color"
                                            id="Color"
                                            className="w-100"
                                        />
                                    </div>
                                </div>
                                <div className="eighth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Number Of Seats">Number Of Seats</label>
                                    </div>
                                    <div className="input w-100">
                                        <input
                                            type="number"
                                            name="Number Of Seats"
                                            id="Number Of Seats"
                                            className="year-input px-3 py-2 rounded-2"
                                            placeholder="Enter number of seats"
                                        />
                                    </div>
                                </div>
                                <div className="ninth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Features" className="w-75">
                                            Features
                                        </label>
                                    </div>
                                    <div className="input w-100">
                                        <div className="checkbox-main w-100">
                                            <div className="check-1">
                                                <div className="row align-items-center row-gap-2">
                                                    <div className="col-md-6">
                                                        <div className="checkboxes w-100">
                                                            <div className="checkbox-1 d-flex align-items-center w-100 gap-1">
                                                                <input
                                                                    type="checkbox"
                                                                    name="Features1"
                                                                    id="Features1"
                                                                />
                                                                <span>ABS</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkboxes">
                                                            <div className="checkbox-2 d-flex align-items-center w-100 gap-1">
                                                                <input
                                                                    type="checkbox"
                                                                    name="Features2"
                                                                    id="Features2"
                                                                />
                                                                <span>Airbags</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkboxes">
                                                            <div className="checkbox-1 d-flex align-items-center w-100 gap-1">
                                                                <input
                                                                    type="checkbox"
                                                                    name="Features3"
                                                                    id="Features3"
                                                                />
                                                                <span>Premium Wheels</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkboxes">
                                                            <div className="checkbox-2 d-flex align-items-center w-100 gap-1">
                                                                <input
                                                                    type="checkbox"
                                                                    name="Features4"
                                                                    id="Features4"
                                                                />
                                                                <span>AM/FM Radio</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tenth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Number Of Owners">Number Of Owners</label>
                                    </div>
                                    <div className="input w-100">
                                        <input
                                            type="number"
                                            name="Number Of Owners"
                                            id="Number Of Owners"
                                            className="year-input px-3 py-2 rounded-2"
                                            placeholder="Enter number of owners"
                                        />
                                    </div>
                                </div>
                                <div className="eleventh-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Car Documents" className="w-75">
                                            Car Documents
                                        </label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkFive"
                                            className="checkFive"
                                            checked={checked3.checkFive}
                                            onChange={() => handleChange3("checkFive")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkSix"
                                            className="checkSix"
                                            checked={checked3.checkSix}
                                            onChange={() => handleChange3("checkSix")}
                                        />
                                    </div>
                                </div>
                                <div className="twelveth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Assembly" className="w-75">
                                            Assembly
                                        </label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkSeven"
                                            className="checkSeven"
                                            checked={checked4.checkSeven}
                                            onChange={() => handleChange4("checkSeven")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkEight"
                                            className="checkEight"
                                            checked={checked4.checkEight}
                                            onChange={() => handleChange4("checkEight")}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={categories["property-sale"]}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2">
                                <option value="" disabled selected>
                                    Select Sub-Category
                                </option>
                                <option value="lands">Lands & Plots</option>
                                <option value="houses">Houses</option>
                                <option value="apartments">Apartments</option>
                            </select>
                            <div
                                ref={forms["property-sale"]}
                                className="form-third-group w-100 p-3 my-3 rounded-2 d-none"
                            >
                                <div className="first-form-dropdown d-lg-flex justify-content-between w-100">
                                    <div className="label">
                                        <label htmlFor="Type" className="w-75">
                                            Type
                                        </label>
                                    </div>
                                    <div className="select w-100">
                                        <select
                                            name="Type"
                                            id="Type"
                                            className="py-2 px-3 form-select w-100"
                                        >
                                            <option value="" selected disabled>
                                                Select Type
                                            </option>
                                            <option value="1">Agricultural Land</option>
                                            <option value="2">Commercial Plots</option>
                                            <option value="3">Files</option>
                                            <option value="4">Industrial Land</option>
                                            <option value="5">Residential Plots</option>
                                            <option value="6">Plot Form</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Features" className="w-75">
                                            Features
                                        </label>
                                    </div>
                                    <div className="input">
                                        <div className="input-1 d-flex align-items-center gap-2">
                                            <div className="input-1-checkbox-1">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox-2">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox-3">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox-4">
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                        <div className="input-2 d-flex align-items-center gap-2 mt-2">
                                            <div className="input-1-checkbox-5">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox-6">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox-7">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox-8">
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Area Unit" className="w-75">
                                            Area Unit
                                        </label>
                                    </div>
                                    <div className="select w-100">
                                        <select
                                            name="Area Unit"
                                            id="Area Unit"
                                            className="px-3 py-2 form-select w-100"
                                        >
                                            <option value="" selected disabled>
                                                Select Area Unit
                                            </option>
                                            <option value="1">Kanal</option>
                                            <option value="2">Marla</option>
                                            <option value="3">Square Feet</option>
                                            <option value="4">Square Meter</option>
                                            <option value="5">Square Yards</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="fourth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Area">Area</label>
                                    </div>
                                    <div className="input w-100">
                                        <input
                                            type="number"
                                            name="Area"
                                            id="Area"
                                            className="px-3 py-2 rounded-2 w-100 input-number"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={categories["property-rent"]}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2">
                                <option value="select-subcategory" selected disabled>
                                    Select Sub-Category
                                </option>
                                <option value="1">Houses</option>
                                <option value="2">Apartements & Flats</option>
                                <option value="3">Portions & Floors</option>
                                <option value="4">Shops - Offices - Commercial Space</option>
                                <option value="5">Rooms</option>
                                <option value="6">Roomates & Paying Guests</option>
                                <option value="7">Vacation Rentals - Guest Houses</option>
                                <option value="8">Land & Plots</option>
                            </select>
                            <div
                                ref={forms["property-rent"]}
                                className="form-fourth-group w-100 p-3 my-3 rounded-2 d-none"
                            >
                                <div className="first-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Furnished" className="w-75">
                                            Furnished
                                        </label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkNine"
                                            className="checkNine"
                                            checked={checked5.checkNine}
                                            onChange={() => handleChange5("checkNine")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkTen"
                                            className="checkTen"
                                            checked={checked5.checkTen}
                                            onChange={() => handleChange5("checkTen")}
                                        />
                                    </div>
                                </div>
                                <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Bedrooms">Bedrooms</label>
                                    </div>
                                    <div className="select w-100">
                                        <select
                                            name="Bedrooms"
                                            id="Bedrooms"
                                            className="px-3 py-2 form-select w-100"
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6+</option>
                                            <option value="7">Studio</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Bathrooms">Bathrooms</label>
                                    </div>
                                    <div className="select w-100">
                                        <select
                                            name="Bathrooms"
                                            id="Bathrooms"
                                            className="px-3 py-2 form-select w-100"
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7+</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="fourth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="No of storeys">No of storeys</label>
                                    </div>
                                    <div className="select w-100">
                                        <select
                                            name="No of storeys"
                                            id="No of storeys"
                                            className="px-3 py-2 form-select w-100"
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4+</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="fifth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Construction State" className="w-75">
                                            Construction State
                                        </label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkEleven"
                                            className="checkEleven"
                                            checked={checked6.checkEleven}
                                            onChange={() => handleChange6("checkEleven")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkTwelve"
                                            className="checkTwelve"
                                            checked={checked6.checkTwelve}
                                            onChange={() => handleChange6("checkTwelve")}
                                        />
                                    </div>
                                </div>
                                <div className="sixth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Features" className="w-75">
                                            Features
                                        </label>
                                    </div>
                                    <div className="input">
                                        <div className="input-1 d-flex align-items-center gap-2">
                                            <div className="input-1-checkbox_1">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox_2">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox_3">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox_4">
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                        <div className="input-2 d-flex align-items-center gap-2 mt-2">
                                            <div className="input-1-checkbox_5">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox_6">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox_7">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox_8">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox_9">
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                        <div className="input-3 d-flex align-items-center gap-2 mt-2">
                                            <div className="input-1-checkbox_10">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox_11">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="input-1-checkbox_12">
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="seventh-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Area Unit" className="w-75">
                                            Area Unit
                                        </label>
                                    </div>
                                    <div className="select w-100">
                                        <select
                                            name="Area Unit"
                                            id="Area Unit"
                                            className="px-3 py-2 form-select w-100"
                                        >
                                            <option value="" selected disabled>
                                                Select Area Unit
                                            </option>
                                            <option value="1">Kanal</option>
                                            <option value="2">Marla</option>
                                            <option value="3">Square Feet</option>
                                            <option value="4">Square Meter</option>
                                            <option value="5">Square Yards</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="eighth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Area">Area</label>
                                    </div>
                                    <div className="input w-100">
                                        <input
                                            type="number"
                                            name="Area"
                                            id="Area"
                                            className="px-3 py-2 rounded-2 w-100 input-number"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={categories.electronics}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2">
                                <option value="select-subcategory" selected disabled>
                                    Select Sub-Category
                                </option>
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
                            <div
                                ref={forms.electronics}
                                className="form-fifth-group w-100 p-3 my-3 rounded-2 d-none"
                            >
                                <div className="first-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Condition">Condition</label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkThirteen"
                                            className="checkThirteen"
                                            checked={checked7.checkThirteen}
                                            onChange={() => handleChange7("checkThirteen")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkFourteen"
                                            className="checkFourteen"
                                            checked={checked7.checkFourteen}
                                            onChange={() => handleChange7("checkFourteen")}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={categories.bikes}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2">
                                <option value="select-subcategory" selected disabled>
                                    Select Sub-Category
                                </option>
                                <option value="1">Motorcycles</option>
                                <option value="2">Spare Parts</option>
                                <option value="3">Bike Accessories</option>
                                <option value="4">Bicycles</option>
                                <option value="5">ATV & Quads</option>
                                <option value="6">Scooters</option>
                            </select>
                            <div ref={forms.bikes} className="form-sixth-group w-100 p-3 my-3 rounded-2 d-none">
                                <div className="first-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Make">Make</label>
                                    </div>
                                    <div className="select w-100">
                                        <select name="Make" id="Make" className="px-3 py-2 form-select w-100">
                                            <option value="" disabled selected>Select Make</option>
                                            <option value="" disabled className="disabled">Popular Make</option>
                                            <option value="1">Honda</option>
                                            <option value="2">Yamaha</option>
                                            <option value="3">Suzuki</option>
                                            <option value="4">United</option>
                                            <option value="5">Road Prince</option>
                                            <option value="" className="disabled" disabled>Others</option>
                                            <option value="6">Honda</option>
                                            <option value="7">Yamaha</option>
                                            <option value="8">United</option>
                                            <option value="9">Suzuki</option>
                                            <option value="10">Road Prince</option>
                                            <option value="11">Unique</option>
                                            <option value="12">Super Power</option>
                                            <option value="13">Super Star</option>
                                            <option value="14">Metro</option>
                                            <option value="15">Crown</option>
                                            <option value="16">Kawasaki</option>
                                            <option value="17">Power</option>
                                            <option value="18">Ravi</option>
                                            <option value="19">Eagle</option>
                                            <option value="20">Habib</option>
                                            <option value="21">Ghani</option>
                                            <option value="22">Sohrab</option>
                                            <option value="23">Beneli</option>
                                            <option value="24">Derbi</option>
                                            <option value="25">Zongshen</option>
                                            <option value="26">CF Moto</option>
                                            <option value="27">Cineco</option>
                                            <option value="28">Qingqi</option>
                                            <option value="29">Hero</option>
                                            <option value="30">Hi Speed</option>
                                            <option value="31">Lifan</option>
                                            <option value="32">Pak Hero</option>
                                            <option value="33">Safari</option>
                                            <option value="34">Super Asia</option>
                                            <option value="35">Toyo</option>
                                            <option value="36">Treet</option>
                                            <option value="37">Union Star</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Model">Model</label>
                                    </div>
                                    <div className="input w-100">
                                        <input type="text" name="Model" id="Model" placeholder="Enter Model" className="input-text py-2 px-3 rounded-2" />
                                    </div>
                                </div>
                                <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Year">Year</label>
                                    </div>
                                    <div className="input w-100">
                                        <input type="text" name="Year" id="Year" placeholder="Enter Year" className="input-number py-2 px-3 rounded-2" />
                                    </div>
                                </div>
                                <div className="fourth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Engine Type">Engine Type</label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkFifteen"
                                            className="checkFifteen"
                                            checked={checked8.checkFifteen}
                                            onChange={() => handleChange8("checkFifteen")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkSixteen"
                                            className="checkSixteen"
                                            checked={checked8.checkSixteen}
                                            onChange={() => handleChange8("checkSixteen")}
                                        />
                                    </div>
                                </div>
                                <div className="fifth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Engine Capacity">Engine Capacity</label>
                                    </div>
                                    <div className="select w-100">
                                        <select name="Engine Capacity" id="Engine Capacity" className="form-select py-2 px-3">
                                            <option value="" disabled selected>Select Engine Capacity</option>
                                            <option value="" className="disabled">Popular Engine Capacity</option>
                                            <option value="1">100cc - 149cc</option>
                                            <option value="2">70cc</option>
                                            <option value="3">150cc - 199cc</option>
                                            <option value="4">200cc - 249cc</option>
                                            <option value="5">50cc</option>
                                            <option value="" className="disabled">Others</option>
                                            <option value="6">50cc</option>
                                            <option value="7">70cc</option>
                                            <option value="8">100cc - 149cc</option>
                                            <option value="9">150cc - 199cc</option>
                                            <option value="10">200cc - 249cc</option>
                                            <option value="11">250cc - 299cc</option>
                                            <option value="12">300cc - 499cc</option>
                                            <option value="13">500cc - 699cc</option>
                                            <option value="14">700cc - 999cc</option>
                                            <option value="15">1000cc</option>
                                            <option value="16">Above 1000cc</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sixth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="KM's Driven">KM's Driven</label>
                                    </div>
                                    <div className="input w-100">
                                        <input type="number" name="KM's Driven" id="KM's Driven" placeholder="Enter km's driven" className="input-number py-2 px-3 rounded-2" />
                                    </div>
                                </div>
                                <div className="seventh-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Ignition Type">Ignition Type</label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkSeventeen"
                                            className="checkSeventeen"
                                            checked={checked9.checkSeventeen}
                                            onChange={() => handleChange9("checkSeventeen")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkEighteen"
                                            className="checkEighteen"
                                            checked={checked9.checkEighteen}
                                            onChange={() => handleChange9("checkEighteen")}
                                        />
                                    </div>
                                </div>
                                <div className="eighth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Origin">Origin</label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkNinteen"
                                            className="checkNinteen"
                                            checked={checked10.checkNinteen}
                                            onChange={() => handleChange10("checkNinteen")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkTwenty"
                                            className="checkTwenty"
                                            checked={checked10.checkTwenty}
                                            onChange={() => handleChange10("checkTwenty")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkTwentyOne"
                                            className="checkTwentyOne"
                                            checked={checked10.checkTwentyOne}
                                            onChange={() => handleChange10("checkTwentyOne")}
                                        />
                                    </div>
                                </div>
                                <div className="ninth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Condition">Condition</label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkTwentyTwo"
                                            className="checkTwentyTwo"
                                            checked={checked11.checkTwentyTwo}
                                            onChange={() => handleChange11("checkTwentyTwo")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkTwentyThree"
                                            className="checkTwentyThree"
                                            checked={checked11.checkTwentyThree}
                                            onChange={() => handleChange11("checkTwentyThree")}
                                        />
                                    </div>
                                </div>
                                <div className="tenth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Registration City">Registration City</label>
                                    </div>
                                    <div className="select w-100">
                                        <select name="Registration City" id="Registration City" className="form-select py-2 px-3">
                                            <option value="" selected disabled>Select Registration City</option>
                                            <option value="" className="disabled">Popular Registration City</option>
                                            <option value="1">Lahore</option>
                                            <option value="2">Karachi</option>
                                            <option value="3">Punjab</option>
                                            <option value="4">Islamabad</option>
                                            <option value="5">Rawalpindi</option>
                                            <option value="" className="disabled" disabled>Others</option>
                                            <option value="6">Unregistered</option>
                                            <option value="6">Abbottabad</option>
                                            <option value="7">Ahmadpur East</option>
                                            <option value="8">Ali Masjid</option>
                                            <option value="9">Arifwala</option>
                                            <option value="10">Askoley</option>
                                            <option value="11">Attock</option>
                                            <option value="12">Badin</option>
                                            <option value="13">Bagh</option>
                                            <option value="14">Bahawalnagar</option>
                                            <option value="15">Bahwalpur</option>
                                            <option value="16">Bannu</option>
                                            <option value="17">Batargram</option>
                                            <option value="18">Bela</option>
                                            <option value="19">Bhakkar</option>
                                            <option value="20">Bhimber</option>
                                            <option value="21">Buner</option>
                                            <option value="22">Burewala</option>
                                            <option value="23">Charsadda</option>
                                            <option value="24">Chilas</option>
                                            <option value="25">Chiniot</option>
                                            <option value="26">Chistian Mandi</option>
                                            <option value="27">Chitral</option>
                                            <option value="28">Dadu</option>
                                            <option value="29">Darra Adam Khel</option>
                                            <option value="31">Daska</option>
                                            <option value="32">Dera Ghazi Khan</option>
                                            <option value="33">Dera Ismail Khan</option>
                                            <option value="34">Faisalabad</option>
                                            <option value="35">Ghanche</option>
                                            <option value="36">Ghizer</option>
                                            <option value="37">Gilgit</option>
                                            <option value="38">Gojra</option>
                                            <option value="39">Gujranwala</option>
                                            <option value="40">Gujrat</option>
                                            <option value="41">Gwadar</option>
                                            <option value="42">Hafizabad</option>
                                            <option value="43">Hala</option>
                                            <option value="44">Hangu</option>
                                            <option value="45">Haripur</option>
                                            <option value="46">Hasilpur</option>
                                            <option value="47">Haveli lakha</option>
                                            <option value="48">Hyderabad</option>
                                            <option value="49">Islamabad</option>
                                            <option value="50">Jacobabad</option>
                                            <option value="51">Jamrud</option>
                                            <option value="52">Jamshoro</option>
                                            <option value="53">Jandola</option>
                                            <option value="54">Jaranwala</option>
                                            <option value="55">Jhang Sadar</option>
                                            <option value="56">Jhelum</option>
                                            <option value="57">Jiwani</option>
                                            <option value="58">Kalat</option>
                                            <option value="59">Kamoke</option>
                                            <option value="60">Kandhura</option>
                                            <option value="61">Karachi</option>
                                            <option value="62">Karak</option>
                                            <option value="63">Kasur</option>
                                            <option value="64">Khairpur</option>
                                            <option value="65">Khanewala</option>
                                            <option value="66">Khanpur</option>
                                            <option value="67">Khaplu</option>
                                            <option value="68">Khushsab</option>
                                            <option value="69">Khuzdar</option>
                                            <option value="70">Kohat</option>
                                            <option value="71">Kohistan</option>
                                            <option value="72">Kot Addu</option>
                                            <option value="73">Lahore</option>
                                            <option value="74">Lakki Marwat</option>
                                            <option value="75">Landi Kotal</option>
                                            <option value="76">Larkhana</option>
                                            <option value="77">Lasbela</option>
                                            <option value="78">Layyah</option>
                                            <option value="79">Lower Dir</option>
                                            <option value="80">Malakand</option>
                                            <option value="81">Mandi Bahauddin</option>
                                            <option value="82">Mansehra</option>
                                            <option value="83">Mardan</option>
                                            <option value="84">Mianwali</option>
                                            <option value="85">Mingora</option>
                                            <option value="86">Mingora</option>
                                            <option value="87">Miram Shah</option>
                                            <option value="88">Mirpur</option>
                                            <option value="89">Mirpur Khas</option>
                                            <option value="90">Mithi</option>
                                            <option value="91">Multan</option>
                                            <option value="92">Muridike</option>
                                            <option value="93">Muzaffarabad</option>
                                            <option value="94">Nawabshah</option>
                                            <option value="95">Nowshera</option>
                                            <option value="96">Okara</option>
                                            <option value="97">Ormama</option>
                                            <option value="98">Pakpattan</option>
                                            <option value="99">Parachinar</option>
                                            <option value="100">Pasni</option>
                                            <option value="101">Peshawar</option>
                                            <option value="102">Pirmahal</option>
                                            <option value="103">Punjab</option>
                                            <option value="104">Quetta</option>
                                            <option value="105">Rahimyar Khan</option>
                                            <option value="106">Ratodero</option>
                                            <option value="107">Rawalpindi</option>
                                            <option value="108">Sadiqabad</option>
                                            <option value="109">Safar Abad</option>
                                            <option value="110">Sahiwal</option>
                                            <option value="111">Sargodha</option>
                                            <option value="112">Sheikhupura</option>
                                            <option value="113">Shikarpur</option>
                                            <option value="114">Sialkot</option>
                                            <option value="115">Sindh</option>
                                            <option value="116">Skardu</option>
                                            <option value="117">Sukkar</option>
                                            <option value="118">Sukkur</option>
                                            <option value="119">Swabi</option>
                                            <option value="120">Swat</option>
                                            <option value="121">Tando Adam</option>
                                            <option value="122">Tank</option>
                                            <option value="123">Thatta</option>
                                            <option value="124">Toba Tek Singh</option>
                                            <option value="125">Torkham</option>
                                            <option value="126">Upper Dir</option>
                                            <option value="127">Vehari</option>
                                            <option value="128">Wah</option>
                                            <option value="129">Wana</option>
                                            <option value="130">Wazirabad</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
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
                            <select className="form-select px-3 py-2">
                                <option value="select-subcategory" selected disabled>
                                    Select Sub-Category
                                </option>
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
                            <div ref={forms["find-job"]} className="form-sixth-group w-100 p-3 my-3 rounded-2 d-none">
                                <div className="first-form-dropdown d-lg-flex justify-content-between w-100">
                                    <div className="label w-100">
                                        <label htmlFor="Hiring Person/Company">Hiring Person/Company</label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkTwentyFour"
                                            className="checkTwentyFour"
                                            checked={checked12.checkTwentyFour}
                                            onChange={() => handleChange12("checkTwentyFour")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkTwentyFive"
                                            className="checkTwentyFive"
                                            checked={checked12.checkTwentyFive}
                                            onChange={() => handleChange12("checkTwentyFive")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkTwentySix"
                                            className="checkTwentySix"
                                            checked={checked12.checkTwentySix}
                                            onChange={() => handleChange12("checkTwentySix")}
                                        />
                                    </div>
                                </div>
                                <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Company Name">Company Name</label>
                                    </div>
                                    <div className="input w-100">
                                        <input type="text" name="Company Name" id="Company Name" className="input-text py-2 px-3 rounded-2" placeholder="Enter Company Name" />
                                    </div>
                                </div>
                                <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Type Of Ad">Type Of Ad</label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkTwentySeven"
                                            className="checkTwentySeven"
                                            checked={checked13.checkTwentySeven}
                                            onChange={() => handleChange13("checkTwentySeven")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkTwentyEight"
                                            className="checkTwentyEight"
                                            checked={checked13.checkTwentyEight}
                                            onChange={() => handleChange13("checkTwentyEight")}
                                        />
                                    </div>
                                </div>
                                <div className="fourth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Salary from">Salary from</label>
                                    </div>
                                    <div className="input w-100">
                                        <input type="number" name="Salary from" id="Salary from" className="input-number py-2 px-3 rounded-2" placeholder="Enter Salary from" />
                                    </div>
                                </div>
                                <div className="fifth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Salary to">Salary to</label>
                                    </div>
                                    <div className="input w-100">
                                        <input type="number" name="Salary to" id="Salary to" className="input-number py-2 px-3 rounded-2" placeholder="Enter Salary to" />
                                    </div>
                                </div>
                                <div className="sixth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Career Level">Career Level</label>
                                    </div>
                                    <div className="select w-100">
                                        <select name="Career Level" id="Career Level" className="w-100 form-select ">
                                            <option value="" disabled selected>Select Career Level</option>
                                            <option value="1">Entry Level</option>
                                            <option value="2">Associate</option>
                                            <option value="3">Mid-Senior Level</option>
                                            <option value="4">Director</option>
                                            <option value="5">Executive</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="seventh-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Salary Period">Salary Period</label>
                                    </div>
                                    <div className="select w-100">
                                        <select name="Salary Period" id="Salary Period" className="w-100 form-select ">
                                            <option value="" disabled selected>Select Salary Period</option>
                                            <option value="1">Monthly</option>
                                            <option value="2">Hourly</option>
                                            <option value="3">Weekly</option>
                                            <option value="4">Yearly</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="eighth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Position Type">Position Type</label>
                                    </div>
                                    <div className="select w-100">
                                        <select name="Position Type" id="Position Type" className="w-100 form-select ">
                                            <option value="" disabled selected>Select Position Type</option>
                                            <option value="1">Full-time</option>
                                            <option value="2">Part-time</option>
                                            <option value="3">Contract</option>
                                            <option value="4">Temporary</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={categories.animals}
                            className="sub-categories mt-md-0 w-100 d-none"
                        >
                            <select className="form-select px-3 py-2">
                                <option value="select-subcategory" selected disabled>
                                    Select Sub-Category
                                </option>
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
                            <div ref={forms.animals} className="form-seventh-group w-100 p-3 my-3 rounded-2">
                                <div className="first-form-dropdown d-lg-flex justify-content-between w-100">
                                    <div className="label">
                                        <label htmlFor="Breed">Breed</label>
                                    </div>
                                    <div className="input w-100">
                                        <input type="text" name="Breed" id="Breed" placeholder="Enter Breed" className="input-text w-100 py-2 px-3 rounded-2" />
                                    </div>
                                </div>
                                <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Sex">Sex</label>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center condition-group">
                                        <input
                                            type="checkbox"
                                            name="checkTwentyNine"
                                            className="checkTwentyNine"
                                            checked={checked14.checkTwentyNine}
                                            onChange={() => handleChange14("checkTwentyNine")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkThirty"
                                            className="checkThirty"
                                            checked={checked14.checkThirty}
                                            onChange={() => handleChange14("checkThirty")}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkThirtyOne"
                                            className="checkThirtyOne"
                                            checked={checked14.checkThirtyOne}
                                            onChange={() => handleChange14("checkThirtyOne")}
                                        />
                                    </div>
                                </div>
                                <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
                                    <div className="label">
                                        <label htmlFor="Age">Age</label>
                                    </div>
                                    <div className="input w-100">
                                        <input type="number" name="Age" id="Age" placeholder="Enter Age" className="input-number py-2 px-3 w-100 rounded-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={categories.furniture}
                            className="sub-categories mt-md-0 w-100 d-none"
                        >
                            <select className="form-select px-3 py-2">
                                <option value="select-subcategory" selected disabled>
                                    Select Sub-Category
                                </option>
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
                            <div ref={forms.furniture} className="d-none">
                                <div className="first-form-dropdown">
                                    
                                </div>
                            </div>
                        </div>
                        <div ref={categories.fashion}
                            className="sub-categories mt-md-0 w-100 d-none"
                        >
                            <select className="form-select px-3 py-2">
                                <option value="select-subcategory" selected disabled>
                                    Select Sub-Category
                                </option>
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
                            <h1 ref={forms.fashion} className="d-none">
                                Fashion & Beauty
                            </h1>
                        </div>
                        <div ref={categories.books}
                            className="sub-categories mt-md-0 w-100 d-none">
                            <select className="form-select px-3 py-2">
                                <option value="select-subcategory" selected disabled>
                                    Select Sub-Category
                                </option>
                                <option value="1">Books & Magazines</option>
                                <option value="2">Musical Instruments</option>
                                <option value="3">Sports Equipment</option>
                                <option value="4">Gym & Fitness</option>
                                <option value="5">Other Hobbies</option>
                            </select>
                            <h1 ref={forms.books} className="d-none">
                                Books
                            </h1>
                        </div>
                        <div ref={categories.kids}
                            className="sub-categories mt-md-0 w-100 d-none"
                        >
                            <select className="form-select px-3 py-2">
                                <option value="select-subcategory" selected disabled>
                                    Select Sub-Category
                                </option>
                                <option value="1">Kids Furniture</option>
                                <option value="2">Kids Vehicles</option>
                                <option value="3">Toys</option>
                                <option value="4">Baby Gear</option>
                                <option value="5">Bath & Diapers</option>
                                <option value="6">Swings & Sildes</option>
                                <option value="7">Kids Clothing</option>
                                <option value="8">Kids Accessories</option>
                            </select>
                            <h1 ref={forms.kids} className="d-none">
                                Kids
                            </h1>
                        </div>
                    </div>
                </form>
            </Container>
            {/* Form end */}
        </div >
    );
}
