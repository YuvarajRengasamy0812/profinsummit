// ✅ Updated React Gallery Component Integrated with API Response
// This version correctly maps API photo URLs into your gallery

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
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const imgRef = useRef(null);

  // Tabs
  const tabs = ["All", "Speakers", "Expo Zone", "Workshops", "Networking"];

  useEffect(() => {
    getGalleryList();
  }, []);

  const getGalleryList = () => {
    getAllGallery()
      .then((res) => {
        console.log(res, "Images");
        const apiPhotos = res?.data?.photos || [];

        // Convert API response to gallery format
        const mapped = apiPhotos.map((p) => ({
          thumb: p.url,
          full: p.url,
          alt: p.title,
          category: res?.data?.topic_title || "All",
        }));

        setImages(mapped);
      })
      .catch((err) => console.log(err));
  };

  // Filter images
  let filtered = activeTab === "All" ? images : images.filter((img) => img.category === activeTab);
  if (limit) filtered = filtered.slice(0, limit);

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
    setLightboxIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
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
      {!limit && (
        <div className="filter-buttons d-inline-flex gap-3 flex-wrap pt-2 pb-5 align-items-center w-100 justify-content-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`filter-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      <div className="row fade-animation">
        {filtered.map((img, i) => (
          <div key={i} className="col-lg-4 col-md-6 mb-3 px-2 gallery-img-item">
            <img
              src={img.thumb}
              alt={img.alt}
              className="w-100 rounded shadow-sm hover-scale"
              onClick={() => openLightbox(i)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
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
            src={filtered[lightboxIndex].full}
            alt="full"
            style={{ maxWidth: "90%", maxHeight: "90%", transform: `scale(${zoom})`, transition: "0.3s" }}
            draggable
          />

          <button
            className="position-absolute end-0 bg-transparent border-0 text-white me-3 p-0"
            style={{ right: 20 }}
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>

          <div className="toolbar position-absolute d-flex gap-2" style={{ right: 25, top: 25 }}>
            <button className="btn btn-light" onClick={() => setZoom((z) => z + 0.2)}>
              <ZoomIn />
            </button>
            <button className="btn btn-light" onClick={() => setZoom((z) => Math.max(1, z - 0.2))}>
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
    </div>
  );
}
