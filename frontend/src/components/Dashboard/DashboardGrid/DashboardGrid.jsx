import { useNavigate } from "react-router-dom";
import MainCard from "../MainCard/MainCard";
import StatCard from "../StatCard/StatCard";

const DashboardGrid = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <MainCard />

            {/* Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div
                    onClick={() => navigate("/downloaded-reports")}
                    className="cursor-pointer hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-lg p-4"
                >
                    <StatCard icon="👁" label="REPORTES DE EVALUACIONES" value="5 Reportes" />
                </div>
                <StatCard icon="📊" label="PROXIMAS EVALUACIONES" value="6 PENDIENTES" />
                <StatCard icon="📝" label="NOTIFICACIONES" value="2 Mensajes" />
            </div>

            {/* Contenido principal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="h-40 bg-gray-200 rounded-lg"></div>
                <div className="h-40 bg-gray-200 rounded-lg"></div>
                <div className="h-40 bg-gray-200 rounded-lg"></div>
                <div className="h-40 bg-gray-200 rounded-lg"></div>
            </div>
        </div>
    );
};

export default DashboardGrid;
