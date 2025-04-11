import React from "react";

const Activitycomponent = () => {
  const events = [
    {
      date: "11/28/2025",
      title: "Solar Eclipse",
      description: "Take your solar filters and look into the sky.",
      time: "7pm-10pm",
      location: "Estuary Park",
    },
    {
      date: "11/23/2025",
      title: "Lunar Eclipse",
      description:
        "We invite you to listen to live bands play beautiful music in the park. Enjoy the sounds of Laureen Davis and the Kings, and enjoy wine tastings.",
      time: "7pm-10pm",
      location: "Estuary Park",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mb-16 mt-16">
      <div className="text-center mb-10">
        <h3 className=" text-4xl font-extrabold">Upcoming Celestial Events</h3>
        <p className="text-gray-600 mt-2 text-lg">
          Save the date and experience cosmic wonders!
        </p>
      </div>

      <div className="overflow-auto">
        <table className="w-full table-auto text-sm text-left border border-indigo-200 rounded-xl shadow-md overflow-hidden">
          <thead className="bg-indigo-50 text-indigo-700 font-semibold text-base">
            <tr>
              <th className="py-4 px-6 text-center">Date</th>
              <th className="py-4 px-6">Description</th>
              <th className="py-4 px-6">Time & Location</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 divide-y divide-indigo-100">
            {events.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-6 text-center">
                  <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 font-mono font-bold text-lg rounded-full shadow-sm">
                    {item.date}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-normal">
                  <div className="font-semibold text-gray-800">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-normal">
                  <div>{item.time}</div>
                  <div>{item.location}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activitycomponent;
