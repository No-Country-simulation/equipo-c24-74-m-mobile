import { useState } from "react";

const EvaluationModal = ({ isOpen, onClose, subjectData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96 max-w-full overflow-hidden">
        <h2 className="text-lg font-semibold mb-4">Evaluaciones</h2>

        {/* Contenedor con scroll habilitado */}
        <div className="overflow-y-auto max-h-80">
          {subjectData.map((student, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium">{student.nombre}</h3>
              <p><strong>Notas:</strong> {student.notas.join(", ")}</p>
              <p><strong>Nota Final:</strong> {student.final}</p>
            </div>
          ))}
        </div>

        <button
          className="mt-4 bg-secondary-500 text-white py-2 px-4 rounded hover:bg-secondary-600 transition"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default EvaluationModal;
