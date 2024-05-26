import { useState } from "react";

const Lightbox = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const gotoPrevious = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  const gotoNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handleOverlayClick = (event) => {
    if (
      !event.target.closest(".lightbox-container") &&
      !event.target.closest("button")
    ) {
      closeLightbox();
    }
  };

  return (
    <>
      {images.map((image, index) => (
        <div className="max-h-full aspect-[3/2] mx-auto">
          <img
            className="block h-full aspect-[3/2] object-cover rounded mx-auto hover:scale-105 transition-all duration-200 hover:opacity-50 cursor-pointer"
            key={index}
            src={image.src}
            alt={image.src + " gambar"}
            onClick={() => openLightbox(index)}
          />
        </div>
      ))}
      {isOpen && (
        <div
          className="lightbox-overlay fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.8)] flex justify-center items-center z-[1056]"
          onClick={handleOverlayClick}
        >
          <div className="lightbox-container p-5 rounded-xl shadow w-[90%] max-w-[800px] my-8 mx-auto">
            <img
              className="w-full h-screen object-contain"
              src={images[currentIndex].src}
              alt={images[currentIndex].src + " gambar"}
            />
          </div>
          <div className="absolute w-full h-screen">
            <button
              className="bg-[#333333] text-white border-none py-2 px-4 cursor-pointer hover:bg-[#444444] active:bg-[#555555] absolute  top-3 right-3 rounded"
              onClick={closeLightbox}
            >
              Close
            </button>
            <button
              className="bg-[#333333] text-white border-none py-2 px-4 cursor-pointer hover:bg-[#444444] active:bg-[#555555] absolute top-[47%] sm:left-8 left-0 rounded"
              onClick={gotoPrevious}
            >
              <i className="bi bi-chevron-left sm:text-4xl text-2xl"></i>
            </button>
            <button
              className="bg-[#333333] text-white border-none py-2 px-4 cursor-pointer hover:bg-[#444444] active:bg-[#555555] absolute top-[47%] sm:right-8 right-0 rounded"
              onClick={gotoNext}
            >
              <i className="bi bi-chevron-right sm:text-4xl text-2xl"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Lightbox;
