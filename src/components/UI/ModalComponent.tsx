import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-70 py-10 z-50"
            onClick={onClose}
        >
            <div
                className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};