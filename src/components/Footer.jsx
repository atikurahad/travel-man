import React from "react";
import "../styles/Footer.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Instagram } from "@mui/icons-material";
import { blue, red } from "@mui/material/colors";

const Footer = () => {
  return (
    <div className=" bg-[#00173F] h-full">
      <div className=" grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4">
        <section className="mt-12">
          <h1 className="text-4xl text-white text-center">Countries</h1>
          <span className="flex flex-col items-center mt-5">
            <a href="/">Australia</a>
            <a href="/">Thailand</a>
            <a href="/">Indonesia</a>
            <a href="/">Bangladesh</a>
          </span>
        </section>
        <section className="mt-12">
          <h1 className="text-4xl text-white text-center">Contact Us</h1>
          <span className="flex flex-col items-center mt-5">
            <a href="/">Terms</a>
            <a href="/">Refund Policy</a>
            <a href="/">Call Us:v1322uy2u3t3</a>
            <a href="/">Claim your listing</a>
          </span>
        </section>
        <section className="mt-12">
          <h1 className="text-4xl text-white text-center">Privacy Policy</h1>
          <span className="flex flex-col items-center mt-5">
            <a href="/">Our Blog</a>
            <a href="/">DMCA</a>
            <a href="/">Manage Booking</a>
            <a href="/">Comaplaints Policy</a>
          </span>
        </section>
        <section>
          <span className="flex justify-items-cener mt-8">
            <FacebookSharpIcon sx={{ color: blue[400], fontSize: "80px" }} />
            <YouTubeIcon sx={{ color: red[800], fontSize: "80px" }} />
            <TwitterIcon sx={{ color: blue[400], fontSize: "80px" }} />
            <Instagram sx={{ color: red[600], fontSize: "80px" }} />
          </span>
        </section>

      </div>
      <hr className="my-4 mx-[12rem]" />
       <p className="text-xl text-white text-center p-5">
          {" "}
          <span className="text-white font-bold text-2xl font-serif">&copy;</span> All rights Reserved{" "}
          <span className="text-2xl font-bold text-blue-600">Travel Man</span>
        </p>
    </div>
  );
};

export default Footer;
