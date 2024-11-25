import HeaderMenu from '@/components/common/HeaderMenu';
import ThemeToggle from '@/components/common/ThemeToggle';

import Link from 'next/link';

function Header() {
  return (
    <div className='flex justify-between items-center p-4 px-20 border-b-2 '>
      <Link href='/' className='text-lg font-bold hover:text-gray-600'>
        StudyHub
      </Link>

      <ul className='flex gap-6'>
        <HeaderMenu />
        <ThemeToggle />
      </ul>
    </div>
  );
}

export default Header;
