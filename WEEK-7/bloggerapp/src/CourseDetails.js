import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div>
      <h2>🎓 Course List</h2>
      <ul>
        {courses.map((course, i) => (
          <li key={course.code}>
            {course.name} ({course.code})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
