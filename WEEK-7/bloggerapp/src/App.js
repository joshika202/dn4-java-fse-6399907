import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const [view, setView] = useState("books"); // could be: books, blogs, courses

  // Sample data
  const books = [
    { id: 1, title: "React Explained", author: "Zac Gordon" },
    { id: 2, title: "Learning JS", author: "Kyle Simpson" },
  ];

  const blogs = [
    { id: 101, title: "Hooks in Depth", topic: "React" },
    { id: 102, title: "Why useEffect Matters", topic: "React" },
  ];

  const courses = [
    { code: "CS101", name: "Intro to Web Development" },
    { code: "JS202", name: "Advanced JavaScript" },
  ];

  // Different ways of conditional rendering

  // 1. If-Else (wrapped in function)
  function renderSection() {
    if (view === "books") return <BookDetails books={books} />;
    else if (view === "blogs") return <BlogDetails blogs={blogs} />;
    else if (view === "courses") return <CourseDetails courses={courses} />;
    else return <p>❌ Invalid selection</p>;
  }

  return (
    <div className="App">
      <h1>🧠 Blogger App</h1>
      <div className="btns">
        <button onClick={() => setView("books")}>Books</button>
        <button onClick={() => setView("blogs")}>Blogs</button>
        <button onClick={() => setView("courses")}>Courses</button>
      </div>

      {/* 2. Element Variable */}
      {renderSection()}

      {/* 3. Ternary operator inside JSX */}
      <p>
        Currently viewing: <strong>{view === "books" ? "📘 Books" : view === "blogs" ? "📝 Blogs" : "🎓 Courses"}</strong>
      </p>

      {/* 4. Short-circuit rendering */}
      {view === "courses" && (
        <p style={{ color: "green" }}>You're eligible to enroll now! ✅</p>
      )}
    </div>
  );
}

export default App;
