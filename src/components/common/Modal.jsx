'use client';

import { createContext, useState, useContext } from 'react';
import { createPortal } from 'react-dom';

const ModalContext = createContext();

const Modal = ({ children, handleReset }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (handleReset) handleReset();
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

const OpenButton = ({ children }) => {
  const { openModal } = useModal();
  return (
    <button
      onClick={openModal}
      className='block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-6 py-2.5 shadow-md transition duration-300'
      type='button'
    >
      {children}
    </button>
  );
};

const ModalPortal = ({ children }) => {
  const element = document.getElementById('modal-root');
  return createPortal(children, element);
};

const Content = ({ children }) => {
  const { isOpen, closeModal } = useModal();

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    isOpen && (
      <div
        className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50'
        onClick={handleBackgroundClick}
      >
        <div className='bg-white rounded-lg shadow-lg w-80 md:w-96 p-6 text-gray-800 relative'>
          {children}
        </div>
      </div>
    )
  );
};

const CloseButton = ({ onClick, children }) => {
  const { closeModal } = useModal();

  return (
    <button
      onClick={() => {
        closeModal();
        if (onClick) onClick();
      }}
      className='text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 transition duration-300'
    >
      {children}
    </button>
  );
};

const SubmitButton = ({ onClick, children }) => {
  const { closeModal } = useModal();

  return (
    <button
      onClick={() => {
        closeModal();
        if (onClick) onClick();
      }}
      className='text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 shadow-md transition duration-300'
    >
      {children}
    </button>
  );
};

const ModalTitle = ({ children }) => {
  return <h2 className='text-xl font-semibold mb-4 text-center'>{children}</h2>;
};

const ModalBody = ({ children }) => {
  return <p className='text-center mb-4'>{children}</p>;
};

// Modal 컴포넌트에 자식 컴포넌트 추가
Modal.OpenButton = OpenButton;
Modal.Content = Content;
Modal.ModalPortal = ModalPortal;
Modal.CloseButton = CloseButton;
Modal.ModalTitle = ModalTitle;
Modal.SubmitButton = SubmitButton;
Modal.Body = ModalBody;

export { Modal, useModal };
