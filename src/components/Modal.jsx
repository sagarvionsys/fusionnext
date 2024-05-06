import React, { useState } from 'react';
import { X } from 'lucide-react';

function Modal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    selectedOption: 'DevOps'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      selectedOption: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <>
      <div className='fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black z-50'>
        <div className='relative w-full max-w-md bg-white rounded-lg overflow-hidden shadow-xl'>
          <button className='absolute top-0 right-0 m-4 text-black' onClick={onClose}><X size={30}/></button>
          <div className='p-6'>
            <h1 className="text-lg font-bold mb-4 text-gray-800">Enquiry Now</h1>
            <form onSubmit={handleSubmit}>
        
              <div className="mb-4">
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Enter Your Number"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter Your Subject"
                />
              </div>

              <div className="mb-4">
                <select
                  name="selectedOption"
                  id="cars"
                  className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  value={formData.selectedOption}
                  onChange={handleSelectChange}
                >
                  <option value="AWS">AWS</option>
                  <option value="DevOps">DevOps</option>
                  <option value="PHP">PHP</option>
                </select>
              </div>

              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
