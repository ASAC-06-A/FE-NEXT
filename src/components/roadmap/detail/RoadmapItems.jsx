import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

function RoadmapItem({ roadmapItem, index, removeRoadmapItem, roadmapId }) {
  const [thumbnail, setThumbnail] = useState('/default-thumbnail.jpg');

  const getThumbnail = async () => {
    try {
      const res = await fetch(`/api/getThumbnail?url=${encodeURIComponent(roadmapItem.url)}`);
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
    if (roadmapItem.url) {
      getThumbnail();
    }
  }, [roadmapItem.url]);

  return (
    <div
      key={index}
      className='relative flex items-center space-x-6 p-4 bg-white border shadow-lg rounded-lg'
    >
      <Image
        className='w-32 h-32 object-contain rounded-lg border'
        src={thumbnail}
        alt={roadmapItem.studyTitle}
        width={128}
        height={128}
        placeholder='blur'
        blurDataURL='/default-thumbnail.jpg'
        priority
        onError={() => setThumbnail('/default-thumbnail.jpg')}
      />

      <div className='flex-grow'>
        <h2 className='text-xl font-bold'>{roadmapItem.studyTitle}</h2>
        <p className='text-gray-600'>
          {roadmapItem.desc.length > 60 ? `${roadmapItem.desc.slice(0, 60)}...` : roadmapItem.desc}
        </p>
        <div className='text-sm text-gray-400 mt-2'>{roadmapItem.category}</div>
      </div>
      <button onClick={() => removeRoadmapItem(roadmapId, roadmapItem.studyId)}>
        <FaRegTrashAlt />
      </button>

      <div className='absolute left-1/2 transform -translate-x-1/2 top-full w-px h-12 border-l-2 border-dashed border-gray-400' />
    </div>
  );
}

function RoadmapItems({ roadmapItems, removeRoadmapItem, roadmapId }) {
  return (
    <>
      {roadmapItems.map((roadmapItem, index) => (
        <RoadmapItem
          key={roadmapItem.studyId}
          roadmapItem={roadmapItem}
          index={index}
          removeRoadmapItem={removeRoadmapItem}
          roadmapId={roadmapId}
        />
      ))}
    </>
  );
}

export default RoadmapItems;
