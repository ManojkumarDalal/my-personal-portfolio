import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("JavaScript");
  // Available subjects (tabs)
  const tabs = ["JavaScript", "React", "Tailwind"];

  const { portfolioData } = useContext(PortfolioContext);

  return (
    <>
      <div className="flex justify-center border-b border-gray-300 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-6 text-md md:text-lg border-b-2 font-medium transition-colors duration-300 ${
              activeTab === tab
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.blogs[activeTab].map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-row items-center justify-around"
          >
            <div className="p-4 md:p-6 space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                {blog.title}
              </h2>
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full object-contain rounded-lg border-2 border-teal-500"
                />
              )}
              <p className="mt-2 text-gray-600 text-sm md:text-md text-justify">
                {blog.description}
              </p>
              <div className="mt-4">
                <a
                  href={blog.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm md:text-md"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
