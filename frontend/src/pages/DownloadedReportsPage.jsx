import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import * as XLSX from "xlsx";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DownloadedReportsPage = () => {
    const [notas, setNotas] = useState([]);
    const [selectedMateria, setSelectedMateria] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetch("/data/notas.json")
            .then((response) => response.json())
            .then((data) => setNotas(data))
            .catch((error) => console.error("Error cargando datos:", error));
    }, []);

    const openModal = (materia) => {
        setSelectedMateria(materia);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedMateria(null);
    };

    // Descargar reporte en TXT
    const downloadTXT = (materia) => {
        const contenido = `Materia: ${materia.materia}\nNota Final: ${materia.nota_final}\nEvaluaciones: ${materia.evaluaciones.join(", ")}`;
        const blob = new Blob([contenido], { type: "text/plain" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `reporte_${materia.materia}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    // Descargar reporte en Excel
    const downloadExcel = (materia) => {
        const data = [
            ["Materia", "Nota Final", "Evaluaciones"],
            [materia.materia, materia.nota_final, materia.evaluaciones.join(", ")],
        ];
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Reporte");
        XLSX.writeFile(wb, `reporte_${materia.materia}.xlsx`);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Notas del Alumno</h1>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Materia</th>
                        <th className="border p-2">Nota Final</th>
                        <th className="border p-2">Informes</th>
                    </tr>
                </thead>
                <tbody>
                    {notas.map((nota, index) => (
                        <tr key={index} className="border">
                            <td
                                className="border p-2 cursor-pointer text-blue-600 hover:underline"
                                onClick={() => openModal(nota)}
                            >
                                {nota.materia}
                            </td>
                            <td className="border p-2">{nota.nota_final}</td>
                            <td className="border p-2 flex gap-2">
                                <button
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
                                    onClick={() => downloadTXT(nota)}
                                >
                                    TXT
                                </button>
                                <button
                                    className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-700"
                                    onClick={() => downloadExcel(nota)}
                                >
                                    Excel
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal con el gráfico de barras */}
            {modalOpen && selectedMateria && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">{selectedMateria.materia} - Evaluaciones</h2>
                        <div className="w-full h-60">
                            <Bar
                                data={{
                                    labels: selectedMateria.evaluaciones.map((_, index) => `Evaluación ${index + 1}`),
                                    datasets: [
                                        {
                                            label: "Notas",
                                            data: selectedMateria.evaluaciones,
                                            backgroundColor: "rgba(54, 162, 235, 0.6)",
                                        },
                                    ],
                                }}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                }}
                            />
                        </div>
                        <button
                            className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 w-full"
                            onClick={closeModal}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DownloadedReportsPage;
