import { useState } from "react";
import EvaluationList from '../components/teacherDashboard/EvaluationList.jsx';

const EvaluationListPage = () => {
  const [evaluations, setEvaluations] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <EvaluationList evaluations={evaluations} setEvaluations={setEvaluations} />
    </div>
  );
};

export default EvaluationListPage;
