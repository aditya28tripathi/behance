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
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          The World's <span className="text-blue-600">Best Creators</span> Are On Behance
        </h1> <br />
        <p className="text-gray-500 mb-8">
          A comprehensive platform to help hirers and creators navigate the creative world from discovering inspiration, to connecting with one another
        </p>
        <div className="flex space-x-4 justify-center">
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
      </motion.div>



    </div>
  );
};

export default BehanceBanner;

