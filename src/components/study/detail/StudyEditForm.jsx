'use client';

import Image from 'next/image';
import { useState } from 'react';

function StudyEditForm({ studyDetailData, onCancel, onSave, thumbnail }) {
  const [formData, setFormData] = useState(studyDetailData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <>
      <input
        type='text'
        name='studyTitle'
        value={formData.studyTitle}
        onChange={handleInputChange}
        className='border border-gray-300 rounded px-2 py-1 w-full text-3xl font-bold'
      />

      <input
        type='text'
        name='category'
        value={formData.category}
        onChange={handleInputChange}
        className='border border-gray-300 rounded px-2 py-1 w-full mt-2 text-sm'
      />
      <Image
        className='w-full h-64 object-cover rounded-md'
        src={thumbnail}
        alt={formData.studyTitle}
        width={500}
        height={256}
        placeholder='blur'
        blurDataURL='/default-thumbnail.jpg'
        priority
        onError={() => setThumbnail('/default-thumbnail.jpg')}
      />
      <textarea
        name='desc'
        value={formData.desc}
        onChange={handleInputChange}
        className='border border-gray-300 rounded px-2 py-1 w-full mt-4'
        rows='4'
      />
      <div className='space-x-2'>
        <button onClick={onCancel} className='px-4 py-2 bg-gray-300 text-gray-800 rounded'>
          취소
        </button>
        <button onClick={handleSave} className='px-4 py-2 bg-green-500 text-white rounded'>
          저장
        </button>
      </div>
    </>
  );
}

export default StudyEditForm;
