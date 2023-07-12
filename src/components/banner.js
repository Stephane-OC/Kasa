import React from "react";
import "./banner.css";


function Banner(props) {
  return (
    <div className="bannerWrapper1">
      <div id="bannerContent" className={props.className}></div>
      {props.className === "bannerStyleOne" && (
        <h1 className="bannerHeading">Chez vous, partout et ailleurs</h1>
      )}
    </div>
  );
}

export default Banner;