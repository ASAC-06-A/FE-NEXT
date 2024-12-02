import { deleteAccount } from '@/app/api/authApi';
import { Modal } from '@/components/common/Modal';

function AccontDeleteModal() {
  const onAccountDelete = async () => {
    try {
      await deleteAccount();
    } catch (error) {
      console.error('Error deleting account data:', error);
    }
  };

  return (
    <div className='flex justify-end mt-6'>
      <Modal>
        <Modal.OpenButton style='text-sm text-red-500 px-4 py-2 border border-red-300 rounded hover:bg-red-100'>
          회원 탈퇴
        </Modal.OpenButton>

        <Modal.Content>
          <Modal.ModalTitle>정말 계정을 삭제하시겠습니까?</Modal.ModalTitle>
          <Modal.Body>
            계정을 삭제하시면 저장하신 데이터가 전부 사라집니다. 그래도 삭제하시겠습니까?
          </Modal.Body>
          <div className='flex justify-between'>
            <Modal.CloseButton style='text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 shadow-md transition duration-300'>
              취소
            </Modal.CloseButton>
            <Modal.SubmitButton
              onClick={onAccountDelete}
              style='text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 transition duration-300'
            >
              확인
            </Modal.SubmitButton>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default AccontDeleteModal;
