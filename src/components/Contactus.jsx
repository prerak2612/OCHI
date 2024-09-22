import React, { useState, useRef, useEffect } from 'react';

function Contactus() {
  const [submitted, setSubmitted] = useState(false);
  const lineRefTop = useRef(null);
  const lineRefBottom = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-lineGrow');
          } else {
            entry.target.classList.remove('animate-lineGrow');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (lineRefTop.current) {
      observer.observe(lineRefTop.current);
    }
    if (lineRefBottom.current) {
      observer.observe(lineRefBottom.current);
    }

    return () => {
      if (lineRefTop.current) {
        observer.unobserve(lineRefTop.current);
      }
      if (lineRefBottom.current) {
        observer.unobserve(lineRefBottom.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      
      <div className='w-screen h-screen flex items-center justify-center bg-[#18181B] p-4 text-white'>
        <div className='animate-blast text-4xl md:text-5xl lg:text-6xl font-bold'>
          Thank you for your inquiry!
        </div>
      </div>
    );
  }

  return (
    <div id='contactUs'>
    <div className='w-screen min-h-screen flex flex-col items-center justify-center bg-[#18181B] p-6 text-white'>
      <div className="w-full border-dotted border-b-2 border-gray-500 animate-lineGrow" ref={lineRefTop}></div>
      <div className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-['Test_Founders_Grotesk_X-Condensed']">
        LET'S START A PROJECT TOGETHER
      </div>

      <form className='w-full max-w-2xl space-y-6' onSubmit={handleSubmit}>
        <p className='mb-4 text-lg'>
          Fill the form below:
        </p>
        <div className='space-y-4'>
          <div className='flex flex-col'>
            <label className='mb-1'>Hi! My name is</label>
            <input 
              className='bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 outline-none px-3 py-2 focus:border-blue-500 transition-all duration-300 w-full'
              placeholder='Enter your name*' 
              type='text' 
            />
            <label className='mt-3 mb-1'>and I work with</label>
            <input 
              className='bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 outline-none px-3 py-2 focus:border-blue-500 transition-all duration-300 w-full'
              placeholder='Company name type here*' 
              type='text' 
            />
          </div>
          <div className='flex flex-col'>
            <label className='mb-1'>I'm looking for a partner to help me with</label>
            <input 
              className='bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 outline-none px-3 py-2 focus:border-blue-500 transition-all duration-300 w-full'
              placeholder='Your goal type here*' 
              type='text' 
            />
          </div>
          <div className='flex flex-col'>
            <label className='mb-1'>With an idea of having that completed by</label>
            <input 
              className='bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 outline-none px-3 py-2 focus:border-blue-500 transition-all duration-300 w-full'
              placeholder='Date*' 
              type='text' 
            />
          </div>
          <div className='flex flex-col'>
            <label className='mb-1'>I am hoping to stay around a budget range of</label>
            <select className='bg-transparent border-b-2 border-gray-500 text-white outline-none px-3 py-2 focus:border-blue-500 transition-all duration-300 w-full'>
              <option>Select*</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='mb-1'>You can reach me at</label>
            <input 
              className='bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 outline-none px-3 py-2 focus:border-blue-500 transition-all duration-300 w-full'
              placeholder='name@example.com' 
              type='email' 
            />
          </div>
          <div className='flex flex-col'>
            <label className='mb-1'>Optionally, I'm sharing more:</label>
            <textarea 
              className='bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 outline-none px-3 py-2 focus:border-blue-500 transition-all duration-300 w-full'
              placeholder='Product details type here...' 
            />
          </div>
          <div className='flex items-center mt-4'>
            <input type='checkbox' className='accent-blue-500' /> 
            <span className='ml-2'>I agree with the Privacy Policy</span>
          </div>
          <button 
            type='submit' 
            className='mt-4 py-3 px-5 bg-blue-600 hover:bg-blue-700 rounded shadow-lg transition-all duration-300 w-full md:w-auto'
          >
            SEND INQUIRY
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Contactus;
