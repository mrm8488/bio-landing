import React from "react";
import "./HOME.css";

function HOME(props) {
  const { shopNow, text2, text1, reviews, surname, contacUs, bioface, singUp, logIn } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="overlap-group4">
          <div className="overlap-group3">
            <div className="greenscreen"></div>
            <div className="overlap-group">
              <div className="shop-now valign-text-bottom">{shopNow}</div>
            </div>
            <p className="text2 valign-text-middle">{text2}</p>
            <h1 className="text1 valign-text-middle">{text1}</h1>
            <img className="vector-2" src="/img/vector-2.svg" alt="Vector 2" />
            <img className="vector-3" src="/img/vector-3.svg" alt="Vector 3" />
            <img className="productimage" src="/img/productimage.svg" alt="PRODUCTIMAGE" />
            <div className="buttons tenorsans-normal-east-bay-20px">
              <div className="reviews">{reviews}</div>
              <div className="surname">{surname}</div>
              <div className="contac-us">{contacUs}</div>
            </div>
            <div className="bioface">{bioface}</div>
          </div>
          <div className="singuplogin">
            <div className="overlap-group2">
              <div className="sing-up tenorsans-normal-east-bay-20px">{singUp}</div>
            </div>
            <div className="overlap-group1">
              <div className="log-in">{logIn}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOME;
