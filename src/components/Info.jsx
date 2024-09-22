import React, { useEffect, useRef } from "react";
import { Link } from 'react-scroll';

function Info() {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-lineGrow");
          } else {
            entry.target.classList.remove("animate-lineGrow");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <div id="aboutUs">
    <div className="w-screen min-h-screen">
      {/* Heading "ABOUT US" */}
      <h1 className='font-["Test_Founders_Grotesk_X-Condensed"] text-9xl mt-20 ml-10'>
        ABOUT US
      </h1>

      {/* Horizontal divider */}
      <div className="border-zinc-700 w-screen border-b-[1px] pt-12 md:pt-28"></div>

      {/* Main content area */}
      <div className="p-10">
        {/* Text content */}
        <div className="max-w-md font-['Neue_Montreal'] mb-6">
          <p className="text-sm">
            In Ukrainian, ochi - means eyes. It's not just a beautiful word, but
            our philosophy. Almost everything that needs to be communicated is
            better shown than explained.
          </p>
          <br />
          <p className="text-sm">
            We believe a great presentation evokes interest and drives business
            results far better than any saying can. Hence, we founded ochi to
            help you persuade colleagues and clients by creating eye-opening
            presentations.
          </p>
        </div>

        {/* Button */}
        <div className="mb-6">
          <Link to="ourWork" smooth={true} duration={1000} offset={-80}>
            <button className="flex items-center space-x-2 px-4 py-2 border border-white rounded-full">
              <span>OUR WORKS</span>
              <span>↗</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Image with overlay text */}
      <div className="relative flex justify-center mt-10">
        <img
          src="https://ochi.design/wp-content/uploads/2022/05/017091720030.jpg"
          alt="Ochi Eyes"
          className="w-[600px] h-auto object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />

        {/* Overlay text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl md:text-3xl font-bold bg-black bg-opacity-50 px-6 py-4 rounded-lg text-center">
            We save businesses from ugly and <br /> ineffective presentations.
          </p>
        </div>
      </div>

      {/* Dotted line after image */}
      <div
        ref={lineRef}
        className="border-zinc-100 w-full border-dotted border-b-[1px] pt-8 md:pt-28"
      ></div>
    </div>
    </div>
  );
}

export default Info;
