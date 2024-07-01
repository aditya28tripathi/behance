import React from 'react';
import { motion } from 'framer-motion';

const BehanceBanner = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white py-10">



      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center relative z-10"
      >

        
         <section className='flex flex-col items-center justify-center text-center py-20 mt-32'>
          <div className="container">
    <h1 className="text-8xl font-bold text-black">The World's</h1>
    <h1 className="text-8xl font-bold text-blue-500">Best Creators</h1>
    <h1 className="text-8xl font-bold text-black">Are On Behance</h1>
  </div>
  <div className="container-flex m mt-6">
    <h1 className="text-gray-600 text-2xl ">
      A comprehensive platform to help hirers and creators navigate the creative
    </h1>
    <h1 className="text-gray-600 text-2xl ">
      world from discovering inspiration, to connecting with one another
    </h1>
  </div>
  <div className="mt-8 flex space-x-4">
  <a
            className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg transform hover:scale-105 transition-transform font-bold"
            href="https://www.behance.net/hire"
          >
            Hire a Freelancer
          </a>
    <a
            href="https://commerce.adobe.com/store/commitment?items%5B0%5D%5Bid%5D=E2346E0B1549F4E14C366DA6C38EFCF4&af=uc_new_user_iframe%2Cuc_new_system_close&cli=behance&co=US&lang=en&ot=TRIAL&pa=PA-968&promoid=JZBJVSF6"
            className="px-4 py-2 bg-gray-100 text-blue-600 rounded-full shadow-lg transform hover:scale-105 transition-transform font-bold"
          >
            Try Behance Pro
          </a>
  </div>
              </section>
      </motion.div>



    </div>
  );
};

export default BehanceBanner;
