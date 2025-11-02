import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const NotebookContext = createContext();

export default function NotebookProvider({ children }) {
  const [topics, setTopics] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  // 🧩 Load saved data from localStorage on startup
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("dsaNotebook"));
    if (savedData) {
      setTopics(savedData.topics || []);
      setQuestions(savedData.questions || []);
    }
  }, []);


  // 💾 Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem(
      "dsaNotebook",
      JSON.stringify({ topics, questions })
    );
  }, [topics, questions]);

  // ✍️ Functions
  const addTopic = (name) => {
    const newTopic = { id: Date.now(), name };
    setTopics((prev) => [...prev, newTopic]);
  };

  const addQuestion = (topicName, question) => {
  const newQuestion = { id: Date.now(), topicName, ...question };
  setQuestions((prev) => [...prev, newQuestion]);
  toast.success("Question added successfully! ✅");
};

  const deleteQuestion = (id) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
    toast.success("Question deleted successfully! 🗑️");
  };

  const editQuestion = (id, updatedData) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...updatedData } : q))
    );
    toast.success("Question updated successfully! ✏️");
  };

  return (
    <NotebookContext.Provider
      value={{
        questions,
        addQuestion,
        deleteQuestion,
        editQuestion,
      }}
    >
      {children}
    </NotebookContext.Provider>
  );
}
