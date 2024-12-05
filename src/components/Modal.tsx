import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 relative max-w-md max-h-[90vh] overflow-hidden">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    ✕
                </button>
                <div className="overflow-y-auto max-h-[80vh]">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
