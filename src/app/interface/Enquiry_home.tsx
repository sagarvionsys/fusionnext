import React, { useState } from 'react';

const Enquiry_home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    selectedOption: 'volvo'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      selectedOption: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <main className="">



      <div className=" ">
        <form className="flex flex-col items-center justify-center sm:flex-row sm:justify-start sm:m-4" onSubmit={handleSubmit}>
          <h1 className="px-7 px-20 text-lg font-serif h-8 font-bold m-1 text-blue-800 text-center">Enquiry Now</h1>
          <input
            type="name"
            className="m-2 block form-control font-serif h-8 text-black outline-none border text-center mb-2 rounded-lg w-1/2 sm:w-auto"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />


          <input
            type="tel"
            className="m-2 block form-control font-serif h-8 text-black text-center  outline-none border mb-2 rounded-lg w-1/2 sm:w-auto"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter Your Number"
          />

          <input
            type="email"
            className="m-2 block form-control font-serif h-8 text-black text-center outline-none border mb-2 rounded-lg w-1/2 sm:w-auto"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />

          <input
            type="text"
            className="m-2 block form-control font-serif h-8 text-black text-center outline-none border mb-2 rounded-lg w-1/2 sm:w-auto"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Your Subject"
          />

          <select
            name="selectedOption"
            id="cars"
            className="m-2 block form-control font-serif h-8 text-center text-black outline-none border mb-2 rounded-lg w-1/2 sm:w-auto"
            value={formData.selectedOption}
            onChange={handleSelectChange}
          >

            <option value="mercedes">Lamborghini</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </select>



          <button
            className="m-2 bg-orange-500 hover:bg-blue-700 font-serif h-8 text-white px-5  md:ml-10 md:block  md:mx-auto  rounded"
            type="submit"
          >
            Submit
          </button>

        </form>


      </div>


    </main>
  );
};

export default Enquiry_home;
