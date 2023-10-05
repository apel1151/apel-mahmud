import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Upwork = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
         Freelance work for client
        <span className="text-textGreen tracking-wide">@Apple</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
           I&apos;ve tremendous experience of successful design projects for small agencies and enterprise clients.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          In my work, I do my best to meet my client&apos;s expectations and deadlines. I look forword to discussing project together.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Responsive design, handle errors and optimize usability are highly demonstrated by me.
        </li>
      </ul>
    </motion.div>
  );
};

export default Upwork;
