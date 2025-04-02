import React from "react";

const FistFragment = () => {
  return (
    <>
      <div className=" m-4 bg-gradient-to-r from-indigo-500/20 to-indigo-400/10 h-full py-24 flex items-center rounded-xl shadow-lg">
        <section className="mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-gray-800 font-bold text-5xl md:text-6xl lg:text-7xl">
              Space
              <span className="text-indigo-600"> Navigation</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FistFragment;
