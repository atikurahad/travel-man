import React from "react";
import "../styles/Footer.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <div>
      <div className="h-[20rem] bg-[#00173F] grid grid-cols-4">
        <section>
          <h1 className="text-4xl text-white text-center">Countries</h1>
         <span className="flex flex-col items-center mt-5">
           <a href="/">Australia</a>
          <a href="/">Thailand</a>
          <a href="/">Indonesia</a>
          <a href="/">Bangladesh</a>
         </span>
        </section>
        <section>
          <h1 className="text-4xl text-white text-center">Contact Us</h1>
         <span className="flex flex-col items-center mt-5">
           <a href="/">Terms</a>
          <a href="/">Refund Policy</a>
          <a href="/">Call Us:v1322uy2u3t3</a>
          <a href="/">Claim your listing</a>
         </span>
        </section>
        <section>
          <h1 className="text-4xl text-white text-center">Privacy Policy</h1>
          <span className="flex flex-col items-center mt-5">
            <a href="/">Our Blog</a>
          <a href="/">DMCA</a>
          <a href="/">Manage Booking</a>
          <a href="/">Comaplaints Policy</a>
          </span>
        </section>
        <section>
          <span >
            <FacebookSharpIcon className="handle-icon" />
            <YouTubeIcon className="handle-icon" />
            <TwitterIcon className="handle-icon" />
            <Instagram className="handle-icon" />
          </span>
        </section>
      </div>
    </div>
  );
};

export default Footer;
