export default function Sidebar({ activeSection, setActiveSection, darkMode, setDarkMode }) {
  const navItems = ["about", "skills", "projects", "experience"];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold mb-8">Your Name</div>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <button
              key={item}
              className={`block text-left w-full px-2 py-1 rounded ${
                activeSection === item
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex items-center justify-between mt-8">
        <span>Dark</span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="hidden"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full p-1 flex items-center">
            <span
              className={`bg-white dark:bg-gray-900 w-4 h-4 rounded-full transition-transform ${
                darkMode ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </span>
        </label>
      </div>
    </aside>
  );
}
