import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, comapnyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            target="_blank"
            className="text-primary capitalize"
            href={comapnyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Expereience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Expereience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Associate Software Engineer"
            company="CodableX Pvt Ltd."
            time="April2022-February2023"
            address="Jaffna,Sri Lanka"
            work="o	Collaborate with cross-functional teams to develop and maintain web-based applications using MERN stack technologies, including Mongo DB, Express, React, and Node.js
            o	Participate in the design and development of software solutions that meet project requirements and adhere to coding standards and best practices.
            o	Write and maintain clean and efficient code, and participate in code reviews and testing to ensure code quality and maintainability.
            o	Assist in developing and maintaining RESTful APIs to support communication between the frontend and backend systems.
            o	Used Redux for complex state management and to improve the maintainability and scalability of codebase.
            "
          />
          <Details
            position="Software Engineer Intern"
            company="Cazzora Soft Solutions Pvt Ltd."
            time="March2018-August2021"
            address="Walasmulla,Sri Lanka"
            work="o	Worked with a team of developers to design and develop web applications using the Laravel PHP framework.
            o	Built and maintained database schemas and RESTful APIs using MySQL database.
            o	Developed responsive and user-friendly UI/UX designs using HTML, CSS, and JavaScript.
            o	Implemented functionality using various JavaScript libraries such as Vue.js and jQuery.
            o	Participated in code reviews, testing, and bug fixing to ensure high-quality and maintainable code.
            o	Integrated third-party services, such as payment gateways and social media APIs, into the applications.
            o	Assisted in deploying applications to production servers using Docker and AWS.
            o	Developed multiple Wordpress websites to meet the Clients requirements.
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Expereience;
