import { useState } from "react";
import "./index.css";
import bottomBG from "./images/bg-bottom.svg";
import topBG from "./images/bg-top.svg";

const PricingComponent = () => {
  const [Annually, setAnnually] = useState(true);

  const handleChange = () => {
    setAnnually(!Annually);
  };
  return (
    <>
      <div className="absolute top-0 lg:top-0 lg:right-0 -z-50">
        <img src={topBG} alt="" className="w-full max-w-full" />
      </div>
      <div className="my-11 lg:my-0 p-8 lg:flex lg:flex-col items-center justify-center lg:h-screen">
        <h1 className="text-center text-slate-500 mb-11 lg:mb-8 text-4xl">
          Our Pricing
        </h1>
        <div className="toggle lg:mb-14">
          <label className="name">Annually</label>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={handleChange}
            checked={!Annually}
          />
          <label htmlFor="checkbox" className="label">
            <div className="ball"></div>
          </label>
          <label className="name">Monthly</label>
        </div>
        <div className="flex flex-wrap flex-col justify-center gap-8 text-center max-w-6xl mx-auto lg:gap-0 lg:flex-row lg:flex-nowrap lg:w-full">
          <article className="p-8 mt-16 lg:mt-0 rounded-xl bg-white shadow lg:w-full">
            <h2 className="text-slate-500 text-xl mb-5">Basic</h2>
            {!Annually ? (
              <h3 className="flex items-center justify-center text-[#494c5f] text-7xl mr-3">
                <span className="text-3xl">$</span>19.99
              </h3>
            ) : (
              <h3 className="flex items-center justify-center text-[#494c5f] text-7xl mr-3">
                <span className="text-3xl">$</span>199.99
              </h3>
            )}
            <ul className="flex justify-center flex-col my-8">
              <li className="border-t border-slate-300 py-3 text-slate-500">
                500 GB Storage
              </li>
              <li className="border-t border-slate-300 py-3 text-slate-500">
                2 Users Allowed
              </li>
              <li className="border-y border-slate-300 py-3 text-slate-500">
                Send up to 3 GB
              </li>
            </ul>
            <button className="linear-gradient text-white border-none py-2 w-full rounded-lg shadow uppercase cursor-pointer hover:bg-transparent hover:text-[#8B90E8]">
              Learn More
            </button>
          </article>
          <article className="linear-gradient-prof p-8 rounded-xl shadow lg:w-full lg:scale-110">
            <h2 className="text-white text-xl mb-5">Professional</h2>
            {!Annually ? (
              <h3 className="flex items-center justify-center text-white text-7xl mr-3">
                <span className="text-3xl">$</span>24.99
              </h3>
            ) : (
              <h3 className="flex items-center justify-center text-white text-7xl mr-3">
                <span className="text-3xl">$</span>249.99
              </h3>
            )}

            <ul className="flex justify-center flex-col my-8">
              <li className="text-white border-t py-3">1 TB Storage</li>
              <li className="text-white border-t py-3">5 Users Allowed</li>
              <li className="text-white border-y py-3">Send up to 1 GB</li>
            </ul>
            <button className="bg-white text-[#8B90E8] py-2 w-full rounded-lg shadow border-2 border-white uppercase cursor-pointer hover:bg-transparent hover:text-white prof-after-hover">
              <span className="prof-learn-more-btn">Learn More</span>
            </button>
          </article>
          <article className="p-8 rounded-xl bg-white shadow lg:w-full ">
            <h2 className="text-slate-500 text-xl mb-5">Master</h2>
            {!Annually ? (
              <h3 className="flex items-center justify-center text-[#494c5f] text-7xl mr-3">
                <span className="text-3xl">$</span>39.99
              </h3>
            ) : (
              <h3 className="flex items-center justify-center text-[#494c5f] text-7xl mr-3">
                <span className="text-3xl">$</span>399.99
              </h3>
            )}

            <ul className="flex justify-center flex-col my-8">
              <li className="border-t border-slate-300 py-3 text-slate-500">
                2 TB Storage
              </li>
              <li className="border-t border-slate-300 py-3 text-slate-500">
                10 Users Allowed
              </li>
              <li className="border-y border-slate-300 py-3 text-slate-500">
                Send up to 20 GB
              </li>
            </ul>
            <button className="linear-gradient text-white border-none py-2 w-full rounded-lg shadow uppercase cursor-pointer hover:bg-transparent hover:text-[#8B90E8]">
              Learn More
            </button>
          </article>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 -z-50">
        <img src={bottomBG} alt="" className="w-full max-w-full" />
      </div>
    </>
  );
};

export default PricingComponent;
