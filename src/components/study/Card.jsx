'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import { MdZoomOutMap } from 'react-icons/md';

function Card({ studyData, handleDelete }) {
  const [thumbnail, setThumbnail] = useState('/default-thumbnail.jpg');

  const getThumbnail = async () => {
    try {
      const res = await fetch(`/api/getThumbnail?url=${encodeURIComponent(studyData.url)}`);

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
    getThumbnail();
  }, [studyData.url]);

  return (
    <div className='p-4 md:w-1/3'>
      <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
        <div className='mb-0 border-b border-slate-200 pt-3 pb-2 px-4 flex items-center justify-between'>
          <span className='text-lg font-bold hover:text-gray-900'>
            <a href={studyData.url} target='_blank' rel='noopener noreferrer'>
              <FaLink />
            </a>
          </span>

          <div className='flex items-center gap-2'>
            <button
              onClick={() => handleDelete(studyData.studyId)}
              className='text-lg font-bold hover:text-gray-900'
            >
              <FaRegTrashAlt />
            </button>
            <Link
              href={`study/${studyData.studyId}`}
              className='text-lg font-bold hover:text-gray-900'
            >
              <MdZoomOutMap />
            </Link>
          </div>
        </div>

        <Image
          className='lg:h-48 md:h-36 w-full object-cover object-center border-b border-slate-200'
          src={thumbnail}
          alt={`${studyData.studyTitle} 썸네일`}
          width={500}
          height={300}
          placeholder='blur'
          blurDataURL='/default-thumbnail.jpg'
          priority
          onError={() => setThumbnail('/default-thumbnail.jpg')}
        />

        <div className='py-2 px-4'>
          <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
            {studyData.category}
          </h2>
          <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
            {studyData.studyTitle}
          </h1>
          <p className='leading-relaxed'>
            {studyData.desc.length > 30 ? `${studyData.desc.slice(0, 30)}...` : studyData.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
