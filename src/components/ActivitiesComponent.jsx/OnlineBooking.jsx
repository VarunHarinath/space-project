import React from "react";

const appointments = [
  {
    title: "Night Sky Observation",
    duration: "5 hrs",
    price: "₹1,200",
  },
  {
    title: "Guest Lecture",
    duration: "3 hrs",
    price: "₹500",
  },
  {
    title: "Visit to ISRO Launch Events",
    duration: "1 hr",
    price: "₹5,000",
  },
];

const OnlineBooking = () => {
  return (
    <section className="py-10 px-4 sm:px-10 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold  tracking-wide">
          Online Appointments
        </h2>
        <p className="mt-2 text-gray-600 text-lg">
          Book your seat and experience the cosmos!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {appointments.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 rounded-2xl shadow-md p-6 hover:scale-105 hover:shadow-xl transition transform duration-300"
          >
            <h4 className="text-indigo-700 text-xl font-semibold mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm">Duration: {item.duration}</p>
            <p className="text-lg font-bold text-black mt-3">{item.price}</p>
            <button className="mt-4 px-4 py-2 w-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-indigo-800 shadow-lg shadow-indigo-300/40 transition">
              BOOK <span className="ml-1">🚀</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnlineBooking;
