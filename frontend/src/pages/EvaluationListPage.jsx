import { useState } from "react";
import EvaluationList from "../components/teacherDashboard/EvaluationList";

const EvaluationListPage = () => {
  const [evaluations, setEvaluations] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <EvaluationList evaluations={evaluations} />
    </div>
  );
};

export default EvaluationListPage;
