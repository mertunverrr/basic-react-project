import React, { useEffect, useState } from "react";
import "../css/slider.css";
import ImageProduct1 from "../assets/image-product-1.jpg";
import ImageProduct2 from "../assets/image-product-2.jpg";
import ImageProduct3 from "../assets/image-product-3.jpg";
import ImageProduct4 from "../assets/image-product-4.jpg";
import ImageProductThumb1 from "../assets/image-product-1-thumbnail.jpg";
import ImageProductThumb2 from "../assets/image-product-2-thumbnail.jpg";
import ImageProductThumb3 from "../assets/image-product-3-thumbnail.jpg";
import ImageProductThumb4 from "../assets/image-product-4-thumbnail.jpg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos, MdOutlineClose } from "react-icons/md";

function Slider({ setSliderValue, setShowCart }) {
  const [highlightsClick, setHighlightsClick] = useState(true);
  const [highlightsItem, setHighlightsItem] = useState(ImageProduct1);
  const [counterImg, setCounterImg] = useState(0);

  useEffect(() => {
    setSliderValue(highlightsClick);
  }, [highlightsClick]);

  const handleHighlightsClick = () => {
    setHighlightsClick(false);
    setShowCart(false);
  };

  const handleThumbnailClick = (img) => {
    setHighlightsItem(img);
  };
  const handleIncreaseCounter = () => {
    if (counterImg < 3) {
      const newCounter = counterImg + 1;
      setCounterImg(newCounter);
      switch (newCounter) {
        case 1:
          setHighlightsItem(ImageProduct2);
          break;
        case 2:
          setHighlightsItem(ImageProduct3);
          break;
        case 3:
          setHighlightsItem(ImageProduct4);
          break;
        default:
          break;
      }
    }
  };

  const handleDecreaseCounter = () => {
    if (counterImg > 0) {
      const newCounter = counterImg - 1;
      setCounterImg(newCounter);
      switch (newCounter) {
        case 0:
          setHighlightsItem(ImageProduct1);
          break;
        case 1:
          setHighlightsItem(ImageProduct2);
          break;
        case 2:
          setHighlightsItem(ImageProduct3);
          break;
        default:
          break;
      }
    }
  };
  return (
    <div className="slider">
      <div>
        <img
          src={highlightsItem}
          alt=""
          className="highlights-item"
          onClick={() => handleHighlightsClick()}
        />
        <div className="thumbnail-item">
          <img
            className="thumbnail first"
            src={ImageProductThumb1}
            onClick={() => handleThumbnailClick(ImageProduct1)}
          />
          <img
            className="thumbnail"
            src={ImageProductThumb2}
            onClick={() => handleThumbnailClick(ImageProduct2)}
          />
          <img
            className="thumbnail"
            src={ImageProductThumb3}
            onClick={() => handleThumbnailClick(ImageProduct3)}
          />
          <img
            className="thumbnail"
            src={ImageProductThumb4}
            onClick={() => handleThumbnailClick(ImageProduct4)}
          />
        </div>
      </div>
      {!highlightsClick && (
        <div
          className="featured-item-div"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            alignItems: "center",
            zIndex: "999",
            top: "50%",
            left: "100%",
            transform: "translate(-27%, -63%) scale(1.25)",
          }}
        >
          <div>
            <div
              className="featured-items"
              style={{ display: "flex", alignItems: "center" }}
            >
              <button
                onClick={handleDecreaseCounter}
                type="button"
                style={{
                  width: "45px",
                  height: "45px",
                  fontSize: "20px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "hsl(26, 100%, 55%)",
                  border: "none",
                  backgroundColor: "white",
                  position: "relative",
                  left: "1.3rem",
                  cursor: "pointer",
                }}
              >
                <MdOutlineArrowBackIos />
              </button>
              <img src={highlightsItem} alt="" className="highlights-item" />
              <button
                type="button"
                onClick={handleIncreaseCounter}
                style={{
                  width: "45px",
                  height: "45px",
                  fontSize: "20px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "hsl(26, 100%, 55%)",
                  border: "none",
                  backgroundColor: "white",
                  position: "relative",
                  right: "1.3rem",
                  cursor: "pointer",
                }}
              >
                <MdOutlineArrowForwardIos />
              </button>
            </div>
            <button
              onClick={() => setHighlightsClick(true)}
              className="close-btn"
              type="button"
              style={{
                color: "hsl(26, 100%, 55%)",
                borderRadius: "50%",
                fontSize: "30px",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                position: "absolute",
                left: "375px",
                top: "-45px",
              }}
            >
              <MdOutlineClose />
            </button>
          </div>

          <div className="thumbnail-item">
            <img
              className="thumbnail first"
              src={ImageProductThumb1}
              onClick={() => handleThumbnailClick(ImageProduct1)}
            />
            <img
              className="thumbnail"
              src={ImageProductThumb2}
              onClick={() => handleThumbnailClick(ImageProduct2)}
            />
            <img
              className="thumbnail"
              src={ImageProductThumb3}
              onClick={() => handleThumbnailClick(ImageProduct3)}
            />
            <img
              className="thumbnail"
              src={ImageProductThumb4}
              onClick={() => handleThumbnailClick(ImageProduct4)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
