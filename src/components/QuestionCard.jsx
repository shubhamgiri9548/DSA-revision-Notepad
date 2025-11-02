// components/QuestionCard.jsx
import React, { useState } from "react";

export default function QuestionCard({ question, onEdit, onDelete }) {
  const [showFull, setShowFull] = useState(false);

  const getBadgeColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-200 text-green-800";
      case "Medium":
        return "bg-yellow-200 text-yellow-800";
      case "Hard":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-transform hover:scale-[1.01]">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">
            {question.link ? (
              <a
                href={question.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                {question.name}
              </a>
            ) : (
              question.name
            )}
          </h3>

          <span
            className={`text-xs px-2 py-1 rounded ${getBadgeColor(
              question.difficulty
            )}`}
          >
            {question.difficulty}
          </span>

          {question.approach && (
            <p className="mt-2 text-gray-600 text-sm">
              {showFull
                ? question.approach : question.approach.length > 100
                ? question.approach.slice(0, 100) + "..."
                : question.approach}
              {question.approach.length > 100 && (
                <button
                  onClick={() => setShowFull(!showFull)}
                  className="text-blue-500 hover:underline ml-1"
                >
                  {showFull ? "Show Less" : "Read More"}
                </button>
              )}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(question)}
            className="text-blue-500 hover:underline"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(question.id)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
