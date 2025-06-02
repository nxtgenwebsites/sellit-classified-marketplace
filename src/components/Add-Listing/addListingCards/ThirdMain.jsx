import React, { useState, useRef } from "react";
import { RiFileUploadLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export default function ThirdMain() {
  // <!-- Images start -->
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

  // <!-- Images end -->
  // <!-- Attachments start -->
  const [documents, setDocuments] = useState([]);
  const fileInputRef2 = useRef();

  const handleUploadClick2 = () => {
    fileInputRef2.current.click();
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newDoc = {
        name: file.name,
        url: URL.createObjectURL(file),
      };
      setDocuments((prev) => [...prev, newDoc]);
    }
  };

  const handleDelete2 = (ind) => {
    setDocuments((prev) => prev.filter((_, i) => i !== ind));
  };
  // <!-- Attachments end -->
  return (
    <div>
      <div className="heading-form">
        <h3 className="fw-bold mb-5">Media</h3>
      </div>
      {/* <!-- Images start --> */}
      <div className="head">
        <h3 className="mb-3 secondary-heading-text">Gallery</h3>
      </div>
      <div className="images w-100 d-lg-flex gap-3">
        {imgSrcs.map((src, index) => (
          <div
            key={index}
            className="preview-div mx-lg-0 mx-auto mb-lg-0 mb-3"
            style={{
              width: "200px",
              height: "200px",
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "1px solid #3a4fc4",
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
        <div
          className="upload-div text-center mx-lg-0 mx-auto"
          onClick={handleUploadClick}
        >
          <div className="logo">
            <RiFileUploadLine />
          </div>
          <p className="content">Upload Images</p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
      {/* <!-- Images end --> */}
      <hr className="my-3" />
      {/* <!-- Attachments start --> */}
      <div className="head">
        <h3 className="secondary-heading-text mb-3">Attachements</h3>
      </div>
      <div className="documents w-100 d-lg-flex gap-3">
        {documents.map((doc, ind) => (
          <div
            key={ind}
            className="preview-div mx-lg-0 mx-auto mb-lg-0 mb-3"
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid #3a4fc4",
              borderRadius: "10px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              padding: "10px",
              overflow: "hidden",
            }}
          >
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#000",
                flexGrow: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {doc.name}
            </a>

            {/* Delete Icon */}
            <button
              className="delete-icon"
              onClick={() => handleDelete2(ind)}
              style={{
                position: "absolute",
                width: "30px",
                height: "30px",
                top: "10px",
                right: "10px",
                background: "#000",
                border: "none",
                borderRadius: "50%",
                color: "#fff",
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
        <div
          className="upload-div text-center mx-lg-0 mx-auto"
          onClick={handleUploadClick2}
          style={{ cursor: "pointer" }}
        >
          <div className="logo">
            <RiFileUploadLine />
          </div>
          <p className="content">Upload Docs</p>
        </div>
        <input
          type="file"
          ref={fileInputRef2}
          onChange={handleFileChange2}
          style={{ display: "none" }}
        />
      </div>
      {/* <!-- Attachments end --> */}
    </div>
  );
}
