'use client';

import { createContext, useContext, useState } from 'react';

const ModalContext = createContext(null);

export function ApplicationModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultTrack, setDefaultTrack] = useState('');

  const openModal = (track = '') => {
    setDefaultTrack(track);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Optional: clear the default after a small delay so the animation can play
    setTimeout(() => setDefaultTrack(''), 300);
  };

  return (
    <ModalContext.Provider value={{ isOpen, defaultTrack, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useApplicationModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useApplicationModal must be used inside ApplicationModalProvider');
  }
  return ctx;
}