import React from 'react';
import '../styles/About.css'

const About = () => {
  return (
    <div>
      <h1 className='text-6xl text-blue-900 text-center font-extrabold uppercase	my-5'>Imagine. Explore. Book</h1>
     <div className='max-w-[1240px] mx-auto py-16 px-4 bg-white'>
       <p className='text-2xl text-center font-serif inline-block align-middle my-5 font-bold'>Explore’s content and deals are a crucial part of your dreaming, planning and booking journey.</p> <br />

      <p className='text-2xl text-center font-serif inline-block align-middle my-10 font-bold'>Explore informs and then inspires by showcasing what’s new, exciting, unique and trending in travel, and then providing the specially sourced and curated exclusive deals to book it.</p>
     </div>

      <div className='grid grid-cols-3 gap-4 mx-48 h-[20rem] my-6 justify-items-center	'>
        <section className='col-span-2'>
          <h1 className='text-4xl text-center font-bold'>Explore Travel</h1>
          <p>Explore Travel serves travellers and dreamers alike with relevant, entertaining, useful and quality travel content - written by the experienced journalists of Australia's largest independent media company ACM.</p>
        </section>
        <section className='col-span-1'>
          <img src="https://www.siteminder.com/wp-content/uploads/2020/07/08SMMK_changing-traveller-report_resource-centre-tile_es.jpg" className='h-full w-96 rounded-full' alt="" />
        </section>
      </div>


    <div className='grid grid-cols-3 gap-4 mx-48 h-[20rem] my-6 justify-items-center	'>

       <section className='col-span-1'>
          <img src="https://explore.bustickets.com/wp-content/uploads/2019/09/solo-travel-backpack-tips.jpg" className='h-full w-96 rounded-full' alt="" />
        </section>

        <section className='col-span-2 my-10'>
          <h1 className='text-4xl text-center font-bold'>From Bucket List
</h1>
          <p>We offer must-read columns regularly highlighting trip reviews, short breaks, long trips, events and news. These include trending destinations and accommodation, foodie guides, expert tips - and regular special features including cruising, road tripping, events, food and wine, sustainable tourism and the hot and cold editions.</p>
          <button className='myButton ml-4 my-2'>Contact Asap</button>
        </section>

      </div>


    </div>
  );
};

export default About;
