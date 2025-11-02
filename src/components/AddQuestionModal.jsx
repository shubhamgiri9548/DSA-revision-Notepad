import React, { useState, useContext, useEffect } from "react";
import { NotebookContext } from "../context/NotebookContext";

export default function AddQuestionModal({ isOpen, onClose, selectedTopic, editData }) {
  const { addQuestion, editQuestion } = useContext(NotebookContext);

  const isEditing = !!editData;

  const [form, setForm] = useState({
    name: "",
    link: "",
    difficulty: "Easy",
    approach: "",
  });

  // 🩵 Add this useEffect to prefill data when editing
  useEffect(() => {
    if (isEditing && editData) {
      setForm({
        name: editData.name || "",
        link: editData.link || "",
        difficulty: editData.difficulty || "Easy",
        approach: editData.approach || "",
      });
    } else {
      // Reset form when adding a new question
      setForm({
        name: "",
        link: "",
        difficulty: "Easy",
        approach: "",
      });
    }
  }, [editData, isEditing]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Question name is required");
      return;
    }

    if (isEditing) {
      editQuestion(editData.id, form);
    } else {
      addQuestion(selectedTopic, { topicName: selectedTopic, ...form });
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
        <h2 className="text-xl font-semibold mb-4">
          {isEditing ? "Edit Question" : "Add Question"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium">Question Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border w-full p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Link</label>
            <input
              type="url"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
              className="border w-full p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Difficulty</label>
            <select
              value={form.difficulty}
              onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
              className="border w-full p-2 rounded"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Approach</label>
            <textarea
              rows="3"
              value={form.approach}
              onChange={(e) => setForm({ ...form, approach: e.target.value })}
              className="border w-full p-2 rounded"
            />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {isEditing ? "Save Changes" : "Add Question"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
