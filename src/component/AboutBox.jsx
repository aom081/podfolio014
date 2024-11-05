import React from "react";
import diamond from "../image/diamond.jpg";
import ruby from "../image/ruby.jpg"
import emerald from "../image/emerald.jpg";
import topaz from "../image/topaz.jpg"
import garnet  from "../image/garnet.jpg"
import Sapphire from "../image/Sapphire.jpg";
import pearl from  "../image/pearl.jpg";
import zricon from "../image/zricon.jpg"
import chrysoberyl  from "../image/chrysoberyl.jpg"
import CV from "../assets/download/Internship Cover Letter nattavut014.pdf";

const AboutBox = () => {
  return (
    <div>
      <section className="section" id="about">
        <div className="top-header">
          <h1>About Me</h1>
        </div>
        <div className="row">
          <div className="col">
            <div className="about-info">
              <h3>เพชรดี - คือรัตนของดาวพระศุกร์</h3>
            </div>
          </div>
          <div className="featured-image">
            <div className="image">
              <img src={diamond} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="featured-image">
            <div className="image">
              <img src={ruby} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="about-info">
              <h3>มณีแดง - คือทับทิมบริสุทธิ์ของดาวพระอาทิตย์</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="about-info">
              <h3>เขียวใสแสงมรกต - คือรัตนของดาวพระพุธ</h3>
            </div>
          </div>
          <div className="featured-image">
            <div className="image">
              <img src={emerald} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="featured-image">
            <div className="image">
              <img src={topaz} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="about-info">
              <h3>เหลืองสวยสดบุษราคัม - คือรัตนของดาวพระพฤหัสบดี</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="about-info">
              <h3>แดงแก่ก่ำโกเมนเอก - คือโคเมทส้มรัตนของดาวพระราหู</h3>
            </div>
          </div>
          <div className="featured-image">
            <div className="image">
              <img src={garnet} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="featured-image">
            <div className="image">
              <img src={Sapphire} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="about-info">
              <h3>สีหมอกเมฆนิลกาฬ - คือไพลินรัตนของดาวพระเสาร์</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="about-info">
              <h3>เมุกดาหารหมอกมัว - คือไข่มุกแท้รัตนของดาวพระจันทร์</h3>
            </div>
          </div>
          <div className="featured-image">
            <div className="image">
              <img src={pearl} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="featured-image">
            <div className="image">
              <img src={zricon} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="about-info">
              <h3>แดงสลัวเพทาย - คือปะการังรัตนของดาวพระอังคาร</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="about-info">
              <h3>สังวาลย์สายไพฑูรย์ - คือเพชรตาแมวรัตนของดาวพระเกตุ</h3>
            </div>
          </div>
          <div className="featured-image">
            <div className="image">
              <img src={chrysoberyl} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutBox;
