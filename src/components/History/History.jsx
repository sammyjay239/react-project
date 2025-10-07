import React, { useEffect, useState } from 'react';
import image1 from '../../assets/history.jpg';
import image2 from '../../assets/card.jpg';


const demoHistory = [
  { id: 1, action: 'Viewed', item: 'Pizza', date: '2025-09-18' },
  { id: 2, action: 'Commented', item: 'Burger', date: '2025-09-17' },
  { id: 3, action: 'Viewed', item: 'Sushi', date: '2025-09-16' },
];

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Replace this with a fetch from your backend if you have one
    setHistory(demoHistory);
  }, []);

  return (
    <div className="mt-10 p-6 bg-white rounded shadow text-center mb-10 max-w-[80%] mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">History</h2>
      {history.length === 0 ? (
        <p className="text-gray-500">No history yet.</p>
      ) : (
        <ul>
          {history.map((entry) => (
            <li key={entry.id} className="mb-3 border-b pb-2">
              <span className="font-semibold">{entry.action}</span> on <span className="text-blue-600">{entry.item}</span>
              <span className="block text-xs text-gray-400">{entry.date}</span>
            </li>
          ))}
        </ul>
      )}
      <div>
        <h1 className='font-bold text-6xl text-blue-900 mt-6'>About Blog</h1>
        <div className='text-black flex items-center justify-between mt-10 gap-10' >
          <img className='w-200' src={image1} alt="" />
          <p >
            <h1 className='font-medium'>
              This blog takes me up to two month before finishing it up i used one week for the frontend and spent about like one and half month on the backend
            </h1>
            <button className='bg-blue-900 text-white py-3 px-4 rounded-full cursor-pointer hover:bg-blue-600 mt-10'>read more......</button>
          </p>
        </div>
      </div>
      <div className='mt-15'>
        <h1 className='text-blue-900 font-bold text-6xl'>About The Developer</h1>
        <div className='flex items-center justify-between gap-20'>
          <p>
           <h1 className='font-medium text-black'> My name is samdev 001 i'm 17 years old in coding school, and i finsh this year 2025,i'm a full-stack developer</h1>
           <button className='bg-blue-900 text-white hover:bg-blue-600 py-3 px-4 rounded-full cursor-pointer mt-10'>
              read more....
           </button>
          </p>
          <img className='w-150 mt-10' src={image2} alt="" />
        </div>
      </div>

    </div>
  );
}

export default History;
