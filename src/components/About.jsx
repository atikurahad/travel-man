import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl text-blue-900 text-center font-extrabold uppercase	my-5">
        Imagine. Explore. Book
      </h1>
      <div className="max-w-[1240px] mx-auto py-16 px-4 bg-white">
        <p className="text-2xl text-center font-serif inline-block align-middle my-5 font-bold">
          Explore’s content and deals are a crucial part of your dreaming,
          planning and booking journey.
        </p>{" "}
        <br />
        <p className="text-2xl text-center font-serif inline-block align-middle my-10 font-bold">
          Explore informs and then inspires by showcasing what’s new, exciting,
          unique and trending in travel, and then providing the specially
          sourced and curated exclusive deals to book it.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mx-48 h-[20rem] mt-6 justify-items-center	items-center	">
        <section className="col-span-2">
          <h1 className="text-4xl text-center font-bold">Explore Travel</h1>
          <p>
            Explore Travel serves travellers and dreamers alike with relevant,
            entertaining, useful and quality travel content - written by the
            experienced journalists of Australia's largest independent media
            company ACM.
          </p>
        </section>
        <section className="col-span-1">
          <img
            src="https://www.siteminder.com/wp-content/uploads/2020/07/08SMMK_changing-traveller-report_resource-centre-tile_es.jpg"
            className="h-full w-96 rounded-full"
            alt=""
          />
        </section>
      </div>

      <div className="grid grid-cols-3 gap-4 mx-48 h-[20rem] mt-6 justify-items-center	items-center	">
        <section className="col-span-1">
          <img
            src="https://explore.bustickets.com/wp-content/uploads/2019/09/solo-travel-backpack-tips.jpg"
            className="h-full w-96 rounded-full"
            alt=""
          />
        </section>

        <section className="col-span-2 my-10">
          <h1 className="text-4xl text-center font-bold">From Bucket List</h1>
          <p>
            We offer must-read columns regularly highlighting trip reviews,
            short breaks, long trips, events and news. These include trending
            destinations and accommodation, foodie guides, expert tips - and
            regular special features including cruising, road tripping, events,
            food and wine, sustainable tourism and the hot and cold editions.
          </p>
          <button className="myButton ml-4 my-2">Contact Asap</button>
        </section>
      </div>

      <div className="grid grid-cols-3 gap-4 mx-48 h-[20rem] mt-6 justify-items-center	items-center	">
        <section className="col-span-2 my-10">
          <h1 className="text-4xl text-center font-bold">To Book Now</h1>
          <p>
            We have a team of travel experts sourcing the curated deals
            especially for you, our audience. The service doesn’t stop there,
            with a group of knowledgeable travel experts on hand to answer all
            of your questions.
          </p>
          <a
            href="/"
            className="mx-auto text-2xl font-bold text-blue-600 text-center"
          >
            Explore And Book Here
          </a>{" "}
          <br />
          <button className="myButton ml-4 my-2">Contact Asap</button>
        </section>

        <section className="col-span-1">
          <img
            src="https://img.trvcdn.net/https://s3.ap-southeast-2.amazonaws.com/global.travlr.com/uploads/images/venue/071c734a-ee98-4696-8b77-060ca679a52e.png"
            className="h-full w-96 rounded-full"
            alt=""
          />
        </section>


      </div>



 <div className="grid grid-cols-3 gap-4 mx-48 h-[20rem] mt-6 justify-items-center	items-center	">

 <section className="col-span-1">
          <img
            src="https://img.trvcdn.net/https://s3.ap-southeast-2.amazonaws.com/global.travlr.com/uploads/images/venue/6e6b4e1f-f789-4a6f-8a91-417d79ab08bc.png"
            className="h-full w-96 "
            alt=""
          />
        </section>

        <section className="col-span-2 my-10">
          <p className="text-xl items-center">
            Our content is read by over 300,000 Aussies per week, in our weekly travel section inside your favourite ACM daily newspaper. Including The Canberra Times, Newcastle Herald, Illawarra Mercury, Bendigo Advertiser and many more.
          </p>
        </section>




      </div>


        <section className="flex flex-col items-center ">
          <h1 className="text-xl font-bold text-center mt-[5rem] mb-[2rem]">If you’re a travel business looking to promote with us</h1>
          <button className="mx-5 my-3 p-4 bg-blue-900 text-white w-[20%]">Contact Advertising</button>
          <p className="text-8xl font-semibold text-center text-blue-700 my-5">Travel Man</p>

        </section>


    </div>
  );
};

export default About;
