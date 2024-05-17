import { useState } from "react";
import "./App.css";
import ProductInfo from "./components/ProductInfo";
import Slider from "./components/Slider";
import DesktopCategory from "./components/DesktopCategory";
import Cart from "./components/Cart";
import Logo from "./assets/logo.svg";

function App() {
  const [sliderValue, setSliderValue] = useState(true);
  const [productCount, setProductCount] = useState(0);
  const [sendProduct, setSendProduct] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="container">
      <div className="header">
        <div className="header-between">
          <img id="logo" src={Logo} />
          <DesktopCategory />
        </div>
        <div className="cart-container">
          <Cart
            setSendProduct={setSendProduct}
            sendProduct={sendProduct}
            productCount={productCount}
            setProductCount={setProductCount}
            setShowCart={setShowCart}
            showCart={showCart}
          />
        </div>
      </div>
      <hr id="categoryHr" />
      <div className="content">
        <div className={sliderValue ? "" : "overlay-before"}></div>
        <Slider setSliderValue={setSliderValue} setShowCart={setShowCart} />
        <div className={sliderValue ? "" : "overlay-after"}></div>
        <ProductInfo
          productCount={productCount}
          setProductCount={setProductCount}
          setSendProduct={setSendProduct}
        />
      </div>
    </div>
  );
}

export default App;
