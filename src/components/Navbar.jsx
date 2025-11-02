// import { SlNotebook } from "react-icons/sl";

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-800 text-white px-8 py-4 flex items-center justify-center shadow-md">
//       <div className="flex items-center gap-3">
//         <SlNotebook className="text-3xl text-yellow-400" />
//         <h1 className="text-2xl font-semibold tracking-wide">
//           DSA Revision Notebook
//         </h1>
//       </div>
//     </nav>
//   );
// }


// components/Navbar.jsx
import { SlNotebook } from "react-icons/sl";
import { useState } from "react";
import RevisionModal from "./RevisionModal";

export default function Navbar() {
  const [isRevisionOpen, setIsRevisionOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between shadow">
        <div className="flex items-center gap-2 text-2xl font-semibold tracking-wide">
          <SlNotebook className="text-3xl text-yellow-400" />
          <h1>DSA Revision Notebook</h1>
        </div>

        <button
          onClick={() => setIsRevisionOpen(true)}
          className="bg-blue-500 px-4 py-2 rounded text-white font-medium hover:bg-blue-600 transition"
        >
          🎯 Revision Mode
        </button>
      </nav>

      <RevisionModal
        isOpen={isRevisionOpen}
        onClose={() => setIsRevisionOpen(false)}
      />
    </>
  );
}
