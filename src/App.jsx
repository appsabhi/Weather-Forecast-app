import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Welcome_Page from "./components/Welcome_Page";

const Weather = React.lazy(() => import("./components/Weather"));

const App = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Welcome_Page />} />
        <Route
          path="/weather_forecast"
          element={
            <Suspense
              fallback={
                <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
              </div>
              }
            >
              <Weather />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
