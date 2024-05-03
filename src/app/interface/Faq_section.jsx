import React, { useState } from 'react';

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="accordion-item">
      <button
        className={`accordion-header bg-gray-600 w-full sm:w-[80%] text-white justify-left text-left font-bold p-2 border border-blue-500 ${isOpen ? '' : ''
          }`}
        onClick={onClick}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className='flex justify-between items-center'>
          {title}
          <span className='font-bold text-black-400  pl-10'>{isOpen ? '▲' : '▼'}</span>
        </span>
      </button>
      {isOpen && <div className="accordion-content bg-gray-100 p-4 w-full sm:w-[80%] m-auto">{content}</div>}
    </div>
  );
}



function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion p-5 font-bold ">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

function App() {
  const accordionItems = [
    {
      title: 'What courses do you offer at Fusion Software Institute?',
      content: 'Fusion Software Institute offers a wide range of courses in software development, including but not limited to programming languages such as Java, Python, JavaScript, and frameworks like React, Angular, and Node.js. Additionally, we provide courses in database management, web development, mobile app development, software engineering principles, and more. You can explore our course catalog on our website for detailed information.',
    },
    {
      title: 'How do I enroll in a course at Fusion Software Institute?',
      content: ' Enrolling in a course at Fusion Software Institute is easy. Simply visit our website and navigate to the "Courses" section. Choose the course you re interested in and click on the "Enroll Now" button. Follow the prompts to complete the enrollment process, including providing necessary information and making payment if applicable. Once enrolled, you ll receive further instructions via email.',
    },
    {
      title: 'Do you offer any online or remote learning options?',
      content: 'Yes, Fusion Software Institute offers both in-person and online learning options to cater to diverse student needs. Our online courses are designed to provide the same quality education and interactive experience as our in-person classes. You can participate in online lectures, access course materials, engage with instructors and classmates through virtual platforms, and complete assignments from the comfort of your home or any location with internet access.',
    },
    {
      title:'What sets Fusion Software Institute apart from other educational institutions?' ,
      content: 'At Fusion Software Institute, we pride ourselves on our industry-relevant curriculum, experienced instructors, hands-on learning approach, and personalized attention to each student. We are committed to helping our students succeed in their careers by providing high-quality education and support every step of the way. ',
    },
    {
      title: 'What career opportunities are available to graduates of Fusion Software Institute?' ,
      content: 'Graduates of Fusion Software Institute are well-equipped to pursue a wide range of career opportunities in the tech industry, including roles such as software developer, web developer, data analyst, cybersecurity specialist, and more. Our career services team provides job placement assistance, networking opportunities, and career guidance to help graduates launch successful careers in their chosen field.' ,
    },
    {
      title:'Is financial aid available for students and with what can we assist?',
      content:'Yes, we offer various financial aid options, including scholarships, grants, and tuition assistance programs, to eligible students. Our admissions team can provide more information on available financial aid opportunities and assist you in applying for assistance.',
    }
  ];

  return (
    <>
      <div className=" py-8 pb-5 mb-1 bg-gray-200 ">
        <h1 className='font-bold text-blue-800 text-3xl px-7 py-1'>FAQ</h1>
        <Accordion items={accordionItems} />

      </div>
      <hr className='py-1' />
    </>
  );
}

export default App;
