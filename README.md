🧠 DSA Revision Notepad

A simple and efficient web app to organize and revise DSA questions by topic.
You can add, edit, and delete questions for categories like Arrays, Strings, Dynamic Programming, Linked Lists, and more.
The app also includes a Revision Mode that helps you revisit your saved questions topic-wise.

🚀 Features

✅ Add Questions by Topic

Create questions under categories like Arrays, Strings, Stack, Queue, Linked List, Binary Search, and DP.

Each question includes fields like:

Question Name

Link

Approach / Notes

✅ Edit & Delete Questions

Easily modify or remove questions anytime.

✅ Revision Mode

Quickly review all your saved questions topic-wise with a single click.

✅ Persistent Data ( localStorage)

Your notes remain available even after a page refresh.

✅ Clean UI with Toast Notifications

Instant feedback on add/edit/delete actions with modern toast pop-ups.

🛠️ Tech Stack

Frontend:

React.js (Vite)

Context API (for global state management)

React Hot Toast (for notifications)

Tailwind CSS (for UI styling)

🧩 Folder Structure
📁 src
 ┣ 📂 components
 ┃ ┣ Navbar.jsx
 ┃ ┣ Sidebar.jsx
 ┃ ┣ MainArea.jsx
 ┃ ┗ AddQuestionModal.jsx
 ┣ 📂 context
 ┃ ┗ NotebookContext.jsx
 ┣ App.jsx
 ┗ main.jsx

🧠 How to Use

Select a Topic from the sidebar (like Arrays, Strings, etc.)

Add a New Question with details like name, link, and approach

View or Edit your existing questions

Click on “Revision Mode” to go through your saved questions again

⚙️ Installation and Setup
# 1️⃣ Clone the repository
git clone https://github.com/your-username/dsa-revision-notepad.git

# 2️⃣ Move into the project directory
cd dsa-revision-notepad

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run the development server
npm run dev
