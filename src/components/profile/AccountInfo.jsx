import { deleteAccount } from '@/app/api/authApi';
import AccontDeleteModal from '@/components/profile/AccountDeleteModal';

function AccountInfo({ profileData }) {
  const onChangePassword = async () => {
    // API 구현예정
  };
  return (
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
      <AccontDeleteModal />
    </div>
  );
}

export default AccountInfo;
