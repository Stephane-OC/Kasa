import PropTypes from 'prop-types';
import "../Carrousel/Carrousel.css";
import leftArrow from "../../assets/img/arrow-left.svg";
import rightArrow from "../../assets/img/arrow-right.svg";
import { useState } from "react";

/* "Caroussel" is a React functional component that facilitates image navigation for a series of pictures.      **
 **                                                                                                              **
 ** Component is responsible for:                                                                                **
 ** - Receiving "pictures" prop, which is an array of image URLs to be displayed in carousel.                    **
 ** - Maintaining "imgIndex" state, which keeps track of currently displayed image's index.                      **
 ** - Providing navigation controls ('leftArrow' and 'rightArrow') to navigate through images in carousel.       **
 ** - If more than one picture exists, it also displays an image counter, indicating the position of current     **
 **   image in the carousel relative to total number of images.                                                  **
 **                                                                                                              **
 ** Component uses two main functions "nextImg" and "prevImg" to handle navigation:                              **
 ** - "nextImg" increases image index, or resets it if end of picture array is reached.                          **
 ** - "prevImg" decreases image index, or sets it to last image if start of array is reached.                    **
 **                                                                                                              **
 ** Each image is rendered within a "carousel-container" and navigation controls and counter are conditionally   **
 ** rendered only if there's more than one image in the "pictures" prop.                                         */

function Caroussel({ pictures }) {
  const [imgIndex, setPicIndex] = useState(0);

  const nextImg = () => {
    setPicIndex((currentImgIndex) => {
      if (currentImgIndex < pictures.length - 1) {
        return currentImgIndex + 1;
      } else {
        return 0;
      }
    });
  };

  const prevImg = () => {
    setPicIndex((currentImgIndex) => {
      if (currentImgIndex > 0) {
        return currentImgIndex - 1;
      } else {
        return pictures.length - 1;
      }
    });
  };

  /* "formatCounter" is a utility function that formats current image index and total images for display.   **
  ** This function is primarily designed to provide a visual representation of current position of an image **
  ** in a series, which is particularly useful for image carousel components where knowing current position **
  ** of an image relative to entire collection is beneficial for end user.                                  */

  function formatCounter(index, total) {
    return `${index + 1} / ${total}`;
  }

  return (
    <div className="caroussel-container">
      <img src={pictures[imgIndex]} alt={"photo_" + imgIndex} />
      {pictures.length > 1 && (
        <div className="controls">
          <div className="caroussel-nav">
            <img src={leftArrow} alt="leftArrow" onClick={prevImg} />
            <img src={rightArrow} alt="rightArrow" onClick={nextImg} />
          </div>
          <div className="caroussel-img-counter">
            {formatCounter(imgIndex, pictures.length)}
          </div>
        </div>
      )}
    </div>
  );
}

Caroussel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Caroussel;
