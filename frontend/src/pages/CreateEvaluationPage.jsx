import { useState } from "react";
import CreateEvaluation from '../components/teacherTasks/CreateEvaluation.jsx';

const CreateEvaluationPage = () => {
  const [evaluations, setEvaluations] = useState([]);

  const addEvaluation = (newEvaluation) => {
    setEvaluations([...evaluations, newEvaluation]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <CreateEvaluation addEvaluation={addEvaluation} />
      <div className="mt-6 p-4 bg-white shadow rounded-lg">
        <h2 className="text-primary-500 text-lg font-semibold">Evaluaciones Creadas</h2>
        <ul className="list-disc pl-5">
          {evaluations.length === 0 ? (
            <p className="text-title-400">No hay evaluaciones creadas.</p>
          ) : (
            evaluations.map((evalItem, index) => (
              <li key={index} className="text-title-400">
                <strong>{evalItem.name}</strong> - {evalItem.date}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default CreateEvaluationPage;
