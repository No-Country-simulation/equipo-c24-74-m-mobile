const StatCard = ({ icon, label, value }) => {
    return (
        <div className="bg-white shadow-lg p-4 rounded-lg text-center border border-gray-200">
            <div className="text-gray-600 text-sm">{icon} {label}</div>
            <h3 className="text-blue-600 font-semibold text-xl">{value}</h3>
        </div>
    );
};

export default StatCard;
