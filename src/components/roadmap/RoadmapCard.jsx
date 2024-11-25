import UpdateRoadmapModal from '@/components/roadmap/UpdateRoadmapModal';
import Link from 'next/link';
import { FaRegTrashAlt } from 'react-icons/fa';

import { MdZoomOutMap } from 'react-icons/md';

function Card({ roadmapData, handleDelete, handleUpdate }) {
  handleUpdate;

  return (
    <div>
      <div className='flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full'>
        <div className='mb-0 border-b border-slate-200 pt-3 pb-2 px-4 flex justify-end gap-2'>
          <UpdateRoadmapModal roadmapId={roadmapData.roadmapId} onSubmit={handleUpdate} />
          <button
            onClick={() => handleDelete(roadmapData.roadmapId)}
            className='text-lg font-bold hover:text-gray-900'
          >
            <FaRegTrashAlt />
          </button>
          <Link
            href={`/roadmap/${roadmapData.roadmapId}`}
            className='text-lg font-bold hover:text-gray-900'
          >
            <MdZoomOutMap />
          </Link>
        </div>

        <div className='p-4'>
          <h5 className='mb-2 text-slate-800 text-xl font-semibold'>{roadmapData.roadmapTitle}</h5>
          <p className='mb-2 text-slate-800 text-lg'>
            {roadmapData.desc.length > 15
              ? `${roadmapData.desc.slice(0, 15)}...`
              : roadmapData.desc}
          </p>
          <p className='text-slate-500 text-sm leading-normal font-light'>{roadmapData.category}</p>
        </div>
        <div className='mb-0 border-t border-slate-200 pt-3 pb-1 px-4'>
          <span className='text-sm text-slate-600 font-medium'>날짜, 태그 영역</span>
        </div>
      </div>
    </div>
  );
}

function CardList({ roadmapDatas, handleDelete, handleUpdate }) {
  return (
    <section className='text-gray-600 body-font '>
      <div className='container py-6 mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {roadmapDatas.map((roadmapData, index) => (
            <Card
              key={index}
              roadmapData={roadmapData}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardList;
