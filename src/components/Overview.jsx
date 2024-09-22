
import { motion } from 'framer-motion';
import { VideoGrid } from './VideoGrid';
import Button from './Button';



// Updated Overview Section
export const OverviewPage = () => (
    <div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8 pt-24 flex flex-col justify-center"
    >
      <span className="text-2xl font-bold mb-2">‘THE’ SUV</span>
      <h1 className='text-5xl font-bold mb-2'>Live the Rockstar Life</h1>
      <p className='text-xl mb-8 text-gray-400'>
A new standard. The only one that matters. The Thar ROXX is designed and engineered to offer an unmatched blend of sophistication, performance, presence, safety, and technology.
      </p>
    
      <VideoGrid />
    </motion.div>
<Button name="Build your SUV" />
    </div>

  );