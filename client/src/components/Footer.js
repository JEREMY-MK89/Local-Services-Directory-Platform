import React from 'react';
import SocialMediaIcon from './icons/social-media.gif'; 
import FollowUsIcon from './icons/follow-us.gif'; 
import phone from './icons/phone.gif'; 
import ShareIcon from './icons/share.gif'; 


const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center items-center w-full h-16">
        {/* Render Social Media Icon */}
        <img src={SocialMediaIcon} alt="Social Media" className="w-8 h-8 mx-2" />
        {/* Render Follow Us Icon */}
        <img src={FollowUsIcon} alt="Follow Us" className="w-8 h-8 mx-2" />
        {/* Render Phone Icon */}
        <img src={phone} alt="Call Us" className="w-8 h-8 mx-2" />
        {/* Render Share Icon */}
        <img src={ShareIcon} alt="Share" className="w-8 h-8 mx-2" />
      </div>
    </footer>
  );
};

export default Footer;

