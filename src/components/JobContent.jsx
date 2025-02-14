import React, { useState } from 'react';
import '../CSS/mobile-css.css'
import { Col, Row } from 'react-bootstrap'
import Card1 from './CategoryCards/Job/Card1';
import Card2 from './CategoryCards/Job/Card2';

export default function JobContent() {
    const featuredAds = Array.from({ length: 10 });
    const freeAds = Array.from({ length: 5 });
    const [sortText, setSortText] = useState("Sort by");
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
                <Row className="row-gap-2">
                    {featuredAds.map((i) => (
                        <Card1 key={i} />
                    ))}
                    {freeAds.map((i) => (
                        <Card2 key={i} />
                    ))}
                </Row>
            </Row>
            {/* Featured Ads end */}
            <div className="pagination-section my-3">
                a
            </div>
        </div>
    )
}
