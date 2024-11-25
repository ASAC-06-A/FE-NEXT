import Link from 'next/link';
import ProfileDropdown from '@/components/common/ProfileDropdown';
import { cookies } from 'next/headers';

const getCookie = async () => {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('JSESSIONID');

  const isLoggedIn = !!sessionCookie;

  return isLoggedIn;
};

function HeaderMenu() {
  const isLoggedIn = getCookie();

  return (
    <>
      {isLoggedIn ? (
        <>
          <li>
            <Link href='/study' className='hover:text-gray-600'>
              My Study
            </Link>
          </li>
          <li>
            <Link href='/roadmap' className='hover:text-gray-600'>
              My Roadmap
            </Link>
          </li>
          <ProfileDropdown />
        </>
      ) : (
        <>
          <li>
            <Link href='/signin' className='hover:text-gray-600'>
              로그인
            </Link>
          </li>
          <li>
            <Link href='/signup' className='hover:text-gray-600'>
              회원가입
            </Link>
          </li>
        </>
      )}
    </>
  );
}

export default HeaderMenu;
