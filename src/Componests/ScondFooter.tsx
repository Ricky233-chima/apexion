// import React from "react";
import '../index.css'
import sveImage from "../assets/Vector (4).png";
import earthImage from "../assets/Vector (2).png";
import twitterImage from "../assets/Twitter.png";
import facebookImage from "../assets/Facebook.png";
import instagrammImage from "../assets/Instagram.png";

function ScondFooter() {
  return (
    <div className="bg-gray-100">
      <div
        className="pl-8 flex gap-[430px] pt-10"
        style={{ fontSize: "x-large", fontWeight: "normal" }}
      >
        <h1>Support</h1>
        <h1>Hosting</h1>
        <h1 className="pl-5">Airbnb</h1>
      </div>
      <div className="pl-8 flex pt-5 gap-[417px] hover: underline">
        <a href=""><h1>Help center</h1></a>
        <a href=""><h1>Airbnb your home</h1></a>
          <a href=""> <h1>News room</h1></a>
      </div>
      <div className="pl-8 flex pt-5 gap-[427px]">
        <a href=""><h1>AirCover</h1></a>
        <a href=""><h1 className="pl-2">AirCover for hosts</h1></a>
        <a href=""><h1>New features</h1></a>
      </div>
      <div className="pl-8 flex pt-5 gap-[348px]">
        <a href=""><h1>Anti-discriminationst</h1></a>
        <a href=""><h1>Hosting resources</h1></a>
        <a href=""><h1 className="pl-20">Careers</h1></a>
      </div>
      <div className="pl-8 flex pt-5 gap-[350px]">
        <a href=""><h1>Cancellation options</h1></a>
        <a href=""><h1>Hosting responsibly</h1></a>
        <a href=""><h1 className="pl-16">Gift cards</h1></a>
      </div>
      <div className="pl-8 flex gap-[825px] pt-5">
        <a href=""><h1>Report neighbourhoob concern</h1></a>
        <a href=""><h1>Airbnb.org emergency stays</h1></a>
      </div>
      <div className="flex flex-row justify-center">
        <button className="btn bg-black text-white w-36">Show map</button>
        <img src={sveImage} alt="" className="absolute pt-5 pl-[110px]" />
      </div>
      <div className="flex gap-[430px]">
        <p className="font-light pt-5 pl-8">
          <a href="">
            &#169; {new Date().getFullYear()}- Airbnb, Inc. privacy.Terms.
            sitemap. UK Mordern Slaivery Act. Company details
          </a>
        </p>
        <div className="flex gap-3 pl-8 pt-4">
          <p className="flex gap-1">
            <img src={earthImage} alt="" className="w-4 h-5 pt-1" />
            <h1>English(GB) & GBP</h1>
          </p>
          <img src={facebookImage} alt="" className="h-5 w-4" />
          <img src={twitterImage} alt="" className="h-5 w-4" />
          <img src={instagrammImage} alt="" className="h-5 w-4" />
        </div>
      </div>
    </div>
  );
}

export default ScondFooter;
