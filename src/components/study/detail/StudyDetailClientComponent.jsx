'use client';

import { getStudyDetailData, patchStudyDetailData } from '@/app/api/studyApi';
import StudyEditForm from '@/components/study/detail/StudyEditForm';
import StudyView from '@/components/study/detail/StudyView';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function StudyDetailClientComponent() {
  const [studyDetailData, setStudyDetailData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [thumbnail, setThumbnail] = useState('/default-thumbnail.jpg');
  const { studyId } = useParams();

  const fetchStudyDetailData = async () => {
    try {
      const data = await getStudyDetailData(studyId);
      setStudyDetailData(data);
    } catch (error) {
      console.error('Error fetching study data:', error);
    }
  };

  const getThumbnail = async () => {
    try {
      const res = await fetch(`/api/getThumbnail?url=${encodeURIComponent(studyDetailData.url)}`);
      if (!res.ok) throw new Error('Failed to fetch thumbnail');
      const data = await res.json();
      if (data.thumbnail) {
        setThumbnail(data.thumbnail);
      }
    } catch (error) {
      console.error('Error fetching thumbnail:', error);
    }
  };

  useEffect(() => {
    fetchStudyDetailData();
  }, [studyId]);

  useEffect(() => {
    if (studyDetailData.url) {
      getThumbnail(studyDetailData.url);
    }
  }, [studyDetailData.url]);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleEdit = async (updatedData) => {
    try {
      await patchStudyDetailData(studyId, updatedData);
      fetchStudyDetailData();
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating study data:', error);
    }
  };

  return (
    <div className='max-w-xl mx-auto p-6 space-y-6'>
      {isEditing ? (
        <StudyEditForm
          studyDetailData={studyDetailData}
          onCancel={handleEditToggle}
          onSave={handleEdit}
          thumbnail={thumbnail}
        />
      ) : (
        <StudyView
          studyDetailData={studyDetailData}
          onEdit={handleEditToggle}
          thumbnail={thumbnail}
        />
      )}
    </div>
  );
}

export default StudyDetailClientComponent;
