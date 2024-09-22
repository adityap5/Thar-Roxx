/* eslint-disable react/prop-types */

import { motion,  } from 'framer-motion';


export const ContentPage = ({ title, content, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen p-8 pt-24 flex flex-col justify-center"
  >
    <h2 className="text-3xl font-bold mb-4 flex items-center">
      <Icon className="mr-2 text-blue-600" />
      {title}
    </h2>
    <p className="text-gray-700">{content}</p>
  </motion.div>
);