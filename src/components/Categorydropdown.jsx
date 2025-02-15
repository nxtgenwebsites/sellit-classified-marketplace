import React, { useState } from 'react'
import "../universal-css/dropdown.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { CiMobile3 } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa6";
import { BsHouseDoor } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa6";

export default function Categorydropdown() {
    function Toggle() {
        document.querySelector('.dropdown-btn img').classList.toggle("rotate");
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="d-block-dropdown mt-3">
                <div className="container">
                    <div className="dropdown-first d-flex w-100 gap-3">
                        <Dropdown className="category-dropdown">
                            <Dropdown.Toggle type="button" className="btn main-heading bg-transparent text-black border-0 w-100 d-xl-block d-none" aria-expanded="false" data-bs-toggle="dropdown">
                                ALL CATEGORIES <span className="ms-1 dropdown-btn"><img src="assets/icons/chevron.svg"
                                    alt="IMG" onClick={Toggle} /></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="category-menu">
                                <div className="wrapper d-flex w-100">
                                    <div className="categories-menu">
                                        <ul className="dropdown-list">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Mobiles</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Mobile Phones</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Accessories</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Smart Watches</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Tablets</a>
                                            </Dropdown.Item>
                                        </ul>
                                        <ul className="dropdown-list mt-5">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Vehicles</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Cars</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Cars Accessories</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Spare Parts</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Buses, Vans & Trucks</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Rickshaw & Chingchi</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Tractors & Trailers</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Cars on Installments</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Other Vehicles</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Boats</a>
                                            </Dropdown.Item>
                                        </ul>
                                        <ul className="dropdown-list mt-5">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Property for Sale</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Land & Plots</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Houses</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Apartements & Flats</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Shops - Offices - Commercial Space</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Portions & Floors</a>
                                            </Dropdown.Item>
                                        </ul>
                                        <ul className="dropdown-list mt-5">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Property for Sale</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Land & Plots</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Houses</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Apartements & Flats</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Shops - Offices - Commercial Space</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Portions & Floors</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Roommates & Paying Guests</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Vacation Rentals - Guest Houses</a>
                                            </Dropdown.Item>
                                        </ul>
                                        <ul className="dropdown-list mt-5">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Electronics & Home Applications</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Computers & Accessories</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Televisions & Accessories</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Generators, UPS & Power Solutions</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Cameras & Accessories</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Heaters & Geysers</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Games & Entertainment</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Kitchen Applications</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Video-Audios</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Refrigerators & Freezers</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Other Home Applications</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">AC & Coolers</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Washhing Machines & Dryers</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Fans</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Microwaves & Ovens</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Sewing Machines</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Irons & Steamers</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Water Dispensers</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Air Purifiers & Humifiers</a>
                                            </Dropdown.Item>
                                        </ul>
                                    </div>
                                    <div className="categories-menu">
                                        <ul className="dropdown-list">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Bikes</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Motorcycles</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Bicycles</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Spare Parts</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Bike Accessories</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Scooters</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">ATV & Quads</a>
                                            </Dropdown.Item>
                                        </ul>
                                        <ul className="dropdown-list mt-5">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Buisness, Industrial & Agriculture</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Other Buisness & Industry</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Food & Resturant</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Medical & Pharma</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Trade & Industrial Machinery</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Construction & Heavy Machinery</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Buisness for Sale</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Agriculture</a>
                                            </Dropdown.Item>
                                        </ul>
                                        <ul className="dropdown-list mt-5">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Property for Sale</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Land & Plots</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Houses</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Apartements & Flats</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Shops - Offices - Commercial Space</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Portions & Floors</a>
                                            </Dropdown.Item>
                                        </ul>
                                    </div>
                                    <div className="categories-menu">
                                        <ul className="dropdown-list">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Jobs</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Other Jobs</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Online</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Part Time</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Sales</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Customer Services</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Marketing</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Restraunts & Hospitality</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Education</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Domestic Staff</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Medical</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Accounting & Finance</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Graphic Design</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Delivery Riders</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">IT & Networking</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Hotels & Tourism</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Security</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Content Writing</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Manufacturing</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Clerical & Administration</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Human Resources</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Engineering</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Real Estate</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Advertising & PR</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Internships</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Architecture & Interior Design</a>
                                            </Dropdown.Item>
                                        </ul>
                                        <ul className="dropdown-list mt-5">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Animals</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Hens</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Parrots</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Cats</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Dogs</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Pet Food & Accessories</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Livestock</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Pigeons</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Finches</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Fish</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Rabbits</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Fertile Eggs</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Other Birds</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Ducks</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Doves</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Other Animals</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Peacocks</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Horses</a>
                                            </Dropdown.Item>
                                        </ul>
                                    </div>
                                    <div className="categories-menu">
                                        <ul className="dropdown-list">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Furniture & Home Decor</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Sofa & Chairs</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Beds & Wardrobes</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Tablets & Dining</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Other Household Items</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Office Furniture</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Home Decoration</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Garden & Outdoor</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Painting & Mirrors</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Curtains & Blinds</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Rugs & Carpets</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Bathroom Accessories</a>
                                            </Dropdown.Item>
                                        </ul>
                                        <ul className="dropdown-list mt-5">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Fashion & Beauty</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Clothes</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Wedding</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Watches</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Footwear</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Skin & Hair</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Jewellery</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Bags</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Fragrance</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Fashion Accessories</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Makeup</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Other Fashion</a>
                                            </Dropdown.Item>
                                        </ul>
                                        <ul className="dropdown-list mt-5">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Books, Sports & Hobbies</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Other Hobbies</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Gym Fitness</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Sports Equipment</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Books & Magazines</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Musical Instruments</a>
                                            </Dropdown.Item>
                                        </ul>
                                        <ul className="dropdown-list mt-5">
                                            <a href="#" className="dropdown-link">
                                                <h6 className="dropdown-heading">Kids</h6>
                                            </a>
                                            <Dropdown.Item className="dropdown-item mt-3">
                                                <a href="#" className="dropdown-link">Baby Gear</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Kids Vehicles</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Toys</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Kids Clothing</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Swings & Slides</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Kids Accessories</a>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">
                                                <a href="#" className="dropdown-link">Bath & Diapers</a>
                                            </Dropdown.Item>
                                        </ul>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="category-wrapper d-lg-flex align-items-center gap-3">
                            <Dropdown className="category-item">
                                <Dropdown.Toggle className='bg-transparent border-0'>
                                    <h6 className="fw-medium text-black">Motors<span><img src="/assets/icons/chevron.svg" alt="" className='ms-2' /></span></h6>

                                </Dropdown.Toggle>
                                <Dropdown.Menu className='mt-n1 p-0 menu-ca'>
                                    <Dropdown.Item className='dropdown-item p-2 rounded-top-2'>
                                        <Link to={'/cars-category'} className="category-link d-flex align-items-center gap-2"><IoCarSportOutline className='category-icon' /> Cars</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item p-2 rounded-bottom-2'>
                                        <Link to={'/motorcycle-category'} className="category-link d-flex align-items-center gap-2"><FaMotorcycle className='category-icon' /> Motorcycles</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="category-item">
                                <Dropdown.Toggle className='bg-transparent border-0'>
                                    <h6 className="fw-medium text-black">Property<span><img src="/assets/icons/chevron.svg" alt="" className='ms-2' /></span></h6>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='mt-n1 p-0 menu-ca'>
                                    <Dropdown.Item className='dropdown-item p-2 rounded-top-2'>
                                        <Link to={'/property-sale'} className="category-link d-flex align-items-center gap-2"><BsHouseDoor className='category-icon' /> Property For Sale</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item p-2 rounded-bottom-2'>
                                        <Link to={'/property-rent'} className="category-link d-flex align-items-center gap-2"><BsHouseDoor className='category-icon' /> Property For Rent</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="category-item">
                                <Dropdown.Toggle className='bg-transparent border-0'>
                                    <h6 className="fw-medium text-black">Buisnesses<span><img src="/assets/icons/chevron.svg" alt="" className='ms-2' /></span></h6>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='mt-n1 p-0 menu-ca'>
                                    <Dropdown.Item className='dropdown-item p-2 rounded-top-2'>
                                        <Link to={'/buisness-category'} className="category-link d-flex align-items-center gap-2"><IoBriefcaseOutline className='category-icon' /> Find A Buisness</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item p-2'>
                                        <Link to={'/service-category'} className="category-link d-flex align-items-center gap-2"><FaHeadset className='category-icon' /> Find a Service Provider</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item p-2 rounded-bottom-2'>
                                        <Link to={'/job-category'} className="category-link d-flex align-items-center gap-2"><IoBriefcaseOutline className='category-icon' /> Find a Job</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="category-item">
                                <Dropdown.Toggle className='bg-transparent border-0'>
                                    <h6 className="fw-medium text-black">Electronics<span><img src="/assets/icons/chevron.svg" alt="" className='ms-2' /></span></h6>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='mt-n1 p-0'>
                                    <Dropdown.Item className='dropdown-item p-2 rounded-2'>
                                        <Link to={'/mobiles-category'} className="category-link d-flex align-items-center gap-2"><CiMobile3 className='category-icon' /> Mobiles</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button onClick={handleShow} className='bg-transparent border-0 d-xl-none offcanvas-btn'>
                                <span>See All</span>
                            </Button>
                            <Offcanvas show={show} onHide={handleClose} className="p-2 header-offcanvas d-xl-none">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>
                                        <h1 className="offcanvas-title"><img src="/assets/icons/Offcanvas-logo.png" alt="IMG" width={200} /></h1>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className="wrapper">
                                        <div className="categories-menu">
                                            <ul className="dropdown-list">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Mobiles</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Mobile Phones</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Accessories</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Smart Watches</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Tablets</a>
                                                </li>
                                            </ul>
                                            <ul className="dropdown-list mt-5">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Vehicles</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Cars</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Cars Accessories</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Spare Parts</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Buses, Vans & Trucks</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Rickshaw & Chingchi</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Tractors & Trailers</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Cars on Installments</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Other Vehicles</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Boats</a>
                                                </li>
                                            </ul>
                                            <ul className="dropdown-list mt-5">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Property for Sale</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Land & Plots</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Houses</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Apartements & Flats</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Shops - Offices - Commercial Space</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Portions & Floors</a>
                                                </li>
                                            </ul>
                                            <ul className="dropdown-list mt-5">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Property for Sale</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Land & Plots</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Houses</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Apartements & Flats</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Shops - Offices - Commercial Space</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Portions & Floors</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Roommates & Paying Guests</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Vacation Rentals - Guest Houses</a>
                                                </li>
                                            </ul>
                                            <ul className="dropdown-list mt-5">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Electronics & Home Applications</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Computers & Accessories</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Televisions & Accessories</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Generators, UPS & Power Solutions</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Cameras & Accessories</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Heaters & Geysers</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Games & Entertainment</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Kitchen Applications</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Video-Audios</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Refrigerators & Freezers</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Other Home Applications</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">AC & Coolers</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Washhing Machines & Dryers</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Fans</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Microwaves & Ovens</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Sewing Machines</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Irons & Steamers</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Water Dispensers</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Air Purifiers & Humifiers</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="categories-menu">
                                            <ul className="dropdown-list">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Bikes</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Motorcycles</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Bicycles</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Spare Parts</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Bike Accessories</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Scooters</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">ATV & Quads</a>
                                                </li>
                                            </ul>
                                            <ul className="dropdown-list mt-5">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Buisness, Industrial & Agriculture</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Other Buisness & Industry</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Food & Resturant</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Medical & Pharma</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Trade & Industrial Machinery</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Construction & Heavy Machinery</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Buisness for Sale</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Agriculture</a>
                                                </li>
                                            </ul>
                                            <ul className="dropdown-list mt-5">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Property for Sale</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Land & Plots</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Houses</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Apartements & Flats</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Shops - Offices - Commercial Space</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Portions & Floors</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="categories-menu">
                                            <ul className="dropdown-list">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Jobs</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Other Jobs</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Online</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Part Time</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Sales</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Customer Services</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Marketing</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Restraunts & Hospitality</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Education</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Domestic Staff</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Medical</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Accounting & Finance</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Graphic Design</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Delivery Riders</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">IT & Networking</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Hotels & Tourism</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Security</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Content Writing</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Manufacturing</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Clerical & Administration</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Human Resources</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Engineering</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Real Estate</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Advertising & PR</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Internships</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Architecture & Interior Design</a>
                                                </li>
                                            </ul>
                                            <ul className="dropdown-list mt-5">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Animals</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Hens</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Parrots</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Cats</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Dogs</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Pet Food & Accessories</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Livestock</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Pigeons</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Finches</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Fish</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Rabbits</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Fertile Eggs</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Other Birds</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Ducks</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Doves</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Other Animals</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Peacocks</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Horses</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="categories-menu">
                                            <ul className="dropdown-list">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Furniture & Home Decor</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Sofa & Chairs</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Beds & Wardrobes</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Tablets & Dining</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Other Household Items</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Office Furniture</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Home Decoration</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Garden & Outdoor</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Painting & Mirrors</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Curtains & Blinds</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Rugs & Carpets</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Bathroom Accessories</a>
                                                </li>
                                            </ul>
                                            <ul className="dropdown-list mt-5">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Fashion & Beauty</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Clothes</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Wedding</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Watches</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Footwear</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Skin & Hair</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Jewellery</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Bags</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Fragrance</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Fashion Accessories</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Makeup</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Other Fashion</a>
                                                </li>
                                            </ul>
                                            <ul className="dropdown-list mt-5">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Books, Sports & Hobbies</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Other Hobbies</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Gym Fitness</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Sports Equipment</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Books & Magazines</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Musical Instruments</a>
                                                </li>
                                            </ul>
                                            <ul className="dropdown-list mt-5">
                                                <a href="#" className="dropdown-link">
                                                    <h6 className="dropdown-heading">Kids</h6>
                                                </a>
                                                <li className="dropdown-item mt-3">
                                                    <a href="#" className="dropdown-link">Baby Gear</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Kids Vehicles</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Toys</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Kids Clothing</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Swings & Slides</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Kids Accessories</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="dropdown-link">Bath & Diapers</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}