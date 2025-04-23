import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p>I’m a passionate developer building minimal, professional web apps.</p>
    </motion.div>
  );
}
