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
    <main className="flex flex-colpy-5 pt-6   pb-6  ">
      <div className="test">
        <h1 className="px-7 px-20 text-lg font-serif h-8 font-bold  m-1 text-blue-500 dark:text-blue-100">Enquiry  Now</h1>
      </div>
      <div className="Inpu_fileds  justify-center   ">
        <form className="form-inline md:flex  justify-between space-5 " onSubmit={handleSubmit}>
          <input
            type="name"
            className=" m-1 block form-control font-serif  h-8 text-black dark:bg-gray-900 dark:text-gray-300 outline-none border mb-2 md:mr-2 md:mb-0 md:pl-2 rounded-lg "
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
          <input
            type="tel"
            className="m-1 form-control block h-8 font-serif text-black dark:bg-gray-900 dark:text-gray-300 outline-none border mb-2 md:mr-2 md:mb-0 md:pl-2 rounded-lg"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter Your Number"
          />


          <input
            type="email"
            className="m-1 form-control block h-8 font-serif text-black dark:bg-gray-900 dark:text-gray-300 outline-none border mb-2 md:mr-2 md:mb-0 md:pl-2 rounded-lg"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />

        <input
            type="text"
            className="m-1 form-control block h-8 font-serif text-black dark:bg-gray-900 dark:text-gray-300 outline-none border mb-2 md:mr-2 md:mb-0 md:pl-2 rounded-lg"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Your Subject"
          />

          <select
            name="selectedOption"
            id="cars"
            className="h-8 w-60 sm:w-20 m-1 font-serif text-black dark:bg-gray-900 dark:text-gray-300 outline-none border pl-2 w-full md:pr-2 rounded-lg md:display-block"
            style={{ width: '160px' }} // Inline style to set width to 20px for mobile devices
            value={formData.selectedOption}
            onChange={handleSelectChange}
          >

            <option value="mercedes">Lamborghini</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </select>
          <div className="button-container md:flex  md:items-center md:space-x-1 md:mt-0">
            <button
              className="m-1 bg-orange-500 hover:bg-blue-700 font-serif h-8 text-white px-5 ml-0 md:ml-8 rounded md:w-auto "
              type="submit"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </main>
  );
};

export default Enquiry_home;
