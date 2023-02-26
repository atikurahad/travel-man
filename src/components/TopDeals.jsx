import React from "react";
import tag from "../asset/price-tag.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const TopDeals = () => {
  return (
    <div>
      <div className="bg-[#F4F4F4] mx-[10rem] mt-5 mb-5 max-w-[1240px]">
        <div className="grid grid-cols-2  justify-items-center	">
          <img
            src="https://img.trvcdn.net/https://s3.ap-southeast-2.amazonaws.com/thebalibible.com/uploads/images/venue/8ecf46b8236caae97e9cff6d18ec99a5.jpg?imgeng=m_box/w_1200/h_710"
            className="h-[25rem] w-full  border-double border-4 border-sky-500"
            alt=""
          />
          <article className="mt-5">
            <button className="border p-3 ">Romantic dinner</button>
            <h1 className="text-4xl font-bold">Charming Candidasa Escape</h1>

            <div className="flex  ">
              <div className="flex-row mt-6">
                <p className="text-xl">5 nights, 2adults from</p>

                <p className="text-2xl text-gray-900">
                  <span className="text-black font-bold">USD$</span> 1500{" "}
                </p>
                <div className="flex">
                  <img src={tag} className="h-8" alt="" />
                  <span className="bg-green-200">Tasmania water kingdom</span>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button className="border-2 border-solid border-gray-500 m-2 p-3  text-3xl text-center font-mono hover:bg-gray-700 hover:text-white">
                {<MailOutlineIcon color="error" fontSize="large" />}Enquire Now
              </button>
              <button className="m-2 p-3 border-solid border-2 border-gray-500 text-3xl text-center font-mono hover:bg-green-200">
                {" "}
                <span className="">
                  {<RemoveRedEyeIcon color="secondary" fontSize="large" />}
                </span>{" "}
                View Offer
              </button>
            </div>
          </article>
        </div>
      </div>

      <div className="bg-[#F4F4F4] mx-[10rem] mt-5 mb-5 max-w-[1240px]">
        <div className="grid grid-cols-2  justify-items-center	">
          <img
            src="https://img.trvcdn.net/https://s3.ap-southeast-2.amazonaws.com/global.travlr.com/uploads/images/venue/504204686071261eef8afb17a7ef79f4.jpg?imgeng=m_box/w_1200/h_710"
            className="h-[25rem] w-full border-double border-4 border-sky-500"
            alt=""
          />
          <article className="mt-5 ">
            <button className="border p-3 ">Barossa valley wine tour</button>
            <h1 className="text-4xl font-bold">
              Food and Wine Indulgence in Adelaide
            </h1>

            <div className="flex  ">
              <div className="flex-row mt-6">
                <p className="text-xl">4 days, 1adults from</p>

                <p className="text-2xl text-gray-900">
                  <span className="text-black font-bold">USD$</span> 1280{" "}
                </p>
                <div className="flex">
                  <img src={tag} className="h-8" alt="" />
                  <span className="bg-green-200">Up to 13% save</span>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button className="border-2 border-solid border-gray-500 m-2 p-3  text-3xl text-center font-mono hover:bg-gray-700 hover:text-white">
                {<MailOutlineIcon color="error" fontSize="large" />}Enquire Now
              </button>
              <button className="m-2 p-3 border-solid border-2 border-gray-500 text-3xl text-center font-mono hover:bg-green-200">
                {" "}
                <span className="">
                  {<RemoveRedEyeIcon color="secondary" fontSize="large" />}
                </span>{" "}
                View Offer
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopDeals;
