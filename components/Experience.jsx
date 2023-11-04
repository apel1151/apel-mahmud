import { useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import * as React from "react";
import { TiArrowForward } from "react-icons/ti";
import SwipeableViews from "react-swipeable-views";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const smallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <section id="experience" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
      <Box
        className="mx-auto bg-bodyColor"
        id="experience"
        sx={{
          width: 700,
          position: "relative",
          minHeight: 400,
        }}
      >
        <AppBar position="static" className="bg-bodyColor flex w-1/2 sm:w-full">
          <Tabs
            value={value}
            onChange={handleChange}
            // indicatorColor="secondary"
            variant="fullWidth"
            aria-label="action tabs example"
            orientation={smallScreen ? "vertical" : "horizonal"}
          >
            <Tab label="Inleads IT" {...a11yProps(0)} className="text-white" />
            <Tab
              label="Flora Systems Limited"
              {...a11yProps(1)}
              className="text-white"
            />
            <Tab
              label="Upwork Freelance"
              {...a11yProps(2)}
              className="text-white"
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-1/2 mr-4 sm:w-full"
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
                  Cooperate with designers to create clean interfaces and
                  simple, intuitive interactions.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                  <span className="text-textGreen mt-1">
                    <TiArrowForward />
                  </span>
                  Complete detailed programming and development tasks for
                  front-end public and internal websites as well as challenging
                  back-end server code.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                  <span className="text-textGreen mt-1">
                    <TiArrowForward />
                  </span>
                  Handle errors and optimize usability
                </li>
              </ul>
            </motion.div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-1/2 mr-4 sm:w-full"
            >
              <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Software Support Engineer at
                <span className="text-textGreen tracking-wide">
                  Flora Systems
                </span>
              </h3>
              <p className="text-sm mt-1 font-medium text-textDark">
                Jan 2023 - December 2023
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                  <span className="text-textGreen mt-1">
                    <TiArrowForward />
                  </span>
                  Research and identify solutions to software, Database and
                  application.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                  <span className="text-textGreen mt-1">
                    <TiArrowForward />
                  </span>
                  Taking any kind of software issues from clients and resolve
                  them or provide to the development team. Testing application,
                  databases, server and so on. Publishing application to the
                  live server.
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
                  Cooperate with senior developers to create work on different
                  web application.
                </li>
              </ul>
            </motion.div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-1/2 mr-4 sm:w-full"
            >
              <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Freelance work at
                <span className="text-textGreen tracking-wide">Upwork</span>
              </h3>
              <p className="text-sm mt-1 font-medium text-textDark">
                June 2023 - Present
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                  <span className="text-textGreen mt-1">
                    <TiArrowForward />
                  </span>
                  I&apos;ve tremendous experience of successful design projects
                  for small agencies and enterprise clients.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                  <span className="text-textGreen mt-1">
                    <TiArrowForward />
                  </span>
                  In my work, I do my best to meet my client&apos;s expectations
                  and deadlines. I look forword to discussing project together.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                  <span className="text-textGreen mt-1">
                    <TiArrowForward />
                  </span>
                  Responsive design, handle errors and optimize usability are
                  highly demonstrated by me.
                </li>
              </ul>
            </motion.div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </section>
  );
}
