function ProfileInfoView({ profileData, handleEditToggle }) {
  return (
    <div className='rounded-lg border border-gray-300 p-6 space-y-4'>
      <h2 className='text-2xl font-bold mb-4'>프로필 정보</h2>
      <div className='space-y-4'>
        <div className='flex justify-between'>
          <label className='text-base text-gray-600'>닉네임</label>
          <p className='text-base font-bold'>{profileData.name}</p>
        </div>
        <div className='flex justify-between'>
          <label className='text-base text-gray-600'>자기 소개</label>
          <p className={`${profileData.introduce ? 'text-base' : 'text-gray-600'}`}>
            {profileData.introduce || '자기소개 영역입니다.'}
          </p>
        </div>
      </div>
      <div className='flex justify-end mt-6'>
        <button
          onClick={handleEditToggle}
          className='text-sm px-4 py-2 border border-gray-300 rounded hover:bg-gray-300'
        >
          프로필 편집
        </button>
      </div>
    </div>
  );
}

export default ProfileInfoView;
