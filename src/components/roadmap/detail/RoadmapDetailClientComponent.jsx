'use client';

import {
  deleteRoadmapDetailData,
  getRoadmapDetailData,
  postRoadmapDetailData,
} from '@/app/api/roadmapApi';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import AddRoadmapToStudyModal from '@/components/roadmap/detail/AddRoadmapToStudyModal';
import RoadmapItems from '@/components/roadmap/detail/RoadmapItems';

function RoadmapDetailClientComponent() {
  const [roadmapItems, setRoadmapItems] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [roadmapInfo, setRoadmapInfo] = useState({
    roadmapTitle: '',
    desc: '',
    category: '',
  });

  const { roadmapId } = useParams();

  const fetchRoadmapItem = async () => {
    try {
      const data = await getRoadmapDetailData(roadmapId);

      setRoadmapInfo({ roadmapTitle: data.roadmapTitle, desc: data.desc, category: data.category });
      setRoadmapItems(data.study.response);
    } catch (error) {
      console.error('Error fetching roadmap data:', error);
    }
  };

  useEffect(() => {
    fetchRoadmapItem();
  }, []);

  const addRoadmapItemData = async (roadmapId, studyId) => {
    try {
      await postRoadmapDetailData(roadmapId, studyId);
      fetchRoadmapItem();
    } catch (error) {
      console.error('Error post roadmap data:', error);
    }
  };

  const removeRoadmapItem = async (roadmapId, studyIds) => {
    try {
      const studyId = {
        studyId: [studyIds],
      };
      await deleteRoadmapDetailData(roadmapId, studyId);

      fetchRoadmapItem();
    } catch (error) {
      console.error('Error delete roadmap data:', error);
    }
  };

  return (
    <div className='space-y-6 m-6'>
      <h1 className='text-3xl font-bold text-center mb-2'>{roadmapInfo.roadmapTitle}</h1>
      <div className='text-center text-base mb-4'>{roadmapInfo.desc}</div>
      <div className='text-center text-sm text-gray-500 mb-6'>{roadmapInfo.category}</div>

      <div className='space-y-12 relative'>
        <RoadmapItems
          roadmapItems={roadmapItems}
          removeRoadmapItem={removeRoadmapItem}
          roadmapId={roadmapId}
        />

        <div className='flex items-center space-x-4 p-4 bg-white border shadow-lg rounded-lg'>
          <div className='w-32 h-32 border-dashed border-2 border-gray-400 rounded-lg flex items-center justify-center'>
            <span className='text-gray-500'>+</span>
          </div>
          <button onClick={() => setIsPopupOpen(true)} className='text-lg font-bold text-blue-500'>
            아이템 추가
          </button>
        </div>
      </div>
      <AddRoadmapToStudyModal
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
        onAddStudies={addRoadmapItemData}
        roadmapId={roadmapId}
      />
    </div>
  );
}

export default RoadmapDetailClientComponent;
