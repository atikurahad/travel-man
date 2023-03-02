import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className='text-6xl text-blue-900 text-center font-extrabold uppercase	my-5'>Imagine. Explore. Book</h1>
     <div className='max-w-[1240px] mx-auto py-16 px-4 bg-white'>
       <p className='text-2xl text-center font-serif inline-block align-middle my-5 font-bold'>Explore’s content and deals are a crucial part of your dreaming, planning and booking journey.</p> <br />

      <p className='text-2xl text-center font-serif inline-block align-middle my-10 font-bold'>Explore informs and then inspires by showcasing what’s new, exciting, unique and trending in travel, and then providing the specially sourced and curated exclusive deals to book it.</p>
     </div>

      <div className='grid '>
        <section className='col-span-2'>
          <h1 >Explore Travel</h1>
          <p>Explore Travel serves travellers and dreamers alike with relevant, entertaining, useful and quality travel content - written by the experienced journalists of Australia's largest independent media company ACM.</p>
        </section>
        <section className='col-span-1'>
          <img src="https://www.siteminder.com/wp-content/uploads/2020/07/08SMMK_changing-traveller-report_resource-centre-tile_es.jpg" className='h-48 w-96 rounded-full' alt="" />
        </section>
      </div>

    </div>
  );
};

export default About;
