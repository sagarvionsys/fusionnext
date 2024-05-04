import React from 'react'
import { useState } from 'react';
import { Modal, message } from 'antd';



function Apply() {

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[job,setJob]=useState('');
    const[experience,setExperience]=useState('');
    const[resume,setResume]=useState('');

    const logInputValue = () => {
        const data={name,email,phone,job,experience,resume}
        console.log(data);
        message.success("Applied Successfully!");
        handleCancel();
        setName("");
        setEmail("");
        setPhone("");
        setJob("");
        setExperience("");
        setResume("");
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

  return (
    <div className='flex items-center justify-center'>
        <button onClick={showModal} className="block w-20 max-w-xs mx-au to bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 border border-black text-white rounded-lg px-1 py-1 font-semibold">Apply</button>
        <Modal footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h2 className='flex items-center justify-center font-bold text-xl pb-10 pt-2'>Application form</h2>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Full Name<span className='text-red-700'> *</span></label>
            <div className="flex">
              <input type="text" id="Name" className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} ></input>
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Email Address<span className='text-red-700'> *</span></label>
            <div className="flex">
              <input type="email" className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Mobile number<span className='text-red-700'> *</span></label>
            <div className="flex">
              <input type="tel" className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter mobile number" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Job Position Applied for<span className='text-red-700'> *</span></label>
            <div className="flex">
              <input type="text" id="Name" className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter position applied for" value={job} onChange={(e) => setJob(e.target.value)}></input>
            </div>
          </div>
        </div> 
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Years of Experience<span className='text-red-700'> *</span></label>
            <div className="flex">
              <select className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"  value={experience} onChange={(e) => setExperience(e.target.value)} >
                  <option>Please Select</option>
                  <option>less than 1 year</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5+ years</option>
              </select>
            </div>
          </div>
        </div>  
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Resume<span className='text-red-700'> *</span></label>
            <div className="flex">
              <input type="file" className="w-full bg-gray-100 -ml-15 pl-2 md:pl-6 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Upload resume" value={resume} onChange={(e) => setResume(e.target.value)} ></input>
            </div>
          </div>
        </div>  
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-1 py-1 sm:px-3 sm:py-3 font-semibold" onClick={logInputValue}>Apply</button>
          </div>
        </div>                   
        </Modal>
    </div>
  )
}

export default Apply