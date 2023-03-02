import React from "react";
import Button from '@mui/material/Button'
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
              <div className="shop-now valign-text-bottom">
                <Button>{shopNow}</Button>
              </div>
            </div>
            <p className="text2 valign-text-middle">{text2}</p>
            <h1 className="text1 valign-text-middle">{text1}</h1>
            <img className="vector-2" src="/img/vector-2.svg" alt="Vector 2" />
            <img className="vector-3" src="/img/vector-3.svg" alt="Vector 3" />
            <img className="productimage" src="/img/productimage.svg" alt="PRODUCTIMAGE" />
            <div className="buttons tenorsans-normal-east-bay-20px">
              <div className="reviews">
                <Button>{reviews}</Button>
              </div>
              <div className="surname">
                <Button>{surname}</Button>
              </div>
              <div className="contac-us">
                <Button>{contacUs}</Button>
              </div>
            </div>
            <div className="bioface">
              <Button>{bioface}</Button>
            </div>
          </div>
          <div className="singuplogin">
            <div className="overlap-group2">
              <div className="sing-up tenorsans-normal-east-bay-20px">
                <Button>{singUp}</Button>
              </div>
            </div>
            <div className="overlap-group1">
              <div className="log-in">
                <Button>{logIn}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOME;