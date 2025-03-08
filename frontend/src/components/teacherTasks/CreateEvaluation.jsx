import { useState } from "react";

const CreateEvaluation = ({ selectedSubject }) => {
  const [newEvaluation, setNewEvaluation] = useState("");

  const handleAddEvaluation = () => {
    if (newEvaluation.trim() === "" || selectedSubject === "") return;

    console.log(`Nueva evaluación creada: ${newEvaluation} para ${selectedSubject}`);
    setNewEvaluation("");
  };

  return (
    <div className="p-4 bg-gray-50 shadow rounded-lg">
      <h2 className="text-primary-500 text-lg font-semibold mb-2">Crear Evaluación</h2>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-md"
          placeholder="Nombre de la evaluación"
          value={newEvaluation}
          onChange={(e) => setNewEvaluation(e.target.value)}
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
