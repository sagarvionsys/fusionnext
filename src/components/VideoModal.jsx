import React from 'react';
import { X } from 'lucide-react';

function Modal({ onClose }) {
  return (
    <>
      <div className='fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black z-50'>
        <div className='relative w-full max-w-md bg-white rounded-lg overflow-hidden shadow-xl'>
          <button className='absolute top-0 right-0 m-4 text-black' onClick={onClose}><X size={30}/></button>
          <div className='p-6'>
            <div>
              <h1>Video Player</h1>
              <video width="640" height="360" controls autoPlay>
                <source src="/img/resume.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
