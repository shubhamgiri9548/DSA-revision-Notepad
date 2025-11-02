
export default function Sidebar({ topics, selectedTopic, onSelectTopic }) {

  return (
    <aside className="bg-gray-100 w-56 p-4 border-r h-[calc(100vh-3.5rem)]">
      <h2 className="text-lg font-semibold mb-3">Topics</h2>
      <ul className="space-y-2">
        {topics.map((topic) => (
          <li
            key={topic}
            onClick={() => onSelectTopic(topic)}
            className={`cursor-pointer px-2 py-1 rounded ${
              selectedTopic === topic
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100"
            }`}
          >
            {topic}
          </li>
        ))}
      </ul>
    </aside>
  );
}
