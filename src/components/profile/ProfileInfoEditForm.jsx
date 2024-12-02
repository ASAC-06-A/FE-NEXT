'use client';

import { useState } from 'react';

function ProfileInfoEditForm({ profileData, handleEdit, handleEditToggle }) {
  const [formData, setFormData] = useState({
    name: profileData.name,
    introduce: profileData.introduce,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const hadleSubmit = (formData) => {
    if (handleEdit(formData)) handleEditToggle();
  };

  return (
    <div className='rounded-lg border border-gray-300 p-6 space-y-4'>
      <h2 className='text-2xl font-bold mb-4'>프로필 정보</h2>
      <div className='space-y-4'>
        <div className='flex justify-between items-center'>
          <label className='text-base text-gray-600'>닉네임</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className='border border-gray-300 rounded px-3 py-2 w-64'
          />
        </div>
        <div className='flex justify-between items-center'>
          <label className='text-base text-gray-600'>자기 소개</label>
          <textarea
            name='introduce'
            value={formData?.introduce}
            onChange={handleInputChange}
            placeholder='자기소개를 입력해주세요.'
            className='border border-gray-300 rounded px-3 py-2 w-64 h-20 resize-none'
          />
        </div>
        <div className='flex justify-end space-x-4'>
          <button
            onClick={handleEditToggle}
            className='px-4 py-2 border border-gray-300 rounded hover:bg-gray-300'
          >
            취소
          </button>
          <button
            onClick={() => hadleSubmit(formData)}
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfoEditForm;
