import Search from "../assets/search.svg";
import humidity from "../assets/humidity.png";
import windy from "../assets/windy.png";
import { useRef, useState } from "react";
import { Link  } from "react-router-dom";
import back_to_home from "../assets/back-button.png" 

const Weather = () => {
  let [Weatherdata, setweatherdata] = useState(false);
  let inputref = useRef();

  const search = async (city) => {
    try {
      if (!city) {
        alert("Enter any of the city name");
        return;
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }

      setweatherdata({
        description: data.weather[0].description,
        Temperature: Math.floor(data.main.temp),
        Humidity: data.main.humidity,
        Wind: data.wind.speed,
        Location: data.name,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      });
    } catch (error) {
      console.error(error.message);
      setweatherdata(false)
    }
  };

 
  return (
    <>
      <div className={Weatherdata ? "w-full  sm:w-full     md:w-1/4 lg:w-1/4 xl:w-1/4 h-5/6 bg-gradient-to-b from-blue-600 to-cyan-500  rounded-lg  shadow-xl shadow-black flex flex-col items-center " :"sm:w-full     md:w-1/4 lg:w-1/4 xl:w-1/4  h-1/4 bg-gradient-to-b from-blue-600 to-cyan-500  rounded-lg  shadow-xl shadow-black flex justify-center items-center "}>
        <div className="w-full  h-1/5 rounded-2xl    flex justify-center items-center gap-2">
        <Link to={'/'}>       <img className="w-10 h-10" src={back_to_home} alt="" />  </Link>
          <input
            className={Weatherdata  ? "rounded-3xl h-1/3 w-7/12" :"rounded-3xl h-10 w-7/12"}
            type="text"
            placeholder="  Search..."
            ref={inputref}
          />
          <p
            className="w-10 h-10 bg-white rounded-full relative hover:cursor-pointer"
            onClick={() => {
              search(inputref.current.value);
            }}
          >
            {" "}
            <img className="absolute top-3 left-3" src={Search} alt="" />
          </p>
        </div>

        {Weatherdata && (
          <div className="w-full h-2/5  flex flex-col items-center cursor-text">
            <img className="w-1/2 h-4/5 " src={Weatherdata.icon} alt="" />
            <p>{Weatherdata.description}</p>
          </div>
        )}

        {Weatherdata && (
          <>
            <div className="w-full h-1/5 flex flex-col items-center justify-evenly">
              <p className=" text-white text-6xl leading- font-semibold ">
                {Weatherdata.Temperature}°c
              </p>

              <p className="text-white text-4xl leading-10">
                {Weatherdata.Location}
              </p>
            </div>

            <div className="w-11/12 h-1/5 flex  justify-between gap-10">
              <div className="w-1/2 flex items-center justify-evenly">
                <img className="w-10 h-10 " src={humidity} alt="" />

                <div>
                  <p>{Weatherdata.Humidity}%</p>
                  <p className="sm:flex sm: md:flex md:flex-nowrap lg:flex  lg:flex-nowrap ">Humidity</p>
                </div>
              </div>

              <div className="w-1/2 flex items-center justify-evenly">
                <img className="w-10 h-10" src={windy} alt="" />
                <div>
                  <p> {Weatherdata.Wind}km/h</p>
                  <p className=" w-full sm:flex sm:flex-nowrap  md:flex md:flex-nowrap lg:flex lg:flex-nowrap">Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Weather;
