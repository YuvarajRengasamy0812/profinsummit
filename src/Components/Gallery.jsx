import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  Share2,
  X,
} from "lucide-react";
import { getAllGallery } from "../api/gallery";

export default function Gallery({ limit = null }) {
  const [images, setImages] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null); // should be null initially
  const [zoom, setZoom] = useState(1);
  const [filteredImages, setFilteredImages] = useState([]);
  const imgRef = useRef(null);

  useEffect(() => {
    getGalleryList();
  }, []);

  useEffect(() => {
    filterImages();
  }, [images, activeTab, limit]);

  const getGalleryList = () => {
    getAllGallery()
      .then((res) => setImages(res?.data?.items || []))
      .catch((err) => console.log(err));
  };

  const filterImages = () => {
    let filtered =
      activeTab === "All"
        ? images
        : images.filter((img) => img.category === activeTab);

    if (limit) filtered = filtered.slice(0, limit);
    setFilteredImages(filtered);
  };

  const categories = ["All", ...new Set(images.map((img) => img.category))];

  // Correct openLightbox function
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setZoom(1);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
    setZoom(1);
  };

  const nextImage = () => {
    setLightboxIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
    setZoom(1);
  };

  const downloadImg = () => {
  const imgUrl = filteredImages[lightboxIndex]?.full || filteredImages[lightboxIndex]?.image;
  if (!imgUrl) return;

  const link = document.createElement("a");
  link.href = imgUrl;
  link.download = "image.jpg"; // may not work if cross-origin, browser may open in new tab instead
  link.target = "_blank";      // open in new tab
  link.click();
};


 const shareImg = async () => {
  const url = filteredImages[lightboxIndex]?.full || filteredImages[lightboxIndex]?.image;
  if (!url) return;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Gallery Image",
        url,
      });
    } catch (err) {
      console.error("Error sharing image:", err);
    }
  } else {
    // Fallback: copy URL to clipboard
    try {
      await navigator.clipboard.writeText(url);
      alert("Image URL copied to clipboard!");
    } catch {
      alert("Sharing not supported on this device.");
    }
  }
};


  return (
    <div className="premium-gallery container">
      {/* CATEGORY TABS */}
      {!limit && (
        <div className="filter-buttons d-inline-flex gap-3 flex-wrap pt-2 pb-5 align-items-center w-100 justify-content-center">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`filter-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* GALLERY GRID */}
      <div className="row fade-animation">
        {filteredImages.map((img, i) => (
          <div key={i} className="col-lg-4 col-md-6 mb-3 px-2 gallery-img-item">
            <img
              src={img.image}
              alt={img.alt}
              className="w-100 rounded shadow-sm hover-scale"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(i)} // pass index
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="lightbox position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.85)", zIndex: 2000 }}
        >
          <button
            className="position-absolute start-0 bg-transparent border-0 text-white ms-3 p-0"
            style={{ left: 20, zIndex: 2 }}
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>

          <img
            ref={imgRef}
            src={filteredImages[lightboxIndex]?.full || filteredImages[lightboxIndex]?.image}
            alt={filteredImages[lightboxIndex]?.alt || "image"}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              transform: `scale(${zoom})`,
              transition: "0.3s",
            }}
            draggable
          />


          <button
            className="position-absolute end-0 bg-transparent border-0 text-white me-3 p-0"
            style={{ right: 20 }}
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>

          <div className="toolbar position-absolute d-flex gap-2">
            <button className="btn btn-light" onClick={() => setZoom((z) => z + 0.2)}>
              <ZoomIn />
            </button>
            <button
              className="btn btn-light"
              onClick={() => setZoom((z) => Math.max(1, z - 0.2))}
            >
              <ZoomOut />
            </button>
            <button className="btn btn-light" onClick={shareImg}>
              <Share2 />
            </button>
            <button className="btn btn-light" onClick={downloadImg}>
              <Download />
            </button>
            <button className="btn btn-light" onClick={closeLightbox}>
              <X size={32} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .hover-scale:hover { transform: scale(1.03); transition: 0.3s; }
        .fade-animation { animation: fadeIn 0.4s ease-in-out; }
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(10px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .toolbar button { background: transparent !important; border: none !important; color: #adadad !important; padding: 6px; }
        .toolbar svg { width: 20px; height: 20px; }
        .toolbar { right: 25px; top: 25px; }
      `}</style>
    </div>
  );
}
