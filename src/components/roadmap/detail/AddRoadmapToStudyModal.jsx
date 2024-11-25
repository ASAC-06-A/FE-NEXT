'use client';

import { getStudyData } from '@/app/api/studyApi';
import { useEffect, useState } from 'react';

function AddRoadmapToStudyModal({ isPopupOpen, setIsPopupOpen, onAddStudies, roadmapId }) {
  const [studyDatas, setStudyDatas] = useState([]);
  const [selectedStudies, setSelectedStudies] = useState([]);

  const fetchStudyData = async () => {
    try {
      const data = await getStudyData();
      setStudyDatas(data);
    } catch (error) {
      console.error('Error fetching study data:', error);
    }
  };

  useEffect(() => {
    fetchStudyData();
  }, []);

  const toggleSelectStudy = (studyId) => {
    setSelectedStudies((prev) =>
      prev.includes(studyId) ? prev.filter((id) => id !== studyId) : [...prev, studyId],
    );
  };

  const handleAddStudies = () => {
    onAddStudies(roadmapId, selectedStudies);
    setSelectedStudies([]);
    setIsPopupOpen(false);
  };

  const onClose = () => {
    setIsPopupOpen(false);
    setSelectedStudies([]);
  };

  if (!isPopupOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg w-96 p-6 shadow-lg relative'>
        <button
          className='absolute top-3 right-3 text-gray-500 hover:text-gray-800'
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className='text-lg font-semibold mb-4 text-center'>스터디 선택</h2>

        <div className='space-y-4'>
          {studyDatas.length > 0 ? (
            studyDatas.map((studyData) => (
              <div
                key={studyData.studyId}
                className={`p-4 border rounded-lg flex justify-between items-center shadow-sm hover:shadow-md transition ${
                  selectedStudies.includes(studyData.studyId) ? 'bg-blue-100 border-blue-400' : ''
                }`}
              >
                <div>
                  <h3 className='font-semibold'>{studyData.studyTitle}</h3>
                  <p className='text-sm text-gray-500'>
                    {studyData.desc.length > 15
                      ? `${studyData.desc.slice(0, 15)}...`
                      : studyData.desc}
                  </p>
                </div>
                <button
                  className={`px-3 py-1 rounded ${
                    selectedStudies.includes(studyData.studyId)
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                  onClick={() => toggleSelectStudy(studyData.studyId)}
                >
                  {selectedStudies.includes(studyData.studyId) ? '취소' : '선택'}
                </button>
              </div>
            ))
          ) : (
            <p className='text-sm text-gray-500 text-center'>스터디 데이터가 없습니다.</p>
          )}
        </div>

        <button
          className='mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600'
          onClick={handleAddStudies}
          disabled={selectedStudies.length === 0}
        >
          선택한 스터디 추가
        </button>
      </div>
    </div>
  );
}

export default AddRoadmapToStudyModal;
