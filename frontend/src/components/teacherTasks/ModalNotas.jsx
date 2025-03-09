import { useState, useEffect } from "react";

const ModalNotas = ({ evaluation, onClose }) => {
  const [students, setStudents] = useState([]);

useEffect(() => {
    fetch("/data/students.json")
    .then((res) => {
        if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => setStudents(data))
    .catch((error) => console.error("Error cargando students.json:", error));
}, []);

  const handleGradeChange = (id, grade) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, grade } : student
    ));
  };

  const handleSave = () => {
    console.log("Notas guardadas:", students);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-4">{evaluation.subject}: {evaluation.name}</h2>
        <ul className="space-y-2">
          {students.map(student => (
            <li key={student.id} className="flex justify-between">
              <span>{student.name}</span>
              <input
                type="number"
                className="w-16 p-1 border rounded"
                value={student.grade || ""}
                onChange={(e) => handleGradeChange(student.id, e.target.value)}
              />
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between">
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded">Guardar</button>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalNotas;
