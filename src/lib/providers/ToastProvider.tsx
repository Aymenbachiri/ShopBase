"use client";

import { createContext, useContext, useState, useCallback } from "react";

// Define the shape of a toast
type Toast = {
  id: number;
  message: string;
  type: "success" | "error" | "info";
};

// Create a context for the toast
const ToastContext = createContext<{
  addToast: (message: string, type: Toast["type"]) => void;
  removeToast: (id: number) => void;
} | null>(null);

// Toast component
const Toast: React.FC<Toast & { onClose: () => void }> = ({
  message,
  type,
  onClose,
}) => {
  return (
    <div className={`toast toast-${type}`}>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

// ToastProvider component
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: Toast["type"]) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
    setTimeout(() => removeToast(id), 3000); // Auto remove after 3 seconds
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// Custom hook to use the toast
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
