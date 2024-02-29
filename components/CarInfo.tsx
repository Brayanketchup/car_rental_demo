"use client";

import { CarProps } from '@/types';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Fragment } from 'react';



interface CarInfoProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps
}
export const CarInfo = ({ isOpen, closeModal, car }: CarInfoProps) => {

  const [shouldRender, setShouldRender] = useState(false);
  const [showAnimation, setshowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        setshowAnimation(true);
      }, 300); // Delay match the duration of transition
      return () => clearTimeout(timer);
    } else {
      setshowAnimation(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Delay match the duration of transition
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      {shouldRender && (
        <div className="fixed inset-0 z-10 overflow-y-auto" role="dialog" aria-modal="true">
          <div className={`fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-in-out ${showAnimation ? 'opacity-100' : 'opacity-0'}`} onClick={closeModal}></div>
          <div className={`flex min-h-full items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${showAnimation ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="p-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Modal Title</h3>
                <p className="mt-2 text-sm text-gray-500">modal description goes here</p>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse">
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
