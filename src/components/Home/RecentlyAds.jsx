import React from 'react'
import '../Home/css/Buy-and-sell.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card1 from "./RecentAdsCards/Card1";
import Card2 from "./RecentAdsCards/Card2";
import RecentCardData from "../../data/Home_Data/RecentCardData.json";

function RecentlyAds() {

    return (
        <div>
            <section className="buy-ans-sell-section">
                <Container>
                    <div className="buy-sell-heading">
                        <div className="left-title">
                            <h1 className="fw-semibold">Recently Posted Ads</h1>
                        </div>
                    </div>
                    <ul className="nav nav-tabs tabs" id="myTab" role="tablist">
                        <li className="nav-item buy-tabs" role="presentation">
                            <button className="nav-link active tab-btn" id="raw-tab" data-bs-toggle="tab" data-bs-target="#Raw"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Rawalpindi</button>
                        </li>
                        <li className="nav-item buy-tabs" role="presentation">
                            <button className="nav-link tab-btn" id="isl-tab" data-bs-toggle="tab" data-bs-target="#Isl"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">Islamabad</button>
                        </li>
                        <li className="nav-item buy-tabs" role="presentation">
                            <button className="nav-link tab-btn" id="lah-tab" data-bs-toggle="tab" data-bs-target="#Lah"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Lahore</button>
                        </li>
                        <li className="nav-item buy-tabs" role="presentation">
                            <button className="nav-link tab-btn" id="mul-tab" data-bs-toggle="tab" data-bs-target="#Mul"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Multan</button>
                        </li>
                        <li className="nav-item buy-tabs" role="presentation">
                            <button className="nav-link tab-btn" id="kar-tab" data-bs-toggle="tab" data-bs-target="#Kar"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Karachi</button>
                        </li>
                        <li className="nav-item buy-tabs" role="presentation">
                            <button className="nav-link tab-btn" id="kpk-tab" data-bs-toggle="tab" data-bs-target="#KPK"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Peshawar</button>
                        </li>
                    </ul>
                    <div className="tab-content mt-4" id="myTabContent">
                        <div className="tab-pane fade show active" id="Raw" role="tabpanel" aria-labelledby="raw-tab">
                            <Row className='row-gap-3'>
                                {
                                    RecentCardData.recentAds.map((ads, i) => (
                                        <Card1 ads={ads} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.advertisement.map((advertise, i) => (
                                        <Card2 advertise={advertise} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.recentAds.map((ads, i) => (
                                        <Card1 ads={ads} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.advertisement.map((advertise, i) => (
                                        <Card2 advertise={advertise} key={i} />
                                    ))
                                }
                            </Row>
                        </div>
                        <div className="tab-pane fade" id="Isl" role="tabpanel" aria-labelledby="isl-tab">
                            <Row className='row-gap-3'>
                                {
                                    RecentCardData.recentAds.map((ads, i) => (
                                        <Card1 ads={ads} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.advertisement.map((advertise, i) => (
                                        <Card2 advertise={advertise} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.recentAds.map((ads, i) => (
                                        <Card1 ads={ads} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.advertisement.map((advertise, i) => (
                                        <Card2 advertise={advertise} key={i} />
                                    ))
                                }
                            </Row>
                        </div>
                        <div className="tab-pane fade" id="Lah" role="tabpanel" aria-labelledby="lah-tab">
                            <Row className='row-gap-3'>
                                {
                                    RecentCardData.recentAds.map((ads, i) => (
                                        <Card1 ads={ads} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.advertisement.map((advertise, i) => (
                                        <Card2 advertise={advertise} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.recentAds.map((ads, i) => (
                                        <Card1 ads={ads} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.advertisement.map((advertise, i) => (
                                        <Card2 advertise={advertise} key={i} />
                                    ))
                                }
                            </Row>
                        </div>
                        <div className="tab-pane fade" id="Mul" role="tabpanel" aria-labelledby="mul-tab">
                            <Row className='row-gap-3'>
                                {
                                    RecentCardData.recentAds.map((ads, i) => (
                                        <Card1 ads={ads} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.advertisement.map((advertise, i) => (
                                        <Card2 advertise={advertise} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.recentAds.map((ads, i) => (
                                        <Card1 ads={ads} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.advertisement.map((advertise, i) => (
                                        <Card2 advertise={advertise} key={i} />
                                    ))
                                }
                            </Row>
                        </div>
                        <div className="tab-pane fade" id="Kar" role="tabpanel" aria-labelledby="kar-tab">
                            <Row className='row-gap-3'>
                                {
                                    RecentCardData.recentAds.map((ads, i) => (
                                        <Card1 ads={ads} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.advertisement.map((advertise, i) => (
                                        <Card2 advertise={advertise} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.recentAds.map((ads, i) => (
                                        <Card1 ads={ads} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.advertisement.map((advertise, i) => (
                                        <Card2 advertise={advertise} key={i} />
                                    ))
                                }
                            </Row>
                        </div>
                        <div className="tab-pane fade" id="KPK" role="tabpanel" aria-labelledby="kpk-tab">
                            <Row className='row-gap-3'>
                                {
                                    RecentCardData.recentAds.map((ads, i) => (
                                        <Card1 ads={ads} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.advertisement.map((advertise, i) => (
                                        <Card2 advertise={advertise} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.recentAds.map((ads, i) => (
                                        <Card1 ads={ads} key={i} />
                                    ))
                                }
                                {
                                    RecentCardData.advertisement.map((advertise, i) => (
                                        <Card2 advertise={advertise} key={i} />
                                    ))
                                }
                            </Row>
                        </div>
                    </div>
                    <div className="load-more-btn text-center">
                        <button type="button">Load More</button>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default RecentlyAds