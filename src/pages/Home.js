import React, { useEffect } from "react";
import nike from "../images/nike.png";
import puma from "../images/puma.png";
import adidas from "../images/adidas.png";
import nb from "../images/nb.png";
import categories1 from "../images/categories1.jpg";
import categories2 from "../images/categories2.jpg";
import categories3 from "../images/categories3.jpg";
import categories4 from "../images/categories4.jpg";
import categories5 from "../images/categories5.jpg";
import categories6 from "../images/categories6.jpg";
import Slideshow from "../components/Slider/Slider";
import AdvantageCard from "../components/AdvantageCard";
import Footer from '../components/Footer'



function Home() {
  

  const LogoOpacity = () => {
    const logos = document.querySelectorAll(".brand");

    logos.forEach((logo, index) => {
      logo.style.animation = `blink 0.8s ease forwards ${index / 1.5}s`;
    });
  };

  useEffect(() => {
    console.log("EFFECT")
    LogoOpacity();
  }, []);

  return (
    <div>
      <div className="homePage">
        
        <div className="brands">
          <div className="brand">
            <img src={nike} width="100%" alt="" className="brand-logo" />
          </div>
          <div className="brand">
            <img src={puma} width="100%" alt="" className="brand-logo" />
          </div>
          <div className="brand">
            <img src={adidas} width="100%" alt="" className="brand-logo" />
          </div>
          <div className="brand">
            <img src={nb} width="100%" alt="" className="brand-logo" />
          </div>
        </div>
      </div>
      <section className="categories">
        <div className="categoriesWrapper">
          <h3 className="categoriesWrapperTitle">Categories</h3>
          <div className="categoriesGallery">
            <div className="categoriesGalleryImage">
              <div className="categoriesSubtitle">Demi-season</div>
              <img className="categoriesPhoto" src={categories1} alt="" />
            </div>
            <div className="categoriesGalleryImage">
              <div className="categoriesSubtitle">Running shoes</div>
              <img className="categoriesPhoto" src={categories2} alt="" />
            </div>
            <div className="categoriesGalleryImage">
              <div className="categoriesSubtitle">Winter footwear</div>
              <img className="categoriesPhoto" src={categories3} alt="" />
            </div>
            <div className="categoriesGalleryImage">
              <div className="categoriesSubtitle">Football boots</div>
              <img className="categoriesPhoto" src={categories4} alt="" />
            </div>
            <div className="categoriesGalleryImage">
              <div className="categoriesSubtitle">Sneakers</div>
              <img className="categoriesPhoto" src={categories5} alt="" />
            </div>
            <div className="categoriesGalleryImage">
              <div className="categoriesSubtitle">Trainers</div>
              <img className="categoriesPhoto" src={categories6} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Slideshow />
      <div className="wrapper-advatages">
        <AdvantageCard
          title="Reliability"
          icon="check-square-o "
          subtitle="Your order is in safe hands"
          advantages={[
            "More than 300 success orders",
            "C.O.D",
            "Purchase return during 14 days",
          ]}
        />
        <AdvantageCard
          title="Quick delivery"
          icon="truck "
          subtitle="lightning fast delivery anywhere in the country"
          advantages={[
            "Delivery using your favorite service",
            "Courier delivery in the city when ordering from $ 40",
            "Pickup near the metro station",
            "Product on order in 2-3 weeks",
          ]}
        />
        <AdvantageCard
          title="Only original"
          icon="balance-scale"
          subtitle="Top-quality products for a reasonable price"
          advantages={[
            "Only original shoes from world brands",
            "Lowest margin on the market",
            "direct deliveries from original suppliers",
            "discounts from the second order",
          ]}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
