import { useState } from "react";
import CreateEvaluation from "./CreateEvaluation";
import ModalNotas from "./ModalNotas";

const EvaluationList = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);

  const addEvaluation = (evaluation) => {
    setEvaluations([...evaluations, evaluation]);
  };

  const deleteEvaluation = (id) => {
    setEvaluations(evaluations.filter(e => e.id !== id));
  };

  const handleOpenModal = (evaluation) => {
    setSelectedEvaluation(evaluation);
  };

  return (
    <div className="p-6">
      <CreateEvaluation addEvaluation={addEvaluation} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-primary-500 text-lg font-semibold mb-2">Evaluaciones Creadas</h3>
          {evaluations.filter(e => e.date !== null).length > 0 ? (
            <ul className="list-disc pl-4">
              {evaluations.filter(e => e.date !== null).map((evaluation) => (
                <li key={evaluation.id} className="mb-2 flex justify-between">
                  <button onClick={() => handleOpenModal(evaluation)} className="text-blue-500 underline">
                    {evaluation.subject}: {evaluation.name} - {evaluation.date}
                  </button>
                  <button onClick={() => deleteEvaluation(evaluation.id)} className="text-red-500">❌</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No hay evaluaciones creadas.</p>
          )}
        </div>
      </div>

      {selectedEvaluation && (
        <ModalNotas evaluation={selectedEvaluation} onClose={() => setSelectedEvaluation(null)} />
      )}
    </div>
  );
};

export default EvaluationList;
