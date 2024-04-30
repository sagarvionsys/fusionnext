import React, { useState } from 'react';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button
        className="accordion-header bg-blue-100 w-full text-blacks justify-left text-left font-bold p-2 m-1 border border-blue-500 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        {title}<span className='flex justify-end text-center text-center '>
          <span className='font-bold text-blue-400'>+</span>
        </span>
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

function Accordion({ items }) {
  return (
    <div className="accordion p-5 font-bold  ">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

function App() {
  const accordionItems = [
    {
      title: 'What is Artificial Intelligence (AI)?',
      content: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It encompasses various techniques such as machine learning, natural language processing, computer vision, and more.',
    },
    {
      title: 'What is Machine Learning?',
      content: 'Machine Learning is a subset of AI that enables systems to automatically learn and improve from experience without being explicitly programmed. It involves algorithms that allow computers to analyze and interpret data to make decisions or predictions.',
    },
    {
      title: 'What is Blockchain?',
      content: 'Blockchain is a decentralized, distributed ledger technology that records transactions across multiple computers in a way that is immutable and transparent. It gained popularity as the underlying technology behind cryptocurrencies like Bitcoin, but its applications extend beyond digital currencies to areas like supply chain management, voting systems, and more.',
    },
  ];

  return (
    <div>
      <h1 className='font-bold text-blue-800 justify-center text-left px-7'>FAQ</h1>
      <Accordion items={accordionItems} />
    </div>
  );
}

export default App;
