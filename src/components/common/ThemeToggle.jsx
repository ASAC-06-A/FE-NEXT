'use client';

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className='hover:text-gray-600'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </>
  );
}

export default ThemeToggle;
