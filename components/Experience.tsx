import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Amazon from "./works/Amazon";
import Upwork from "./works/Upwork";
import FloraSystem from "./works/FloraSystem";
import Inleads from "./works/Inleads";

const Experience = () => {
  const [workInleadsIT, setInleadsIT] = useState(true);
  const [floraSystem, setFloraSystem] = useState(false);
  const [upwork, setUpWork] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactbd = () => {
    setInleadsIT(true);
    setFloraSystem(false);
    setUpWork(false);
    setWorkAmazon(false);
  };

  const handleGoogle = () => {
    setInleadsIT(false);
    setFloraSystem(true);
    setUpWork(false);
    setWorkAmazon(false);
  };

  const handleApple = () => {
    setInleadsIT(false);
    setFloraSystem(false);
    setUpWork(true);
    setWorkAmazon(false);
  };
  const handleAmazon = () => {
    setInleadsIT(false);
    setFloraSystem(false);
    setUpWork(false);
    setWorkAmazon(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked"/>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactbd}
            className={`${
              workInleadsIT
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Inleads IT
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              floraSystem
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Flora System
          </li>
          <li
            onClick={handleApple}
            className={`${
              upwork
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Upwork
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Not Yet
          </li>
        </ul>
        {workInleadsIT && <Inleads />}
        {floraSystem && <FloraSystem />}
        {upwork && <Upwork />}
        {workAmazon && <Amazon />}
      </div>
    </section>
  );
};

export default Experience;
