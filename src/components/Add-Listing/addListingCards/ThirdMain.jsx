import React, { useState, useRef } from "react";
import { RiFileUploadLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export default function ThirdMain() {
  const [imgSrcs, setImgSrcs] = useState([]);
  const fileInputRef = useRef();

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImgSrcs((prev) => [...prev, imageUrl]);
    }
  };

  const handleDelete = (index) => {
    setImgSrcs((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="heading-form">
        <h3 className="fw-bold mb-5">Media</h3>
      </div>
      <div className="inputs w-100 d-lg-flex gap-3">
        {imgSrcs.map((src, index) => (
          <div
            key={index}
            className="preview-div"
            style={{
              width: "200px",
              height: "200px",
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            {/* Delete Icon */}
            <button
              className="delete-icon"
              onClick={() => handleDelete(index)}
              style={{
                position: "absolute",
                width: "30px",
                height: "30px",
                top: "10px",
                right: "10px",
                background: "#fff",
                border: "none",
                borderRadius: "50%",
                color: "#000",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RxCross2 size={20} />
            </button>
          </div>
        ))}
        {/* Upload Div */}
        <div className="upload-div text-center" onClick={handleUploadClick}>
          <div className="logo">
            <RiFileUploadLine />
          </div>
          <div className="content">Upload</div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}
