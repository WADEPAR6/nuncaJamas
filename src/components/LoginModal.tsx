// src/components/LoginModal.tsx
import React from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Iniciar Sesión</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">Email</label>
            <input type="email" id="email" className="border rounded w-full p-2" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">Contraseña</label>
            <input type="password" id="password" className="border rounded w-full p-2" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded w-full p-2">Iniciar Sesión</button>
        </form>
        <button onClick={onClose} className="mt-4 text-blue-500 hover:underline">Cerrar</button>
      </div>
    </div>
  );
};

export default LoginModal;