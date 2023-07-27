import ReatDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReatDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          <p>Hey! I accept the privacy terms and policies plz let me enter !</p>
          <div className="flex justify-end">
            <button
              className="py-1.5 border px-3 bg-blue-400 border-blue-500 text-white rounded-full"
              onClick={onClose}
            >
              I Accept
            </button>
          </div>
        </div>
      </div>
    </div>,

    document.querySelector(".modal-container")
  );
}

export default Modal;
