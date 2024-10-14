import { useState } from "react";

// Example blog data for each subject
const blogData = {
  JavaScript: [
    {
      id: 1,
      title: "Introduction to JavaScript",
      image: "../Introduction_to_javascript.PNG",
      description:
        "JavaScript is a powerful programming language used to create dynamic, interactive web content and handle both client-side and server-side development.",
      link: "https://medium.com/@rajhansmanoj77/introduction-to-javascript-the-language-of-the-web-86234a70e226",
    },
    {
      id: 2,
      title: "JavaScript Functions",
      image: "../javascript_function.PNG",
      description:
        "Mastering JavaScript functions empowers you to write reusable, efficient code that drives logic across applications. Functions are the core of JavaScript, enabling structured and modular programming.",
      link: "https://medium.com/@rajhansmanoj77/mastering-javascript-functions-a-comprehensive-guide-7fcf67d81bb9",
    },
    {
      id: 3,
      title: "ProtoType Inheritance in JavaScript",
      image: "../blog1.PNG",
      description:
        "Prototype inheritance in JavaScript allows objects to inherit properties and methods from a prototype object, enabling shared functionality and code reuse across instances.",
      link: "https://medium.com/@rajhansmanoj77/unraveling-prototypes-prototypal-inheritance-and-prototype-chaining-in-javascript-3dc865123aba",
    },
  ],
  React: [
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the basics of React and how it works.",
    },
    {
      id: 2,
      title: "React Hooks",
      image: "../blog1.PNG",
      description:
        "Understand the power of React Hooks like useState and useEffect.",
    },
  ],
  Tailwind: [
    {
      id: 1,
      title: "Getting Started with Tailwind CSS",
      description:
        "A quick start guide to using Tailwind CSS in your projects.",
    },
    {
      id: 2,
      title: "Responsive Design with Tailwind",
      description:
        "Learn how to create responsive designs using Tailwind’s utilities.",
    },
  ],
};

const TabsWithBlogs = () => {
  const [activeTab, setActiveTab] = useState("JavaScript");

  // Available subjects (tabs)
  const tabs = ["JavaScript", "React", "Tailwind"];

  return (
    <div className="container mx-auto py-6 px-4">
      {/* Tab Navigation */}
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
        {blogData[activeTab].map((blog) => (
          <div
            key={blog.id}
            className="bg-secondary shadow-lg rounded-lg overflow-hidden flex flex-row items-center justify-around"
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
    </div>
  );
};

export default TabsWithBlogs;
