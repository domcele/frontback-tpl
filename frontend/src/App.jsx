import { useState, useEffect } from "react";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        setStudents(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {students.map((student) => (
        <div key={student._id}>
          {" "}
          {student.name} studies in: {student.uni}
        </div>
      ))}
    </div>
  );
};

export default App;
