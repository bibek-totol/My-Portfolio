import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Banner1 from "./Banner1";
import QualityServices from "./QualityServices";
import RecentWorks from "./RecentWorks";
import Experience from "./Experience";
import SKills from "./SKills";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Initialoader from "./Initialoader";


let hasLoaded = false;
function First() {
  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const [loading, setLoading] = useState(!hasLoaded);

  useEffect(() => {
    if (!hasLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
        hasLoaded = true; 
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);
  

  return (
    <>
       <AnimatePresence>
        {loading && (
          <motion.div key="loader">
            <Initialoader />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="max-w-[1440px] mx-auto overflow-x-hidden overflow-y-clip bg-gradient-to-r from-[#004e92] to-[#000428] h-full">
          <Navbar />
          <Banner1 />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInFromRight}
            id="services"
          >
            <QualityServices />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInFromRight}
            id="works"
          >
            <RecentWorks />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInFromRight}
            id="education"
          >
            <Experience />
          </motion.div>

          <div id="skills">
            <SKills />
          </div>
          <div id="contact">
            <ContactUs />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default First;
