
import React from 'react';

const Try = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
      <div className="flex flex-wrap justify-center items-center lg:justify-start lg:w-1/2">
        <div className="w-1/3 p-2">
          <img src="https://www.behance.net/ui/img/creator_pro/page_banner/1.webp" alt="Feature 1" className="w-full rounded-md shadow-md" />
        </div>
        <div className="w-1/3 p-2">
          <img src="https://www.behance.net/ui/img/creator_pro/page_banner/7.webp" alt="Feature 2" className="w-full rounded-md shadow-md" />
        </div>
      </div>
      <div className="lg:w-1/2 lg:pl-8">
        <h2 className="text-2xl font-bold mb-4">Start your 7 day free trial of Behance Pro today</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Understand your audience with advanced analytics</li>
          <li>0% platform fees when selling your work</li>
          <li>Your own custom Adobe Portfolio website</li>
          <li>Share projects privately with clients</li>
          <li>...and more</li>
        </ul>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg transform hover:scale-105 transition-transform font-bold">
          Start your free trial
        </button>
      </div>
    </div>
  );
};

export default Try;
