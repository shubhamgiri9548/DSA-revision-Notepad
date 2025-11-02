import React, { useState, useContext } from "react";
import AddQuestionModal from "./AddQuestionModal";
import QuestionCard from "./QuestionCard";
import { NotebookContext } from "../context/NotebookContext";
import {toast} from 'react-hot-toast';

export default function MainArea({ selectedTopic }) {
  const { questions, deleteQuestion } = useContext(NotebookContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editQuestion, setEditQuestion] = useState(null);

 
  const topicQuestions = questions.filter(
    (q) => q.topicName === selectedTopic
  );

  //console.log(topicQuestions);

  const handleDelete = (id) => {
  if (confirm("Are you sure you want to delete this question?")) {
    deleteQuestion(id);
  }
};


  return (
    <main className="flex-1 p-6">
      {selectedTopic ? (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{selectedTopic} Questions</h2>
          <button
            onClick={() => {
              setEditQuestion(null);
              setIsModalOpen(true);
            }}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            + Add Question
          </button>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">
          Select a topic to view questions
        </p>
      )}

      {selectedTopic && (
        <div className="space-y-3">
          {topicQuestions.length > 0 ? (
            topicQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                onEdit={(q) => {
                  setEditQuestion(q);
                  setIsModalOpen(true);
                }}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p className="text-gray-400">No questions yet.</p>
          )}
        </div>
      )}

      <AddQuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTopic={selectedTopic}
        editData={editQuestion}
      />
    </main>
  );
}
