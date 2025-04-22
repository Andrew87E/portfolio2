import React, { useState, useEffect, useCallback } from "react";
import { Check } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const PortfolioChecklist = () => {
  const [checklist, setChecklist] = useState({
    performance: {
      title: "Performance & Optimization",
      items: [
        { id: 1, text: "Lazy load images and heavy components", done: false },
        {
          id: 2,
          text: "Minimize bundle size (check with React Developer Tools)",
          done: false,
        },
        {
          id: 3,
          text: "Remove unused Tailwind classes with PurgeCSS",
          done: false,
        },
        { id: 4, text: "Implement proper caching strategies", done: false },
        {
          id: 5,
          text: "Test loading speeds across different network conditions",
          done: false,
        },
      ],
    },
    content: {
      title: "Content & Projects",
      items: [
        {
          id: 1,
          text: "Update all project descriptions with clear problem-solution narratives",
          done: false,
        },
        {
          id: 2,
          text: "Add live demo links and GitHub repositories for each project",
          done: false,
        },
        {
          id: 3,
          text: "Include tech stack details and your role in each project",
          done: false,
        },
        {
          id: 4,
          text: "Proofread all content for spelling and grammar",
          done: false,
        },
        {
          id: 5,
          text: "Ensure contact information is current and working",
          done: false,
        },
      ],
    },
    testing: {
      title: "Testing & Compatibility",
      items: [
        {
          id: 1,
          text: "Test on major browsers (Chrome, Firefox, Safari, Edge)",
          done: false,
        },
        {
          id: 2,
          text: "Verify responsive design on different screen sizes",
          done: false,
        },
        { id: 3, text: "Check all links and navigation paths", done: false },
        { id: 4, text: "Validate forms and interactive elements", done: false },
        {
          id: 5,
          text: "Test keyboard navigation and accessibility",
          done: false,
        },
      ],
    },
    seo: {
      title: "SEO & Metadata",
      items: [
        {
          id: 1,
          text: "Add meta descriptions and titles for all pages",
          done: false,
        },
        { id: 2, text: "Include alt text for all images", done: false },
        { id: 3, text: "Create a sitemap.xml", done: false },
        { id: 4, text: "Configure robots.txt", done: false },
        {
          id: 5,
          text: "Verify Open Graph tags for social sharing",
          done: false,
        },
      ],
    },
  });

  const toggleItem = (
    section: "performance" | "content" | "testing" | "seo",
    itemId: number
  ) => {
    setChecklist((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        items: prev[section].items.map((item) =>
          item.id === itemId ? { ...item, done: !item.done } : item
        ),
      },
    }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateProgress = () => {
    let total = 0;
    let completed = 0;

    Object.values(checklist).forEach((section) => {
      total += section.items.length;
      completed += section.items.filter((item) => item.done).length;
    });

    return Math.round((completed / total) * 100);
  };

  useEffect(() => {
    const progress = calculateProgress();
    if (progress === 100) {
      toast.success(
        "Congratulations! Your portfolio is ready for deployment! 🎉",
        {
          duration: 4000,
          position: "top-center",
        }
      );
    } else if (progress % 25 === 0 && progress !== 0) {
      toast.success(`${progress}% completed! Keep going! 👏`, {
        duration: 2000,
        position: "top-center",
      });
    }
  }, [checklist, calculateProgress]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Toaster />
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Portfolio Finalization Progress
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        <p className="mt-2 text-gray-600">{calculateProgress()}% Complete</p>
      </div>

      {Object.entries(checklist).map(([key, section]) => (
        <div key={key} className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
          <div className="space-y-3">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                onClick={() =>
                  toggleItem(
                    key as "performance" | "content" | "testing" | "seo",
                    item.id
                  )
                }
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                  ${item.done ? "border-green-500 bg-green-500" : "border-gray-300"}`}
                >
                  {item.done && <Check className="w-4 h-4 text-white" />}
                </div>
                <span
                  className={`flex-1 ${item.done ? "line-through text-gray-500" : ""}`}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioChecklist;
