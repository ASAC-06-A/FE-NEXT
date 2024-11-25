'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

function AddStudyModal({ onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const openModal = () => {
    reset();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleFormSubmit = (data) => {
    onSubmit(data);
    closeModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-6 py-2.5 shadow-md transition duration-300'
      >
        추가하기
      </button>

      {isOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50'
          onClick={closeModal}
        >
          <div
            className='bg-white rounded-lg shadow-lg w-80 md:w-96 p-6 text-gray-800 relative'
            onClick={handleModalClick}
          >
            <form onSubmit={handleSubmit(handleFormSubmit)} className='space-y-4'>
              <h2 className='text-xl font-semibold mb-4 text-center'>새로운 스터디 추가</h2>

              <div className='flex flex-col'>
                <label className='text-sm font-medium text-gray-700'>강의 제목</label>
                <input
                  {...register('studyTitle', {
                    required: { value: true, message: '제목은 필수로 입력해주세요.' },
                  })}
                  className='border rounded-lg p-2 mt-1 focus:ring-blue-500 focus:border-blue-500'
                  placeholder='제목을 입력해주세요.'
                />
                {errors?.studyTitle && (
                  <p className='text-xs text-red-600 mt-1'>{errors?.studyTitle?.message}</p>
                )}
              </div>

              <div className='flex flex-col'>
                <label className='text-sm font-medium text-gray-700'>설명</label>
                <textarea
                  {...register('desc', {
                    required: { value: true, message: '설명은 필수로 입력해주세요.' },
                  })}
                  className='border rounded-lg p-2 mt-1 focus:ring-blue-500 focus:border-blue-500'
                  placeholder='강의에 대한 설명을 입력해주세요.'
                  rows='3'
                />
                {errors?.desc && (
                  <p className='text-xs text-red-600 mt-1'>{errors?.desc?.message}</p>
                )}
              </div>

              <div className='flex flex-col'>
                <label className='text-sm font-medium text-gray-700'>카테고리</label>
                <input
                  {...register('category', {
                    required: { value: true, message: '카테고리는 필수로 입력해주세요.' },
                  })}
                  className='border rounded-lg p-2 mt-1 focus:ring-blue-500 focus:border-blue-500'
                  placeholder='카테고리를 지정해주세요.'
                />
                {errors?.category && (
                  <p className='text-xs text-red-600 mt-1'>{errors?.category?.message}</p>
                )}
              </div>

              <div className='flex flex-col'>
                <label className='text-sm font-medium text-gray-700'>URL</label>
                <input
                  {...register('url', {
                    required: { value: true, message: '저장할 주소를 입력해주세요.' },
                  })}
                  className='border rounded-lg p-2 mt-1 focus:ring-blue-500 focus:border-blue-500'
                  placeholder='URL을 입력해주세요.'
                  type='url'
                />
                {errors?.url && <p className='text-xs text-red-600 mt-1'>{errors?.url?.message}</p>}
              </div>

              <div className='flex justify-between space-x-4 mt-6'>
                <button
                  type='button'
                  onClick={closeModal}
                  className='text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 transition duration-300'
                >
                  취소
                </button>
                <button
                  type='submit'
                  className='text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 shadow-md transition duration-300'
                >
                  확인
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddStudyModal;
