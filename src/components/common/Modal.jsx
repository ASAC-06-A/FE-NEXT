'use client';

import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

const OpenButton = ({ children, style }) => {
  const { openModal } = useModal();
  return (
    <button onClick={openModal} className={style} type='button'>
      {children}
    </button>
  );
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

const CloseButton = ({ children, style }) => {
  const { closeModal } = useModal();

  return (
    <button
      onClick={() => {
        closeModal();
      }}
      className={style}
    >
      {children}
    </button>
  );
};

const SubmitButton = ({ onClick, children, style }) => {
  const { closeModal } = useModal();

  return (
    <button
      onClick={() => {
        closeModal();
        if (onClick) onClick();
      }}
      className={style}
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
Modal.CloseButton = CloseButton;
Modal.ModalTitle = ModalTitle;
Modal.SubmitButton = SubmitButton;
Modal.Body = ModalBody;

export { Modal, useModal };
