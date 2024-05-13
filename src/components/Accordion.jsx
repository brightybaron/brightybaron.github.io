import { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div
            className={`rounded-lg py-2 px-4 border-b border-gray-400 bg-gray-200`}
            onClick={() => handleClick(index)}
          >
            <div className="flex justify-between items-center cursor-pointer ">
              <span>{item.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  index === activeIndex ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              index === activeIndex
                ? "max-h-screen bg-gray-100 border"
                : "max-h-0"
            }`}
          >
            <div className="px-4 py-2">
              {item.content
                ? item.content
                : item.content2.map((item, index) => (
                    <ol key={index} className="list-disc px-1">
                      <li>{item}</li>
                    </ol>
                  ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
