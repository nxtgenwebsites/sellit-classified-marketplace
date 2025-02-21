import React, { useState } from 'react';
import '../Home/css/mobile-css.css'
import { Col, Row } from 'react-bootstrap'
import Card from './CategoryCards/Mobile/Card';
import CategoryContentData from './data/CategoryContentData.json'
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function MobileContent() {
    const [sortText, setSortText] = useState("Sort by");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const businessAds = CategoryContentData.Mobile || [];
    const totalPages = Math.ceil(businessAds.length / itemsPerPage);
    const firstItem = (currentPage - 1) * itemsPerPage;
    const lastItem = firstItem + itemsPerPage;
    const currentItems = businessAds.slice(firstItem, lastItem);
    function updateSortText(text) {
        setSortText(text);
    }
    return (
        <div className="page-wrapper">
            <div className="mobile-heading mb-3 d-flex w-100 justify-content-between">
                <div className="left-heading rounded-1">
                    <h6 className="left-title m-0 mt-1">10,000 ads</h6>
                </div>
                <div className="right-heading d-flex align-items-center gap-3">
                    <div className="second-mobile-heading">
                        <div className="dropdown">
                            <button
                                type="button"
                                id="sortButton"
                                aria-expanded="false"
                                className="btn right-button"
                                data-bs-toggle="dropdown"
                            >
                                {sortText} {/* This will update dynamically */}
                                <span className="dropdown-btn">
                                    <img src="assets/icons/chevron.svg" alt="IMG" className="ms-1" />
                                </span>
                            </button>
                            <div className="dropdown-menu right-menu">
                                <button
                                    type="button"
                                    className="dropdown-item p-2 sort-item"
                                    onClick={() => updateSortText("Most Viewed")}
                                >
                                    Most Viewed
                                </button>
                                <button
                                    type="button"
                                    className="dropdown-item p-2 sort-item"
                                    onClick={() => updateSortText("Recently Posted")}
                                >
                                    Recently Posted
                                </button>
                                <button
                                    type="button"
                                    className="dropdown-item p-2 sort-item"
                                    onClick={() => updateSortText("Price: Low to High")}
                                >
                                    Price: Low to High
                                </button>
                                <button
                                    type="button"
                                    className="dropdown-item p-2 sort-item"
                                    onClick={() => updateSortText("Price: High to Low")}
                                >
                                    Price: High to Low
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured Ads start */}
            <Row className="row-gap-2">
                {currentItems.map((mobile, i) => (
                    <Card mobile={mobile} key={i} />
                ))}
            </Row>
            {/* Featured Ads end */}

            <div className="pagination-section my-3">
                <div className="d-flex justify-content-center align-items-center mt-3">
                    {/* Previous Button */}
                    <button
                        className={`btn border-0 me-2 arrow-btn ${currentPage === 1 ? 'arrow-disabled' : 'arrow-active'}`}
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        <BsArrowLeft />
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                        const pageNum = index + 1;
                        return (
                            <button
                                key={pageNum}
                                className={`btn mx-1 ${currentPage === pageNum ? "btn-active" : "btn-unactive"}`}
                                onClick={() => setCurrentPage(pageNum)}
                            >
                                {pageNum}
                            </button>
                        );
                    })}

                    {/* Next Button */}
                    <button
                        className={`btn ms-2 arrow-btn ${currentPage === totalPages ? 'arrow-disabled' : 'arrow-active'}`}
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        <BsArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}
