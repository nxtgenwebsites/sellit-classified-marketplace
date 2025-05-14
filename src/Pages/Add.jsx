import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdGrid3X3, MdOutlineDateRange } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Play } from "lucide-react";
import InspectionReport from "../components/Home/InspectionReport";

function AddPage() {
  const [showNumber, setShowNumber] = useState(false);

  const handleShowNumber = () => {
    setShowNumber(true);
  };

  return (
    <div className="app-container max-w-7xl mx-auto px-4 py-6">
      {/* Simple Navigation */}
      <div className="simple-nav text-sm text-gray-500 mb-4">
        <p>Home / Search Result / Motors / Boat</p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <ProductPage
          showNumber={showNumber}
          handleShowNumber={handleShowNumber}
        />
      </div>
    </div>
  );
}

// Product Page Component
function ProductPage({ showNumber, handleShowNumber }) {
  return (
    <div className="product-page">
      <div className="product-header flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
        <div className="product-title">
          <h1 className="text-2xl md:text-3xl font-bold">
            Selling Sun Odyssey 380
          </h1>
          <div className="product-tags flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
            <span className="tag flex items-center">
              <CiLocationOn className="text-gray-500" />
              <span className="mx-2">Islamabad</span>
            </span>
            <span className="tag flex items-center">
              <MdOutlineDateRange className="text-gray-500" />
              <span className="mx-2">June 12, 2024</span>
            </span>
            <span className="tag flex items-center">
              <GrView className="text-gray-500" />
              <span className="mx-2">June 12, 2024</span>
            </span>
            <span className="tag flex items-center">
              <MdGrid3X3 className="text-gray-500" />
              <span className="mx-2">26122024</span>
            </span>
          </div>
        </div>
        <div className="product-price text-right">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500">
            $45,900
          </h2>
          <span className="price-tag inline-block bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm">
            Fixed
          </span>
        </div>
      </div>

      <div className="product-content flex flex-col lg:flex-row gap-6">
        <div className="product-main lg:w-2/3">
          {/* Product Gallery */}
          <div className="product-gallery mb-8 border rounded-lg overflow-hidden">
            <div className="main-image w-full h-[300px] md:h-[400px] overflow-hidden">
              <img
                src="https://media.fraseryachts.com/Yachts/Y280_NF_MC/images/website/01_KHALILAH_Main+running+shot_LR-BD6fccJ1.jpg?vh=b362d5&w=1440&h=900&p=yacht-thumbnail"
                alt="Main boat view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="thumbnail-container grid grid-cols-4 gap-2 p-2">
              <div className="thumbnail h-20 overflow-hidden rounded cursor-pointer">
                <img
                  src="https://siyachts.imgix.net/photos/pages/correct/used-sunseeker-yachts-for-sale-header1.jpg?auto=format&w=1050&fit=clip&lossless=1"
                  alt="Thumbnail 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="thumbnail h-20 overflow-hidden rounded cursor-pointer">
                <img
                  src="https://cdn.yachtbroker.org/images/highdef/2827225_5420f842_40.jpg"
                  alt="Thumbnail 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="thumbnail h-20 overflow-hidden rounded cursor-pointer">
                <img
                  src="https://cdn.yachtbroker.org/images/highdef/2827225_5420f842_40.jpg"
                  alt="Thumbnail 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="thumbnail h-20 overflow-hidden rounded cursor-pointer">
                <img
                  src="https://cdn.yachtbroker.org/images/highdef/2827225_5420f842_40.jpg"
                  alt="Thumbnail 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Overview */}
          <div className="product-section mb-8 p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <div className="specs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="spec-item">
                <span className="spec-label text-gray-500">Condition:</span>
                <span className="spec-value font-medium ml-2">Used</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Make:</span>
                <span className="spec-value font-medium ml-2">Used</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Length:</span>
                <span className="spec-value font-medium ml-2">18.45</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Width:</span>
                <span className="spec-value font-medium ml-2">4.78</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Weight:</span>
                <span className="spec-value font-medium ml-2">9420</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Depth:</span>
                <span className="spec-value font-medium ml-2">99</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">
                  Engine Performance:
                </span>
                <span className="spec-value font-medium ml-2">430</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Year Built:</span>
                <span className="spec-value font-medium ml-2">2024</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">
                  Certified nr. of persons:
                </span>
                <span className="spec-value font-medium ml-2">7</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Material:</span>
                <span className="spec-value font-medium ml-2">GRP</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Propulsion:</span>
                <span className="spec-value font-medium ml-2">Sterndrive</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Fuel Type:</span>
                <span className="spec-value font-medium ml-2">Diesel</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Fuel Capacity:</span>
                <span className="spec-value font-medium ml-2">746</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Keel Type:</span>
                <span className="spec-value font-medium ml-2">Any</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Steering:</span>
                <span className="spec-value font-medium ml-2">Any</span>
              </div>
              <div className="spec-item">
                <span className="spec-label text-gray-500">Beds:</span>
                <span className="spec-value font-medium ml-2">6</span>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="product-section mb-8 p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          {/* Product Features */}
          <div className="product-section mb-8 p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="feature-item">
                <span className="features-check-icon mx-2">✓</span>
                <span className="text-green-600">Air Conditioning</span>
              </div>
              <div className="feature-item">
                <span className="features-check-icon mx-2">✓</span>
                <span className="text-green-600">Refrigerator</span>
              </div>
              <div className="feature-item">
                <span className="features-check-icon mx-2">✓</span>
                <span className="text-green-600">Shower</span>
              </div>
              <div className="feature-item">
                <span className="features-check-icon mx-2">✓</span>
                <span className="text-green-600">Navigation System</span>
              </div>
              <div className="feature-item">
                <span className="features-check-icon mx-2">✓</span>
                <span className="text-green-600">Autopilot</span>
              </div>
              <div className="feature-item">
                <span className="features-check-icon mx-2">✓</span>
                <span className="text-green-600">Radar</span>
              </div>
              <div className="feature-item">
                <span className="features-check-icon mx-2">✓</span>
                <span className="text-green-600">Solar Panels</span>
              </div>
              <div className="feature-item">
                <span className="features-check-icon mx-2">✓</span>
                <span className="text-green-600">Satellite Phone</span>
              </div>
            </div>
          </div>

          {/* Attachments Section */}
              <InspectionReport/>

          {/* Video Section */}
          <div className="product-section mb-8 p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Video</h3>
            <div className="video-container aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src="https://media.istockphoto.com/id/1505840199/video/luxury-black-car-on-highway-very-fast-driving.jpg?b=1&s=640x640&k=20&c=ev1MqpUNWTWPbGU4qFvysfjQdln41FBaIHvszdi9WXY="
                alt="Video thumbnail"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="video-play-icon">
                <Play />
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="product-section mb-8 p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <div className="map-container aspect-video bg-gray-100 rounded-lg">
              <iframe
                src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
                className="w-full h-full border-0 rounded-lg"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="product-sidebar lg:w-1/3">
          {/* Seller Info */}
          <div className="sidebar-card p-6 border rounded-lg sticky top-4">
            <div className="seller-info flex items-center gap-4 mb-4">
              <img
                src="https://images.ctfassets.net/4cd45et68cgf/564owNzMKj6UGjvTEZkKSJ/c853cf640796fcd532d60c23fc57f6b6/Rowan_Atkinson_credit__Alastair_Muir.jpg?w=2000"
                alt="Seller"
                className="seller-avatar w-14 h-14 rounded-full object-cover"
              />
              <div className="seller-details">
                <h4 className="font-semibold">Ali Tufan</h4>
                <p className="text-sm text-gray-500">
                  Member since Nov 24, 2024
                </p>
              </div>
            </div>
            <div className="seller-location space-y-3 mb-4">
              <p className="flex items-center gap-2 text-gray-700">
                <FaMapMarkerAlt className="text-gray-500" /> New York, NY, USA
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <FaPhone className="text-gray-500" />
                {showNumber ? "+90 5743 845825" : "************"}
              </p>
              <button
                className="btn show-number-btn w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition"
                onClick={handleShowNumber}
              >
                Show Number
              </button>
            </div>
            <div className="seller-buttons">
              <button className="btn chat-btn">Let's Chat →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPage;


