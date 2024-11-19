'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useGlobalState } from '@/app/globalState';

const Contact: React.FC = () => {
  const [isOpenHome, setIsOpenHome] = useState(false);
  const pathname = usePathname();
  const { isOpen,setIsOpen } = useGlobalState();

  // Contact details
  const contactInfo = {
    linkedin: "https://linkedin.com/in/your-actual-profile",
    email: "your.actual.email@example.com",
    phone: "your-actual-phone"
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleHash = () => {

    };
    alert('contact');
    window.addEventListener('hashchange', handleHash);
    // Check hash on initial load
    handleHash();

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpenHome(false);
      setIsOpen(false);
      // Remove the hash from URL when closing
      window.history.pushState('', '', window.location.pathname);
    }
  };

  return (
    <React.Fragment>
     <div className='h-screen flex items-center justify-center w-screen bg-red-500 fixed top-0 left-0 z-50'>
      <div className='bg-white rounded-lg p-4 w-[50%]'>
        <h1 className='text-2xl font-bold'>Contact Me</h1>
      </div>

     </div>
     </React.Fragment>
  );
};

export default Contact;