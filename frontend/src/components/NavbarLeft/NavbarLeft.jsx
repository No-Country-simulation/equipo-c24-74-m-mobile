import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md">
      <div className="p-4">
        <img src="logo.png" alt="SkillSync EDU" className="h-8 mb-8" />
        <nav>
          <ul>
            <li className="mb-4">
              <a href="/dashboard" className="flex items-center text-gray-700 hover:text-blue-700">
                <i className="fas fa-home mr-3"></i>
                Home
              </a>
            </li>
            <li className="mb-4">
              <a href="/downloaded-reports" className="flex items-center text-gray-700 hover:text-blue-500">
                <i className="fas fa-clipboard mr-3"></i>
                Reportes
              </a>
            </li>
            <li className="mb-4">
              <a href="documents" className="flex items-center text-gray-700 hover:text-blue-500">
                <i className="fas fa-file-alt mr-3"></i>
                Documentos
              </a>
            </li>
            <li className="mb-4">
              <a href="inbox" className="flex items-center text-gray-700 hover:text-blue-500">
                <i className="fas fa-envelope mr-3"></i>
                Inbox
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <h2 className="text-gray-500 text-sm mb-4">CONFIGURACIÓN</h2>
          <ul>
            <li className="mb-4">
              <a href="settings" className="flex items-center text-gray-700 hover:text-blue-500">
                <i className="fas fa-cog mr-3"></i>
                Configuración
              </a>
            </li>
            <li>
              <a href="logout" className="flex items-center text-gray-700 hover:text-blue-500">
                <i className="fas fa-sign-out-alt mr-3"></i>
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
