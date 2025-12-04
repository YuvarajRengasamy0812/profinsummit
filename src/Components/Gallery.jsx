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
import { getAllGallery } from '../api/gallery';

export default function Gallery({ limit = null }) { 
  
  const [images, setImages] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const imgRef = useRef(null);

  useEffect(() => {
    getGalleryList();
  }, [])

  const getGalleryList = () => {
    getAllGallery()
      .then((res) => {
        setImages(res?.data?.items || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ⬅ UNIQUE CATEGORY LIST
  const categories = ["All", ...new Set(images.map((img) => img.category))];

  // FILTERED IMAGES
  let filtered =
    activeTab === "All"
      ? images
      : images.filter((img) => img.category === activeTab);

  if (limit) {
    filtered = filtered.slice(0, limit);
  }

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setZoom(1);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
    setZoom(1);
  };

  const nextImage = () => {
    setLightboxIndex((prev) =>
      prev === filtered.length - 1 ? 0 : prev + 1
    );
    setZoom(1);
  };

  const downloadImg = () => {
    const link = document.createElement("a");
    link.href = filtered[lightboxIndex].full;
    link.download = "image.jpg";
    link.click();
  };

  const shareImg = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Gallery Image",
        url: filtered[lightboxIndex].full,
      });
    }
  };

  return (
    <div className="premium-gallery container">

      {/* Tabs - shown only when limit is NOT applied */}
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

      {/* Gallery Grid */}
      <div className="row fade-animation">
        {filtered.map((img, i) => (
          <div key={i} className="col-lg-4 col-md-6 mb-3 px-2 gallery-img-item">
            <img
              src={img.image}
              alt={img.alt}
              className="w-100 rounded shadow-sm hover-scale"
              onClick={() => openLightbox(i)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.85)", zIndex: 2000 }}
        >
          {/* Left Arrow */}
          <button
            className="position-absolute start-0 bg-transparent border-0 text-white ms-3 p-0"
            style={{ left: 20, zIndex: 2 }}
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <img
            ref={imgRef}
            src={filtered[lightboxIndex].full}
            alt="full"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              transform: `scale(${zoom})`,
              transition: "0.3s",
            }}
            draggable
          />

          {/* Right Arrow */}
          <button
            className="position-absolute end-0 bg-transparent border-0 text-white me-3 p-0"
            style={{ right: 20 }}
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>

          {/* Toolbar */}
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

      {/* CSS */}
      <style>{`
        .hover-scale:hover { transform: scale(1.03); transition: 0.3s; }
        .fade-animation { animation: fadeIn 0.4s ease-in-out; }
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(10px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .toolbar button { 
          background: transparent !important; 
          border: none !important; 
          color: #adadad !important;
          padding: 6px; 
        }
        .toolbar svg { width: 20px; height: 20px; }
        .toolbar { right: 25px; top: 25px; }
      `}</style>
    </div>
  );
}
