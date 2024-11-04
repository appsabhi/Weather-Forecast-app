import { useNavigate } from "react-router-dom";

const Welcome_Page = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-3/5 text-center space-y-4 bg-gradient-to-b from-blue-600 to-cyan-500 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl text-white font-extrabold tracking-wide">
          Welcome to Your Weather Hub
        </h1>
        <p className="text-md text-gray-100 max-w-xs leading-relaxed">
          Discover real-time weather updates. Start by entering a city name in
          the search bar above.
        </p>
        <button
          onClick={() => navigate("/weather_forecast")}
          className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition duration-300"
        >
          Explore Weather
        </button>
      </div>
    </>
  );
};

export default Welcome_Page;
