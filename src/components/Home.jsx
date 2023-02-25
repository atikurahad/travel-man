import React from "react";

const Home = () => {
  return (
    <div>
      <div className=" grid sm:grid-cols-1 h-[45rem] bg-slate-200 bg-no-repeat bg-cover bg-[url('https://img.trvcdn.net/https://s3.ap-southeast-2.amazonaws.com/travlr.com/cms/prod/Global_ACM/explore-travel-acm.jpg?imgeng=m_box/w_2850/h_1120')]">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <section>
            <h1 className="text-4xl ">Get Exclusive Offers Every Week</h1>
            <p className="text-4xl mx-auto">
              Sign up to recieve curated and excluive deals & offer straight to
              your inbox
            </p>
            <button className="text-4xl p-2 text-center font-bold border rounded-xl bg-purple-500 ">Sign Up</button>
          </section>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
