import React, { useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import './css/add-listing.css'

export default function AddListstingContent() {
    const mainCategory = useRef();
    const mobileCategory = useRef();
    const motorsCategory = useRef();
    const propertySaleCategory = useRef();
    const propertyRentCategory = useRef();
    const buisnessCategory = useRef();
    const serviceCategory = useRef();
    const jobCategory = useRef();
    const electronicsCategory = useRef();
    const [isEnabled, setIsEnabled] = useState(false)
    function handleCategory() {
        if (mainCategory.current.value === 'mobiles') {
            setIsEnabled(true);
            motorsCategory.current.classList.remove('d-block');
            motorsCategory.current.classList.add('d-none');
            mobileCategory.current.classList.remove('d-none');
            propertySaleCategory.current.classList.remove('d-block');
            propertySaleCategory.current.classList.add('d-none');
            buisnessCategory.current.classList.remove('d-block');
            buisnessCategory.current.classList.add('d-none');
            propertyRentCategory.current.classList.remove('d-block');
            propertyRentCategory.current.classList.add('d-none');
            serviceCategory.current.classList.remove('d-block');
            serviceCategory.current.classList.add('d-none');
            jobCategory.current.classList.remove('d-block');
            jobCategory.current.classList.add('d-none');
            electronicsCategory.current.classList.remove('d-block');
            electronicsCategory.current.classList.add('d-none');
        }
        else if (mainCategory.current.value === 'motors') {
            motorsCategory.current.classList.add('d-block');
            motorsCategory.current.classList.remove('d-none');
            mobileCategory.current.classList.add('d-none');
            propertySaleCategory.current.classList.remove('d-block');
            propertySaleCategory.current.classList.add('d-none');
            propertyRentCategory.current.classList.remove('d-block');
            propertyRentCategory.current.classList.add('d-none');
            buisnessCategory.current.classList.remove('d-block');
            buisnessCategory.current.classList.add('d-none');
            serviceCategory.current.classList.remove('d-block');
            serviceCategory.current.classList.add('d-none');
            jobCategory.current.classList.remove('d-block');
            jobCategory.current.classList.add('d-none');
            electronicsCategory.current.classList.remove('d-block');
            electronicsCategory.current.classList.add('d-none');
        }
        else if (mainCategory.current.value === 'property-sale') {
            motorsCategory.current.classList.remove('d-block');
            motorsCategory.current.classList.add('d-none');
            mobileCategory.current.classList.add('d-none');
            propertySaleCategory.current.classList.add('d-block');
            propertySaleCategory.current.classList.remove('d-none');
            propertyRentCategory.current.classList.remove('d-block');
            propertyRentCategory.current.classList.add('d-none');
            buisnessCategory.current.classList.remove('d-block');
            buisnessCategory.current.classList.add('d-none');
            serviceCategory.current.classList.remove('d-block');
            serviceCategory.current.classList.add('d-none');
            jobCategory.current.classList.remove('d-block');
            jobCategory.current.classList.add('d-none');
            electronicsCategory.current.classList.remove('d-block');
            electronicsCategory.current.classList.add('d-none');
        }
        else if (mainCategory.current.value === 'property-rent') {
            motorsCategory.current.classList.remove('d-block');
            motorsCategory.current.classList.add('d-none');
            mobileCategory.current.classList.add('d-none');
            propertySaleCategory.current.classList.remove('d-block');
            propertySaleCategory.current.classList.add('d-none');
            propertyRentCategory.current.classList.add('d-block');
            propertyRentCategory.current.classList.remove('d-none');
            buisnessCategory.current.classList.remove('d-block');
            buisnessCategory.current.classList.add('d-none');
            serviceCategory.current.classList.remove('d-block');
            serviceCategory.current.classList.add('d-none');
            jobCategory.current.classList.remove('d-block');
            jobCategory.current.classList.add('d-none');
            electronicsCategory.current.classList.remove('d-block');
            electronicsCategory.current.classList.add('d-none');
        }
        else if (mainCategory.current.value === 'find-buisness') {
            motorsCategory.current.classList.remove('d-block');
            motorsCategory.current.classList.add('d-none');
            mobileCategory.current.classList.add('d-none');
            propertySaleCategory.current.classList.remove('d-block');
            propertySaleCategory.current.classList.add('d-none');
            buisnessCategory.current.classList.add('d-block');
            buisnessCategory.current.classList.remove('d-none');
            propertyRentCategory.current.classList.remove('d-block');
            propertyRentCategory.current.classList.add('d-none');
            serviceCategory.current.classList.remove('d-block');
            serviceCategory.current.classList.add('d-none');
            jobCategory.current.classList.remove('d-block');
            jobCategory.current.classList.add('d-none');
            electronicsCategory.current.classList.remove('d-block');
            electronicsCategory.current.classList.add('d-none');
        }
        else if (mainCategory.current.value === 'find-service') {
            motorsCategory.current.classList.remove('d-block');
            motorsCategory.current.classList.add('d-none');
            mobileCategory.current.classList.add('d-none');
            propertySaleCategory.current.classList.remove('d-block');
            propertySaleCategory.current.classList.add('d-none');
            buisnessCategory.current.classList.remove('d-block');
            buisnessCategory.current.classList.add('d-none');
            propertyRentCategory.current.classList.remove('d-block');
            propertyRentCategory.current.classList.add('d-none');
            serviceCategory.current.classList.add('d-block');
            serviceCategory.current.classList.remove('d-none');
            jobCategory.current.classList.remove('d-block');
            jobCategory.current.classList.add('d-none');
            electronicsCategory.current.classList.remove('d-block');
            electronicsCategory.current.classList.add('d-none');
        }
        else if (mainCategory.current.value === 'find-job') {
            motorsCategory.current.classList.remove('d-block');
            motorsCategory.current.classList.add('d-none');
            mobileCategory.current.classList.add('d-none');
            propertySaleCategory.current.classList.remove('d-block');
            propertySaleCategory.current.classList.add('d-none');
            buisnessCategory.current.classList.remove('d-block');
            buisnessCategory.current.classList.add('d-none');
            propertyRentCategory.current.classList.remove('d-block');
            propertyRentCategory.current.classList.add('d-none');
            serviceCategory.current.classList.remove('d-block');
            serviceCategory.current.classList.add('d-none');
            jobCategory.current.classList.add('d-block');
            jobCategory.current.classList.remove('d-none');
            electronicsCategory.current.classList.remove('d-block');
            electronicsCategory.current.classList.add('d-none');
        }
    }

    return (
        <div>
            <Container>
                {/* Form Heading start */}
                <div className="listing-heading">
                    <h1 className="fw-semibold">Post New Ads</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                {/* Form Heading end */}
                {/* Form start */}
                <form>
                    <div className="form-group d-md-flex gap-2">
                        <div className="category w-100">
                            <select className='form-select px-3 py-2' ref={mainCategory} onChange={handleCategory}>
                                <option value="select-category" disabled selected>Select Category</option>
                                <option value="mobiles">Mobiles</option>
                                <option value="motors">Motors</option>
                                <option value="property-sale">Property For Sale</option>
                                <option value="property-rent">Property For Rent</option>
                                <option value="find-buisness">Find a Buisness</option>
                                <option value="find-service">Find a Service</option>
                                <option value="find-job">Find a job</option>
                                <option value="electronics">Electronics & Home Application</option>
                            </select>
                        </div>
                        <div className="sub-category mt-md-0 w-100" ref={mobileCategory}>
                            <select className='form-select px-3 py-2' disabled={!isEnabled}>
                                <option value="select-subcategory" disabled selected>Select Sub-Category</option>
                                <option value="1">Tablets</option>
                                <option value="2">Accessories</option>
                                <option value="3">Mobile Phones</option>
                                <option value="4">Smart Watches</option>
                            </select>
                        </div>
                        <div className="sub-category mt-md-0 w-100 d-none" ref={motorsCategory}>
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Cars</option>
                                <option value="2">Cars On Installments</option>
                                <option value="3">Car Accessories</option>
                                <option value="4">Spare Parts</option>
                                <option value="5">Buses, Vans & Trucks</option>
                                <option value="6">Rickshaw & Chingchi</option>
                                <option value="7">Other Vehicles</option>
                                <option value="8">Boats</option>
                                <option value="9">Tractors & Trailers</option>
                            </select>
                        </div>
                        <div className="sub-category mt-md-0 w-100 d-none" ref={propertySaleCategory}>
                            <select className='form-select px-3 py-2'>
                                <option value="select-subcategory" selected disabled>Select Sub-Category</option>
                                <option value="1">Lands & Plots</option>
                                <option value="2">Houses</option>
                                <option value="3">Apartments</option>
                                <option value="4">Shops - Offices - Commercial Space</option>
                                <option value="5">Portions & Floors</option>
                            </select>
                        </div>
                        <div className="sub-category mt-md-0 w-100 d-none" ref={propertyRentCategory}>
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
                        </div>
                        <div className="sub-category mt-md-0 w-100 d-none" ref={buisnessCategory}>
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
                        </div>
                        <div className="sub-category mt-md-0 w-100 d-none" ref={buisnessCategory}>
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
                        </div>
                        <div className="sub-category mt-md-0 w-100 d-none" ref={serviceCategory}>
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
                        </div>
                        <div className="sub-category mt-md-0 w-100 d-none" ref={jobCategory}>
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
                        </div>
                        <div className="sub-category mt-md-0 w-100 d-none" ref={electronicsCategory}>
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
                        </div>
                    </div>
                </form>
                {/* Form end */}
            </Container>
        </div>
    )
}
