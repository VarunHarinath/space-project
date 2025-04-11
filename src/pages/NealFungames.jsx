import React from "react";

const games = [
  {
    name: "Simulation Clicker",
    description:
      "Launch a fun space-themed clicker game and enjoy the cosmic experience!",
    link: "https://neal.fun/stimulation-clicker/",
  },
  {
    name: "Space Elevator",
    description:
      "Explore the infinite possibilities of building a space elevator to the stars!",
    link: "https://neal.fun/space-elevator/",
  },
];

const NealFungames = () => {
  return (
    <div className="w-full px-4 md:px-8 py-10 bg-white">
      <h2 className="text-3xl font-extrabold  mb-8 text-center">
        Explore Space Games
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {games.map((game, idx) => (
          <div
            key={idx}
            className="bg-indigo-50 rounded-2xl shadow-xl p-6 w-full sm:w-80 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold text-indigo-800 mb-2">
              {game.name}
            </h3>
            <p className="text-gray-600 mb-4">{game.description}</p>
            <a
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Launch Game
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NealFungames;
