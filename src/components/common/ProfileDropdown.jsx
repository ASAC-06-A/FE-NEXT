'use client';

import Link from 'next/link';
import { useState } from 'react';

import { logout } from '@/app/api/authApi';

function ProfileDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <li className='relative hover:text-gray-600'>
      <button onClick={toggleDropdown} className='focus:outline-none'>
        Profile
      </button>

      {isDropdownOpen && (
        <div className='absolute left-0 mt-2 w-32 bg-white rounded-md shadow-lg border z-10'>
          <ul>
            <li>
              <Link
                href='/profile'
                className='block px-4 py-2 hover:bg-gray-100'
                onClick={() => setIsDropdownOpen(false)}
              >
                마이페이지
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  logout();
                  setIsDropdownOpen(false);
                }}
                className='block w-full text-left px-4 py-2 hover:bg-gray-100'
              >
                로그아웃
              </button>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
}

export default ProfileDropdown;
