'use client';

import { useState } from 'react';

import { AiFillCaretUp } from 'react-icons/ai';
import { AiFillCaretDown } from 'react-icons/ai';

function SelectBox({ studyDatas, selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    const categories = Array.from(new Set(studyDatas.map((studyData) => studyData.category)));
    setCategories(categories);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className='relative w-40'>
        <button
          className='flex items-center justify-between w-full bg-white border border-gray-300 rounded-lg text-sm px-4 py-2 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
          onClick={handleOpen}
        >
          <span>{selectedCategory || '카테고리'}</span>
          <div>{isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}</div>
        </button>
        {isOpen && (
          <ul className='absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto'>
            <li
              className='px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer'
              onClick={() => {
                setSelectedCategory('All');
                handleOpen();
              }}
            >
              All
            </li>
            {categories.map((category, index) => (
              <li
                key={index}
                className='px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  setSelectedCategory(category);
                  handleOpen();
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default SelectBox;
