import React from "react";

const EvaluationList = ({ evaluations, setEvaluations }) => {
  const handleDelete = (index) => {
    setEvaluations(evaluations.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 bg-gray-50 shadow rounded-lg">
      <h2 className="text-primary-500 text-lg font-semibold mb-2">Lista de Evaluaciones</h2>
      {evaluations.length === 0 ? (
        <p className="text-title-400">No hay evaluaciones creadas.</p>
      ) : (
        <ul className="list-disc pl-5">
          {evaluations.map((evalItem, index) => (
            <li key={index} className="text-title-400 flex justify-between">
              <span>{evalItem.name} - {evalItem.date}</span>
              <button
                className="text-red-500 hover:underline"
                onClick={() => handleDelete(index)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EvaluationList;
