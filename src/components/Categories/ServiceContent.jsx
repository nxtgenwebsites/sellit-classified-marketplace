import React, { useState } from 'react';
import '../Home/css/mobile-css.css'
import { Col, Row } from 'react-bootstrap'
import Card from './CategoryCards/Service Provider/Card';
import CategoryContentData from './data/CategoryContentData.json'

export default function ServiceContent() {
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
                {CategoryContentData.Service.map((service, i) => (
                    <Card service={service} key={i} />
                ))}
            </Row>
            {/* Featured Ads end */}
            <div className="pagination-section my-3">
                a
            </div>
        </div>
    )
}
