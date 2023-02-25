import React from "react";
import '../styles/Home.css'
import traveller from "../asset/traveler.png"
import luggage from "../asset/luggage.png"
import consaltact from "../asset/developer.png"
import travelMan from "../asset/travel.webp"
const Home = () => {
  return (
    <div>
       <div className="	 h-[45rem] bg-slate-200 ">
         <img src={travelMan} alt="" srcset="" className="" />
         <div className="my-auto text-gray-600">
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="p-2 bg-red-600">Buy gift here</button>
         </div>
        </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 items-center mt-5 bg-blue-300 mx-[10rem] p-5 mb-5">
            <section>
              <img src={traveller} alt="travel" className="h-[7rem] w-[5rem] mx-auto" />
              <p className="text-2xl text-center">Travel Now, Pay Later</p>
              <p className="text-md">Pay for your trip in fonrynightly or monthly installment, interest free..</p>
            </section>
            <section className="mx-auto">
              <img src={consaltact} alt="consaltancy" className="h-[7rem] w-[5rem] mx-auto" />
              <h1 className="text-2xl  ">Concirage Team</h1>
              <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>
            <section>
              <img src={luggage} alt="travel" className="h-[7rem] w-[5rem] mx-auto" />
              <h1 className="text-2xl text-center">Boarden Your Horizons</h1>
              <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.</p>
            </section>
          </div>

      </div>
  );
};

export default Home;


