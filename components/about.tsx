// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-3">
  I'm <b className="font-medium"></b>, a developer from{" "}
  <b className="font-medium">Somalia</b> who loves the rain and writes code that might have bugs—but at least it doesn’t flood the streets!  
  I hold a <b className="font-medium">BCA from Jamhuriya University (JUST)</b> and a{" "}
  <b className="font-medium">Diploma in Project Management</b> from the University of Adelaide (edX).  
  My core technologies include <b className="font-medium">HTML, CSS, JavaScript, Next.js, Clerk, and Sanity</b>.  
  I have experience in backend development using <b className="font-medium">Node.js (Express.js) and Laravel (PHP)</b>,  
  as well as working with databases like <b className="font-medium">MySQL, PostgreSQL, and MongoDB</b>.  
  Additionally, I have skills in <b className="font-medium">REST API/GraphQL development, Git, and version control</b>.  
  I believe that if I know the features I need, the programming language doesn’t matter—it’s like rain, unpredictable but beautiful.  
  Currently, I’m looking for a <b className="font-medium">full-time position</b> as a software developer.  
</p>




      {/* Display another paragraph about the user's interests and hobbies. */}
      <p>
  <i className="italic">While I'm not coding</i>, I enjoy reading books, watching{" "}
  <b className="font-medium">4K travel videos</b>, and exploring{" "}
  <b className="font-medium">anime</b> and Asian dramas.
</p>

    </motion.section>
  );
};

// Export the About component.
export default About;
