import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const FloraSystem = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Support Engineer at
        <span className="text-textGreen tracking-wide">Flora Systems Limited</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - December 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Research and identify solutions to software, Database and application.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Taking any kind of software issues from clients and resolve them or provide to the development team. 
          Testing application, databases, server and so on. Publishing application to the live server.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Sql query in system database for any changes or findings.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Cooperate with senior developers to create work on different web application.
        </li>
      </ul>
    </motion.div>
  );
};

export default FloraSystem;
