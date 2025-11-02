import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const topics = [
    "Array",
    "String",
    "Binary Search",
    "Linked List",
    "Stack",
    "Queue",
    "DP",
    "Tree",
    "Graph",
  ];

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />

        {/* Layout Section */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar
            topics={topics}
            selectedTopic={selectedTopic}
            onSelectTopic={setSelectedTopic}
          />

          {/* Main content scrolls independently */}
          <div className="flex-1 overflow-y-auto">
            <MainArea selectedTopic={selectedTopic} />
          </div>
        </div>
      </div>
    </>
  );
}
