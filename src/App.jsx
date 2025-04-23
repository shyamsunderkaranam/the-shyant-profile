import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <main className="flex-1 p-6">
          <AnimatePresence mode="wait">
            {activeSection === "about" && <About key="about" />}
            {activeSection === "skills" && <Skills key="skills" />}
            {activeSection === "projects" && <Projects key="projects" />}
            {activeSection === "experience" && <Experience key="experience" />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
