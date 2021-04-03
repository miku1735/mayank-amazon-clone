import React from "react";
import "./Home.css";
import Product from "./product/Product";
function Home() {
  return (
    <div className="Home">
      <div className="Home__container">
        <img
          className="Home__image"
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Beauty/GW/September/Luxury_and_pro_beauty_week-Herotator-_1500x600._CB405040156_.jpg"
        ></img>
        <div className="Home__productRow">
          <Product
            title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
            price="80.00"
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/31peh6pTVKL._AC_US240_FMwebp_QL65_.jpg"
          />
          <Product
            title="JBL C100SI In-Ear Deep Bass Headphones with Mic (Black)"
            price="50.00"
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/31Za9ooooCL._AC_US240_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="Home__productRow">
          <Product
            title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
            price="570.00"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/619iTNHSCGL._SL1500_.jpg"
          />
          <Product
            title="boAt BassHeads 100 in-Ear Wired Earphones with Super Extra Bass, in-line Mic, Hawk Inspired Design and Perfect Length Cable (Furious Red)"
            price="100.00"
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/31qVddHyy5L._AC_US240_FMwebp_QL65_.jpg"
          />
          <Product
            title="Meditation And Its Methods"
            price="20.00"
            rating={1}
            image="https://m.media-amazon.com/images/I/51BHLSGt51L.jpg"
          />
        </div>
        <div className="Home__productRow">
          <Product
            title="LG 29 inch Ultrawide Full HD IPS Gaming, Multitasking Monitor with 1ms Response Rate, 75Hz Refresh Rate - USB C, Display Port, HDMI, VGA - 10 W Inbuilt Speaker - 29UM69"
            price="230.00"
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
