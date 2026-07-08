import { useEffect } from "react";
import "./toast.css";

function Toast({ message, type = "info", onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;

    const timer = window.setTimeout(() => {
      onClose?.();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className={`toast toast-${type}`} role="alert">
      <span>{message}</span>
      <button type="button" className="toast-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
}

export default Toast;
