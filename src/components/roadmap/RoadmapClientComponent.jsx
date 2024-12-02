'use client';

import { useEffect, useState } from 'react';

import {
  deleteRoadmapData,
  getRoadmapData,
  patchRoadmapData,
  postRoadmapData,
} from '@/app/api/roadmapApi';
import AddRoadmapModal from '@/components/roadmap/AddRoadmapModal';
import CardList from '@/components/roadmap/RoadmapCard';
import Toast from '@/lib/showToast';

function RoadmapClientComponent() {
  const [roadmapDatas, setRoadmapDatas] = useState([]);

  const fetchRoadmapData = async () => {
    try {
      const data = await getRoadmapData();
      setRoadmapDatas(data);
    } catch (error) {
      Toast('error', '로드맵 조회를 실패하였습니다.');
      console.error('Error fetching roadmap data:', error);
    }
  };

  useEffect(() => {
    fetchRoadmapData();
  }, []);

  // 로드맵 생성 요청
  const handleAdd = async ({ roadmapTitle, desc, category }) => {
    try {
      await postRoadmapData({ roadmapTitle, desc, category });
      fetchRoadmapData();
      Toast('success', '로드맵이 성공적으로 추가되었습니다.');
    } catch (error) {
      Toast('error', '로드맵 생성을 실패하였습니다.');
      console.error('Error:', error);
    }
  };

  // 로드맵 삭제 요청
  const handleDelete = async (id) => {
    try {
      await deleteRoadmapData(id);
      fetchRoadmapData();
      Toast('success', '로드맵이 성공적으로 삭제되었습니다.');
    } catch (error) {
      Toast('error', '로드맵 삭제를 실패하였습니다.');
      console.error('Error:', error);
    }
  };

  // 로드맵 수정 요청
  const handleUpdate = async (id, { roadmapTitle, desc, category }) => {
    try {
      await patchRoadmapData(id, { roadmapTitle, desc, category });
      fetchRoadmapData();
      Toast('success', '로드맵이 성공적으로 수정되었습니다.');
    } catch (error) {
      Toast('error', '로드맵 수정을 실패하였습니다.');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='container flex justify-end m-4 gap-3 mx-auto'>
        <AddRoadmapModal onSubmit={handleAdd} />
      </div>
      {roadmapDatas.length === 0 && (
        <div className='flex items-center justify-center mt-36'>
          현재 만들어진 로드맵이 없습니다. 원하시는 로드맵을 만들어보세요.
        </div>
      )}
      <CardList
        roadmapDatas={roadmapDatas}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
}

export default RoadmapClientComponent;
