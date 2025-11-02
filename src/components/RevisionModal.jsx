// components/RevisionModal.jsx
import React, { useContext, useState, useEffect } from "react";
import { NotebookContext } from "../context/NotebookContext";

export default function RevisionModal({ isOpen, onClose }) {
  const { questions } = useContext(NotebookContext);
  const [current, setCurrent] = useState(null);
  const [showApproach, setShowApproach] = useState(false);

  // 🌀 Pick a random question
  const pickRandom = () => {
    if (questions.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrent(questions[randomIndex]);
    setShowApproach(false);
  };

  useEffect(() => {
    if (isOpen) pickRandom();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-lg hover:text-gray-700"
        >
          ✕
        </button>

        {questions.length === 0 ? (
          <p className="text-center text-gray-600">No questions to revise yet!</p>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-1">{current?.name}</h2>
            <p className="text-sm text-gray-500 mb-2">
              Difficulty: <span className="font-medium">{current?.difficulty}</span>
            </p>

            {showApproach ? (
              <p className="text-gray-700 bg-gray-100 p-2 rounded mb-3 text-sm">
                {current?.approach || "No approach added."}
              </p>
            ) : (
              <button
                onClick={() => setShowApproach(true)}
                className="text-blue-600 underline text-sm mb-3"
              >
                Show Approach
              </button>
            )}

            <div className="flex justify-between">
              <button
                onClick={pickRandom}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Next Question
              </button>
              <button
                onClick={onClose}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
