import { useState } from "react";
import SectionTitle from "./SectionTitle";
import FloraSystem from "./works/FloraSystem";
import Inleads from "./works/Inleads";
import Upwork from "./works/Upwork";

const Experience = () => {
  const [workInleadsIT, setWorkInleadsIT] = useState(true);
  const [workFloraSystem, setWorkFloraSystem] = useState(false);
  const [workUpwork, setWorkUpwork] = useState(false);

  const handleInleadsIT = () => {
    setWorkInleadsIT(true);
    setWorkFloraSystem(false);
    setWorkUpwork(false);
  };

  const handleFloraSystem = () => {
    setWorkInleadsIT(false);
    setWorkFloraSystem(true);
    setWorkUpwork(false);
  };

  const handleUpwork = () => {
    setWorkInleadsIT(false);
    setWorkFloraSystem(false);
    setWorkUpwork(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleInleadsIT}
            className={`${
              workInleadsIT
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Inleads IT
          </li>
          <li
            onClick={handleFloraSystem}
            className={`${
              workFloraSystem
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Flora Systems Limited
          </li>
          <li
            onClick={handleUpwork}
            className={`${
              workUpwork
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Upwork Freelancce
          </li>
        </ul>
        {workInleadsIT && <Inleads />}
        {workFloraSystem && <FloraSystem />}
        {workUpwork && <Upwork />}
      </div>
    </section>
  );
};

export default Experience;
