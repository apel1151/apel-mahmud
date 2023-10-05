import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Inleads = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Internship at
        <span className="text-textGreen tracking-wide">Inleads IT</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
          May 2021 - August 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Cooperate with designers to create clean interfaces and simple, intuitive interactions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Complete detailed programming and development tasks for front-end public and internal websites as well as challenging back-end server code.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Handle errors and optimize usability
        </li>
      </ul>
    </motion.div>
  );
};

export default Inleads;