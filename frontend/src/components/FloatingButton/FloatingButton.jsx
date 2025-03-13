import React from "react";

const FloatingButton = ({ url, position, label, tooltip }) => {
  const handleClick = () => {
    window.location.href = url; // Redirige a la URL proporcionada
  };

  return (
    <div className={`fixed ${position} flex flex-col items-center group`}>
      <button
        onClick={handleClick}
        className="w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        {label || "🔗"} {/* Etiqueta o ícono opcional */}
      </button>
      {/* Tooltip */}
      <span className="opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 mt-2 transition duration-300">
        {tooltip || ""}
      </span>
    </div>
  );
};

export default FloatingButton;
