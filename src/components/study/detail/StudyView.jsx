import Image from 'next/image';

function StudyView({ studyDetailData, onEdit, thumbnail }) {
  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold text-gray-900'>{studyDetailData.studyTitle}</h1>
        <button onClick={onEdit} className='px-4 py-2 bg-blue-500 text-white rounded'>
          편집
        </button>
      </div>
      <span className='inline-block text-sm text-gray-500'>{studyDetailData.category}</span>
      <Image
        className='w-full h-64 object-cover rounded-md'
        src={thumbnail}
        alt={studyDetailData?.studyTitle || '기본 이미지'}
        width={0}
        height={0}
        placeholder='blur'
        blurDataURL='/default-thumbnail.jpg'
        priority
        onError={() => setThumbnail('/default-thumbnail.jpg')}
      />
      <p className='text-gray-700 leading-relaxed'>{studyDetailData.desc}</p>
    </>
  );
}

export default StudyView;
