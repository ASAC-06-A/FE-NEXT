'use client';

import { getProfileData, patchProfileData } from '@/app/api/profileApi';
import ProfileInfoEditForm from '@/components/profile/ProfileInfoEditForm';
import ProfileInfoView from '@/components/profile/ProfileInfoView';

import { useEffect, useState } from 'react';

function ProfileClientComponent() {
  const [profileData, setProfileData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const fetchProfileData = async () => {
    try {
      const data = await getProfileData();
      setProfileData(data);
    } catch (error) {
      console.error('Error fetching study data:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleEdit = async (name) => {
    try {
      await patchProfileData(name);
      fetchProfileData();
    } catch (error) {
      console.error('Error deleting study data:', error);
    }
  };

  const onAccountDelete = async () => {
    try {
      await deleteAccount();
    } catch (error) {
      console.error('Error deleting account data:', error);
    }
  };

  const onChangePassword = async () => {
    // API 구현예정
  };

  return (
    <div className='max-w-3xl mx-auto p-6 space-y-8'>
      {isEditing ? (
        <ProfileInfoEditForm
          profileData={profileData}
          handleEdit={handleEdit}
          handleEditToggle={handleEditToggle}
        />
      ) : (
        <ProfileInfoView profileData={profileData} handleEditToggle={handleEditToggle} />
      )}

      <div className='rounded-lg border border-gray-300 p-6 space-y-4'>
        <h3 className='text-xl font-semibold mb-4'>계정 정보</h3>
        <div className='flex justify-between'>
          <span className='font-medium'>이메일</span>
          <span>{profileData.email}</span>
        </div>
        <div className='flex justify-between mt-2'>
          <span className='font-medium'>비밀번호</span>
          <button
            // onClick={onChangePassword} 임시 주석처리 - 김정현
            className='px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300'
          >
            비밀번호 변경
          </button>
        </div>
        <div className='flex justify-end mt-6'>
          <button
            // onClick={handleDeleteModal} 임시 주석처리 - 김정현
            className='text-sm text-red-500 px-4 py-2 border border-red-300 rounded hover:bg-red-100'
          >
            회원 탈퇴
          </button>
        </div>
      </div>

      {/* <div className='rounded-lg border border-gray-300 p-6 space-y-4'>
        <h3 className='text-xl font-semibold mb-4'>내 강의 카테고리</h3>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <p className='text-gray-500'>강의 카테고리가 여기에 표시됩니다.</p>
        </div>
      </div>

      <div className='rounded-lg border border-gray-300 p-6 space-y-4'>
        <h3 className='text-xl font-semibold mb-4'>내 로드맵</h3>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <p className='text-gray-500'>로드맵 갯수가 여기에 표시됩니다.</p>
        </div>
      </div> */}
    </div>
  );
}

export default ProfileClientComponent;
