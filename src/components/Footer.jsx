import React from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <div>
      <div className="h-[20rem] bg-[#00173F] grid grid-cols-4">
        <section></section>
        <section>
          <h1>Contact Us</h1>
          <a href="/">Terms</a>
          <a href="/">Refund Policy</a>
          <a href="/">Call Us:v1322uy2u3t3</a>
          <a href="/">Claim your listing</a>
        </section>
        <section>
          <h1 className="text-4xl text-white">Privacy Policy</h1>
          <a href="/">Our Blog</a>
          <a href="/">DMCA</a>
          <a href="/">Manage Booking</a>
          <a href="/">Comaplaints Policy</a>
        </section>
        <section>
          <span>
            <FacebookSharpIcon />
            <YouTubeIcon />
            <TwitterIcon />
            <Instagram />
          </span>
        </section>
      </div>
    </div>
  );
};

export default Footer;
