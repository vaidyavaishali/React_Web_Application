import "./header.css";
import heart from "../assets/path.png";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import arrow from "../assets/arrow.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import cross from "../assets/cross.png";
import img1 from "../assets/img1.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img12 from "../assets/img12.png";
import img32 from "../assets/img32.png";
import img42 from "../assets/img42.png";
import img52 from "../assets/img52.png";
import img62 from "../assets/img62.png";
import star from "../assets/star.png"
import { useState } from "react";
const Headers = () => {
  const [pic, setPic] = useState(img1);
  const [carts, setcarts] = useState(0);
  const [wish, setwish] = useState(0);
  const [clr, setclr] = useState("Sapphire Blue");
  const [storage, setstorage] = useState("32")
  const [ram, setram] = useState("2 GB")
  return (
    <div className="web-page">
      <div className="header-container">
        <span className="wishlist">WISHLIST</span>
        <span id="heart">
          <img src={heart} alt="" /> {wish}
        </span>
        <span id="line"></span>
        <span className="cart">CART</span>
        <span id="cart" style={{ color: "red" }}>
          <img src={cart} alt="" />
          {carts}
        </span>
        <span id="line2"></span>
        <span id="user">
          <img src={user} alt="" />
        </span>
        <span id="username">SAIRAM KEESARA</span>
        <span id="arrow">
          <img src={arrow} alt="" />
        </span>
      </div>
      <div className="navbar-container">
        <span id="logo">
          <img src={logo} alt="" />
        </span>
        <span id="phone">PHONE</span>
        <span id="televison">TELEVISION</span>
        <span id="refrigirator">REFRIGERATOR</span>
        <span id="laptop">LAPTOP</span>
        <span id="washing">WASHING MACHINE</span>
        <span id="downloads">DOWNLOADS</span>
        <span id="search">
          <img src={search} alt="" />
        </span>
        <span id="input">
          <input type="text" placeholder="search for products" />
        </span>
        <span id="cross">
          <img src={cross} alt="" />
        </span>
      </div>
      <div className="content-holder">
        <div className="mobile-container">
          <p className="home">Home / Mobiles</p>
          <div className="mobile-image">
            <div className="image-holder">
              <div>
                <img src={img1} alt="" onClick={() => setPic(img12)} />
              </div>
              <div>
                <img src={img3} alt="" onClick={() => setPic(img32)} />
              </div>
              <div>
                <img src={img4} alt="" onClick={() => setPic(img42)} />
              </div>
              <div>
                <img src={img5} alt="" onClick={() => setPic(img52)} />
              </div>
              <div>
                <img src={img1} alt="" onClick={() => setPic(img12)} />
              </div>
              <div>
                <img src={img6} alt="" onClick={() => setPic(img62)} />
              </div>
            </div>
            <div className="main-image">
              <img src={pic} alt="" />
            </div>
            <span id="heart1">
              <img src={heart} alt="" onClick={() => setwish(wish + 1)} />
            </span>
          </div>
          <div className="carting">
            <span id="carttext" onClick={() => setcarts(carts + 1)}>
              Add to cart
            </span>
            <span id="buytext">Buy now</span>
          </div>
        </div>
        <div className="details-container">
          <div className="d1">
            <span id="s1">Product Code</span>
            <span id="s2">0DE349879</span>
            <p id="p1">Honor 8 Pro (Midnight Black, 128GB)</p>
            <p id="p2">(6GB RAM)</p>
            <span><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></span>
            <div>$<span id="s3">99.99</span><span id="s4">$149.99</span><span id="s5">30% off</span></div>
            <p>In stock</p>
          </div>
          <div id="line3"></div>
          <div className="color-container">
            <div><span id="color">Color:</span><span id="clr">{clr}</span></div>
            <div className="clr-flex"><div id="blue" onClick={()=>setclr("Blue")}></div><div id="black" onClick={()=>setclr("Black")}></div><div id="silver" onClick={()=>setclr("Silver")}></div></div>
          </div>
          <div id="line4"></div>
          <div>
            <div style={{display:"flex"}}>
              <span style={{color:"gray",margin:"1em 0 0 5em"}}>Storage</span><span style={{color:"blue",margin:"1em 0 0 1em"}}>{storage}</span><span style={{color:"gray",margin:"1em 0 0 5em"}}>RAM</span><span style={{color:"blue",margin:"1em 0 0 1em"}}>{ram}</span>
            </div>
            <div style={{display:"flex"}}>
              <div id="div1" onClick={()=>setstorage("64")}>64 GB</div>
              <div id="div2" onClick={()=>setstorage("128")}>128 GB</div>
              <div id="div3" onClick={()=>setram("2 GB")}>2 GB</div>
              <div id="div4" onClick={()=>setram("4 GB")}>4 GB</div>
            </div>
          </div>
          <div id="line5"></div>
          <div style={{display:"flex"}}>
            <p style={{margin:"4em 0 0 5em",color:"blueviolet"}}>+ PRODUCT DETAILS</p>
          </div>
          <div id="line6"></div>
        </div>
      </div>
    </div>
  );
};
export default Headers;
