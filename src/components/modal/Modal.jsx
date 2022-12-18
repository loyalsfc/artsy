import React from 'react';

const Modal = ({ isOpen, onRequestClose, children }) => {

  return (
    <>
      {isOpen && (
        <div className="fixed bg-black/[0.5] z-40 top-0 bottom-0 left-0 right-0" onClick={onRequestClose}></div>
      )}
      {isOpen && (
        <div className="fixed font-semibold z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded  bg-white py-5 px-8">
            <div className='text-xl flex justify-between mb-4'>
                <span>Remove from cart</span> 
                <button onClick={onRequestClose}>x</button> 
            </div>
            <p className='py-2'>Do you really wish to remove this item from cart?</p>
            {children}
        </div>
      )}
    </>
  );
};

export default Modal;
