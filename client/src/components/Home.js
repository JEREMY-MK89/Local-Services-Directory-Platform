import React, { useState } from 'react';

const Home = () => {
  // State variable to track the current theme
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between light and dark themes
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // CSS classes for dark mode
  const darkModeClass = darkMode ? 'dark' : '';

  return (
    <main className={`py-6 px-4 sm:p-6 md:py-10 md:px-8 ${darkModeClass}`}>
      {/* Add the dark mode class to the main container */}
      <div className={`max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 ${darkModeClass}`}>
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:text-white">Service Platform</h1>
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:text-slate-400">Service hub</p>
          {/* Button to toggle dark mode */}
          <button
            type="button"
            className="absolute top-3 right-3 bg-gray-800 text-white px-3 py-2 rounded-full"
            onClick={toggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img src="https://media.istockphoto.com/id/631545456/video/bank-sign-on-modern-all-glass-building-in-business-district-with-skyscrapers.jpg?s=640x640&k=20&c=xc9d64ekEES-ls25cjwvuuHZfJSyIwab6FUa-C_M-10=" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full dark:filter dark:brightness-50" loading="lazy" />
          <img src="https://media.istockphoto.com/id/134052142/photo/hair-salon-situation.jpg?s=612x612&w=0&k=20&c=HM4Tl3ATijpIS1Rv097UHwmZ3OfmqGXkniNLuTCqB0A=" alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32 dark:filter dark:brightness-50" loading="lazy" />
          <img src="https://media.istockphoto.com/id/1448506100/photo/male-hotel-receptionist-assisting-female-guest.jpg?s=612x612&w=0&k=20&c=xXJn95XgzSA4_LgGczr7ce-FnpcWXwYIr-fGH9yN_z0=" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32 dark:filter dark:brightness-50" loading="lazy" />
        </div>
        <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dt className="sr-only">Reviews</dt>
          <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
            <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
              <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center">
            <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            Kenya,Nairobi
          </dd>
        </dl>
        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Check Services</button>
        </div>
        <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
          Step into our expansive and sunlit digital realm, tailored for those seeking a seamless and comfortable experience while accessing a myriad of services. Within this virtual landscape, you'll discover a dynamic platform designed to cater to every need imaginable. Whether you're in search of banking solutions, salon and barbershop services, or the latest offerings from shopping malls, our digital ecosystem has it all.
          Nestled within a bustling online community, our platform boasts a diverse array of offerings, all conveniently accessible from the comfort of your own device. Picture yourself navigating through a vibrant digital neighborhood, brimming with virtual cafes, boutique shops, and even virtual supermarkets, all at your fingertips.
        </p>
      </div>
    </main>
  );
};

export default Home;