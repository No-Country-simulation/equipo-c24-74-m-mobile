import { useState } from "react";

const subjects = [
  "Matemáticas", "Física", "Química", "Lengua", "Ciencias Sociales",
  "Ciencias Naturales", "Informática", "Educación Física", "Geografía", "Historia"
];

const CreateEvaluation = ({ addEvaluation, deleteEvaluation }) => {
  const [subject, setSubject] = useState("");
  const [evaluationName, setEvaluationName] = useState("");
  const [evaluationDate, setEvaluationDate] = useState("");
  const [evaluations, setEvaluations] = useState([]);

  const handleAddEvaluation = () => {
    if (subject.trim() === "" || evaluationName.trim() === "") return;

    const newEvaluation = {
      id: Date.now(),
      subject,
      name: evaluationName,
      date: evaluationDate || null,
      students: [], // Lista de estudiantes con sus notas
    };

    const updatedEvaluations = [...evaluations, newEvaluation];
    setEvaluations(updatedEvaluations);
    addEvaluation(newEvaluation);

    setSubject("");
    setEvaluationName("");
    setEvaluationDate("");
  };

  return (
    <div className="p-4 bg-gray-50 shadow rounded-lg">
      <h2 className="text-primary-500 text-lg font-semibold mb-2">Crear Evaluación</h2>
      <div className="flex flex-col gap-2">
        {/* Menú desplegable de asignaturas */}
        <select
          className="p-2 border rounded-md"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Seleccione una asignatura</option>
          {subjects.map((subj, index) => (
            <option key={index} value={subj}>{subj}</option>
          ))}
        </select>

        {/* Nombre de la evaluación */}
        <input
          type="text"
          className="p-2 border rounded-md"
          placeholder="Nombre de la evaluación"
          value={evaluationName}
          onChange={(e) => setEvaluationName(e.target.value)}
        />

        {/* Fecha de la evaluación */}
        <input
          type="date"
          className="p-2 border rounded-md"
          value={evaluationDate}
          onChange={(e) => setEvaluationDate(e.target.value)}
        />

        {/* Botón Agregar */}
        <button
          className="bg-secondary-500 text-white py-2 px-4 rounded hover:bg-secondary-600 transition"
          onClick={handleAddEvaluation}
        >
          Agregar Evaluación
        </button>
      </div>

      {/* Secciones de evaluaciones */}
      <div className="mt-6">
        {/* Evaluaciones Creadas */}
        <div className="bg-white shadow-md p-4 rounded-lg mb-4">
          <h3 className="text-primary-500 text-lg font-semibold mb-2">Evaluaciones Creadas</h3>
          {evaluations.filter(e => e.date).length > 0 ? (
            <ul>
              {evaluations.filter(e => e.date).map((evaluation) => (
                <li key={evaluation.id} className="flex justify-between items-center">
                  <span>{evaluation.subject}: {evaluation.name} - <strong>{evaluation.date}</strong></span>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => deleteEvaluation(evaluation.id)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          ) : <p className="text-gray-500">No hay evaluaciones creadas.</p>}
        </div>

        {/* Evaluaciones Pendientes */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-red-500 text-lg font-semibold mb-2">Evaluaciones Pendientes</h3>
          {evaluations.filter(e => !e.date).length > 0 ? (
            <ul>
              {evaluations.filter(e => !e.date).map((evaluation) => (
                <li key={evaluation.id} className="flex justify-between items-center">
                  <span>{evaluation.subject}: {evaluation.name}</span>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => deleteEvaluation(evaluation.id)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          ) : <p className="text-gray-500">No hay evaluaciones pendientes.</p>}
        </div>
      </div>
    </div>
  );
};

export default CreateEvaluation;
