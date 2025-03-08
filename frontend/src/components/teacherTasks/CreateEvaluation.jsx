import { useState } from "react";

const CreateEvaluation = ({ addEvaluation }) => {
  const [evaluationName, setEvaluationName] = useState("");
  const [evaluationDate, setEvaluationDate] = useState("");

  const handleAddEvaluation = () => {
    if (evaluationName.trim() === "" || evaluationDate === "") return;

    addEvaluation({ name: evaluationName, date: evaluationDate });
    setEvaluationName("");
    setEvaluationDate("");
  };

  return (
    <div className="p-4 bg-gray-50 shadow rounded-lg">
      <h2 className="text-primary-500 text-lg font-semibold mb-2">Crear Evaluación</h2>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="p-2 border rounded-md"
          placeholder="Nombre de la evaluación"
          value={evaluationName}
          onChange={(e) => setEvaluationName(e.target.value)}
        />
        <input
          type="date"
          className="p-2 border rounded-md"
          value={evaluationDate}
          onChange={(e) => setEvaluationDate(e.target.value)}
        />
        <button
          className="bg-secondary-500 text-white py-2 px-4 rounded hover:bg-secondary-600 transition"
          onClick={handleAddEvaluation}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default CreateEvaluation;
