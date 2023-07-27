import Modal from "../componenets/Modal";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="py-1.5 border px-3 bg-blue-400 border-blue-500 text-white rounded-full"
        onClick={handleClick}
      >
        Open Modal
      </button>
      {showModal && <Modal onClose={handleClose} />}
    </div>
  );
}

export default ModalPage;
