
import { motion, AnimatePresence } from 'framer-motion';
import { FaCar, FaImage, FaPalette, FaWrench, FaDollarSign, FaMoneyBillWave } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const NavBar = ({ isVisible }) => {
    const location = useLocation();
    const navItems = [
      { title: 'Overview', icon: FaCar, path: '/' },
      { title: 'Highlights', icon: FaWrench, path: '/highlights' },
      { title: 'Gallery & Colors', icon: FaImage, path: '/gallery' },
      { title: 'Interior & Exterior', icon: FaPalette, path: '/interior-exterior' },
      { title: 'Variants & Pricing', icon: FaDollarSign, path: '/variants-pricing' },
      { title: 'Finance', icon: FaMoneyBillWave, path: '/finance' },
    ];
  
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bg-black shadow-md z-50"
          >
            <ul className="flex justify-around p-4">
              {navItems.map(({ title, icon: Icon, path }) => (
                <motion.li
                  key={title}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer ${location.pathname === path ? 'text-blue-600 font-bold' : 'text-gray-700'}`}
                >
                  <Link to={path} className="flex flex-col items-center">
                    <Icon className="mb-1" />
                    <span className="text-xs">{title}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    );
  };
  