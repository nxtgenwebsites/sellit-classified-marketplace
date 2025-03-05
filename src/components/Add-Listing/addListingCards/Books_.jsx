import React, { useRef, useState } from 'react'

export default function Books_() {
    const handleChange15 = name => setChecked15({ checkThirtyTwo: name === "checkThirtyTwo", checkThirtyThree: name === "checkThirtyThree" });
    const [checked15, setChecked15] = useState({ checkThirtyTwo: false, checkThirtyThree: false });

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
    const booksMainCategory = useRef();
    const Books = useRef();
    const Music = useRef();
    const Sports = useRef();
    const Gym = useRef();
    function booksCategoriesHandler() {
        if (booksMainCategory.current.value === 'Books') {
            Books.current.classList.remove('d-none');
            Books.current.classList.add('d-lg-flex');
            Music.current.classList.add('d-none');
            Music.current.classList.remove('d-lg-flex');
            Sports.current.classList.add('d-none');
            Sports.current.classList.remove('d-lg-flex');
            Gym.current.classList.add('d-none');
            Gym.current.classList.remove('d-lg-flex');
        }
        else if (booksMainCategory.current.value === 'Music') {
            Books.current.classList.add('d-none');
            Books.current.classList.remove('d-lg-flex');
            Sports.current.classList.remove('d-lg-flex');
            Sports.current.classList.add('d-none');
            Music.current.classList.remove('d-none');
            Music.current.classList.add('d-lg-flex');
            Gym.current.classList.remove('d-lg-flex');
            Gym.current.classList.add('d-none');
        }
        else if (booksMainCategory.current.value === 'Sports') {
            Books.current.classList.add('d-none');
            Books.current.classList.remove('d-lg-flex');
            Music.current.classList.add('d-none');
            Music.current.classList.remove('d-lg-flex');
            Sports.current.classList.remove('d-none');
            Sports.current.classList.add('d-lg-flex');
            Gym.current.classList.add('d-none');
            Gym.current.classList.remove('d-lg-flex');
        }
        else if (booksMainCategory.current.value === 'Gym') {
            Books.current.classList.add('d-none');
            Books.current.classList.remove('d-lg-flex');
            Music.current.classList.add('d-none');
            Music.current.classList.remove('d-lg-flex');
            Sports.current.classList.add('d-none');
            Sports.current.classList.remove('d-lg-flex');
            Gym.current.classList.remove('d-none');
            Gym.current.classList.add('d-lg-flex');
        }
        else if (booksMainCategory.current.value === 'Other Hobbies') {
            Books.current.classList.add('d-none');
            Books.current.classList.remove('d-lg-flex');
            Music.current.classList.add('d-none');
            Music.current.classList.remove('d-lg-flex');
            Sports.current.classList.add('d-none');
            Sports.current.classList.remove('d-lg-flex');
            Gym.current.classList.add('d-none');
            Gym.current.classList.remove('d-lg-flex');
        }
        else {
            Books.current.classList.add('d-none');
            Books.current.classList.remove('d-lg-flex');
            Music.current.classList.add('d-none');
            Music.current.classList.remove('d-lg-flex');
            Sports.current.classList.add('d-none');
            Sports.current.classList.remove('d-lg-flex');
            Gym.current.classList.add('d-none');
            Gym.current.classList.remove('d-lg-flex');
        }
    }
    return (
        <div>
            <select className="form-select px-3 py-2" ref={booksMainCategory} onChange={booksCategoriesHandler}>
                <option value="select-subcategory" selected disabled>
                    Select Sub-Category
                </option>
                <option value="Books">Books & Magazines</option>
                <option value="Music">Musical Instruments</option>
                <option value="Sports">Sports Equipment</option>
                <option value="Gym">Gym & Fitness</option>
                <option value="Other Hobbies">Other Hobbies</option>
            </select>
            <div ref={forms.books} className="form-tenth-group w-100 p-3 my-3 rounded-2">
                <div className="first-form-dropdown w-100 justify-content-between d-none" ref={Books}>
                    <div className="label">
                        <label htmlFor="Type">Type</label>
                    </div>
                    <div className="select w-100">
                        <select name="Type" id="Type" className="form-select py-2 px-3">
                            <option value="" selected disabled>Select Type</option>
                            <option value="" className="disabled" disabled>Books</option>
                            <option value="1">Religious Books</option>
                            <option value="2">Children's Books</option>
                            <option value="3">Education & Training Books</option>
                            <option value="4">Literature & Fiction Books</option>
                            <option value="5">Other Books</option>
                            <option value="" className="disabled" disabled>Other</option>
                            <option value="6">Magazines</option>
                            <option value="7">Stationary Items</option>
                            <option value="8">Dictionary</option>
                            <option value="9">Calculators</option>
                        </select>
                    </div>
                </div>
                <div className="first-form-dropdown w-100 justify-content-between d-none" ref={Music}>
                    <div className="label">
                        <label htmlFor="Type">Type</label>
                    </div>
                    <div className="select w-100">
                        <select name="Type" id="Type" className="form-select py-2 px-3">
                            <option value="" selected disabled>Select Type</option>
                            <option value="" className="disabled" disabled>Popular Type</option>
                            <option value="1">Guitars</option>
                            <option value="2">Other Instruments & Accessories</option>
                            <option value="3">Pianos</option>
                            <option value="4">Rabab</option>
                            <option value="5">Harmonium</option>
                            <option value="" className="disabled" disabled>Others</option>
                            <option value="6">Guitars</option>
                            <option value="7">Ukuleles</option>
                            <option value="8">Pianos</option>
                            <option value="9">Violins</option>
                            <option value="10">Drums</option>
                            <option value="11">Flutes</option>
                            <option value="12">Melodica</option>
                            <option value="13">Harmonium</option>
                            <option value="14">Dholak</option>
                            <option value="15">Tabla Set</option>
                            <option value="16">Duff</option>
                            <option value="17">Rabab</option>
                            <option value="18">Other Instruments & Accessories</option>
                        </select>
                    </div>
                </div>
                <div className="first-form-dropdown w-100 justify-content-between d-none" ref={Sports}>
                    <div className="label">
                        <label htmlFor="Type">Type</label>
                    </div>
                    <div className="select w-100">
                        <select name="Type" id="Type" className="form-select py-2 px-3">
                            <option value="" selected disabled>Select Type</option>
                            <option value="" className="disabled" disabled>Popular Type</option>
                            <option value="1">Cricket</option>
                            <option value="2">Snooker</option>
                            <option value="3">Other Sports</option>
                            <option value="4">Football</option>
                            <option value="5">Table Tennis</option>
                            <option value="" className="disabled" disabled>Others</option>
                            <option value="6">Trampoline</option>
                            <option value="7">Carrom Boards</option>
                            <option value="8">Chess</option>
                            <option value="9">Table Tennis</option>
                            <option value="10">Football</option>
                            <option value="11">Billiards</option>
                            <option value="12">Snooker</option>
                            <option value="13">Pool</option>
                            <option value="14">Ludo</option>
                            <option value="15">Sqaush</option>
                            <option value="16">Badminton</option>
                            <option value="17">asketball</option>
                            <option value="18">Cricket</option>
                            <option value="19">Football</option>
                            <option value="20">Hockey</option>
                            <option value="21">Volleyball</option>
                            <option value="22">Baseball</option>
                            <option value="23">Tennis</option>
                            <option value="24">Camping</option>
                            <option value="25">Hiking</option>
                            <option value="26">Horse Riding</option>
                            <option value="27">Golf</option>
                            <option value="28">Boxing</option>
                            <option value="29">Skating</option>
                            <option value="30">Swimming</option>
                            <option value="31">Fishing</option>
                            <option value="32">Sport Clothes</option>
                            <option value="33">Sport Shoes</option>
                            <option value="34">Other Sports</option>
                        </select>
                    </div>
                </div>
                <div className="first-form-dropdown w-100 justify-content-between d-none" ref={Gym}>
                    <div className="label">
                        <label htmlFor="Type">Type</label>
                    </div>
                    <div className="select w-100">
                        <select name="Type" id="Type" className="form-select py-2 px-3">
                            <option value="" selected disabled>Select Type</option>
                            <option value="" className="disabled" disabled>Popular Type</option>
                            <option value="1">Treadmills</option>
                            <option value="2">Other Gym Equipments</option>
                            <option value="3">Massagers</option>
                            <option value="4">Exercise Bikes</option>
                            <option value="5">Supplements</option>
                            <option value="" className="disabled" disabled>Others</option>
                            <option value="6">Treadmills</option>
                            <option value="7">Ellipticals</option>
                            <option value="8">Exercise Bikes</option>
                            <option value="9">AB Exercisers</option>
                            <option value="10">Tummy Trimers</option>
                            <option value="11">Dumbbells</option>
                            <option value="12">Barbell Bars</option>
                            <option value="13">Weight Plates</option>
                            <option value="14">Shakers</option>
                            <option value="15">Kettlebells</option>
                            <option value="16">Resistance Bands</option>
                            <option value="17">Jump Ropes</option>
                            <option value="18">Gym Balls</option>
                            <option value="19">Yoga Mats</option>
                            <option value="20">Massagers</option>
                            <option value="21">Supplements</option>
                            <option value="22">Belts</option>
                            <option value="23">Gym Bags & Sacks</option>
                            <option value="24">Gym Clothes</option>
                            <option value="25">Gym Shoes</option>
                            <option value="26">Other Gym Equipments</option>
                        </select>
                    </div>
                </div>
                <div className="second-form-dropdown d-lg-flex w-100 justify-content-between my-3">
                    <div className="label">
                        <label htmlFor="Condition">Condition</label>
                    </div>
                    <div className="d-flex gap-2 align-items-center condition-group">
                        <input
                            type="checkbox"
                            name="checkThirtyTwo"
                            className="checkThirtyTwo"
                            checked={checked15.checkThirtyTwo}
                            onChange={() => handleChange15("checkThirtyTwo")}
                        />
                        <input
                            type="checkbox"
                            name="checkThirtyThree"
                            className="checkThirtyThree"
                            checked={checked15.checkThirtyThree}
                            onChange={() => handleChange15("checkThirtyThree")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
