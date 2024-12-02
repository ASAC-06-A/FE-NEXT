'use client';

import { deleteStudyData, getStudyData, postStudyData } from '@/app/api/studyApi';
import SelectBox from '@/components/common/SelectBox';

import AddStudyModal from '@/components/study/AddStudyModal';
import CardList from '@/components/study/CardList';
import Toast from '@/lib/showToast';

import { useEffect, useState } from 'react';

function StudyClientComponent() {
  const [studyDatas, setStudyDatas] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchStudyData = async () => {
    try {
      const data = await getStudyData();
      setStudyDatas(data);
    } catch (error) {
      Toast('error', '강의 조회를 실패하였습니다.');
      console.error('Error fetching study data:', error);
    }
  };

  useEffect(() => {
    fetchStudyData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteStudyData(id);
      fetchStudyData();
      Toast('success', '강의가 성공적으로 삭제되었습니다.');
    } catch (error) {
      Toast('error', '강의 삭제를 실패하였습니다.');
      console.error('Error deleting study data:', error);
    }
  };

  const filteredData =
    selectedCategory === 'All'
      ? studyDatas
      : studyDatas.filter((studyData) => studyData.category === selectedCategory);

  const handleAdd = async ({ studyTitle, desc, category, url }) => {
    try {
      await postStudyData({ studyTitle, desc, category, url });
      fetchStudyData();
      Toast('success', '강의가 성공적으로 추가되었습니다.');
    } catch (error) {
      Toast('error', '강의 추가를 실패하였습니다.');
      console.error('Error adding study data:', error);
    }
  };

  return (
    <>
      <div className='container flex justify-end m-4 gap-3 mx-auto'>
        <SelectBox
          studyDatas={studyDatas}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <AddStudyModal onSubmit={handleAdd} />
      </div>
      {studyDatas.length === 0 && (
        <div className='flex items-center justify-center mt-36'>
          현재 추가된 강의가 없습니다. 원하시는 강의를 추가해보세요.
        </div>
      )}
      <CardList studyDatas={filteredData} handleDelete={handleDelete} />
    </>
  );
}

export default StudyClientComponent;
