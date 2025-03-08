import { useState, useEffect } from "react";
import EvaluationModal from "../teacherDashboard/EvaluationModal";

const subjects = [
  "Matemáticas", "Física", "Química", "Lengua", "Ciencias sociales",
  "Ciencias naturales", "Informática", "Educación física", "Geografía", "Historia"
];

const TeacherDashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [evaluationsData, setEvaluationsData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubjectData, setModalSubjectData] = useState([]);

  useEffect(() => {
    const fetchEvaluationsData = async () => {
      const response = await fetch("/data/grades.json");
      const data = await response.json();
      setEvaluationsData(data);
    };

    fetchEvaluationsData();
  }, []);

  const handleSubjectClick = (subject) => {
    setModalSubjectData(evaluationsData[subject] || []);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-title-500 text-2xl font-bold mb-4">Dashboard de Profesores</h1>

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-50 shadow rounded-lg">
          <label className="block text-title-500 font-semibold mb-2">Selecciona una asignatura:</label>
          <select
            className="w-full p-2 border rounded-md"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">-- Seleccionar --</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>

        {selectedSubject && (
          <div className="p-4 bg-gray-50 shadow rounded-lg">
            <h2 className="text-primary-500 text-lg font-semibold mb-2">{selectedSubject} - Estudiantes</h2>
            <ul className="list-disc pl-5">
              {evaluationsData[selectedSubject]?.map((student, index) => (
                <li
                  key={index}
                  className="text-title-400 cursor-pointer"
                  onClick={() => handleSubjectClick(selectedSubject)}
                >
                  {student.nombre}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <EvaluationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        subjectData={modalSubjectData}
      />
    </div>
  );
};

export default TeacherDashboard;
