const EvaluationList = ({ evaluations }) => {
    return (
    <div className="p-4 bg-gray-50 shadow rounded-lg">
        <h2 className="text-primary-500 text-lg font-semibold mb-2">Evaluaciones</h2>
        {evaluations.length === 0 ? (
        <p className="text-title-400">No hay evaluaciones creadas.</p>
        ) : (
        <ul className="list-disc pl-5">
            {evaluations.map((evalItem, index) => (
            <li key={index} className="text-title-400">
                <strong>{evalItem.subject}:</strong> {evalItem.name}
            </li>
            ))}
        </ul>
        )}
    </div>
    );
};

export default EvaluationList;
