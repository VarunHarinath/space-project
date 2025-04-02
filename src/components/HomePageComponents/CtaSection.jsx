import React from "react";

const CtaSection = () => {
  return (
    <>
      <section className="py-28 flex justify-center">
        <div className="w-full mx-3 md:mx-5 px-4 md:px-8">
          <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-400/10 py-14 px-12 rounded-lg shadow-lg text-center">
            <h3 className="text-indigo-600 font-semibold">
              Professional services
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Build the future with us
            </p>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat non proident.
            </p>
            <div className="mt-6">
              <a
                href="javascript:void(0)"
                className="inline-block py-3 px-6 text-white font-medium bg-indigo-600 bg-opacity-70 duration-150 hover:bg-indigo-600 hover:bg-opacity-90 active:bg-indigo-700 rounded-lg shadow-md hover:shadow-none"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
