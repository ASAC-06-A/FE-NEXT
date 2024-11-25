import LoginForm from '@/components/auth/SigninForm';
import SocialLogin from '@/components/auth/SocialLogin';
import { META } from '@/constants/metadata';

export const metadata = {
  title: '스터디허브 - 로그인',
  description: '스터디허브에 로그인하여 저장한 강의와 로드맵을 관리하세요.',
  openGraph: {
    title: '스터디허브 - 로그인',
    description: '스터디허브에 로그인하여 저장한 강의와 로드맵을 관리하세요.',
    url: `${META.url}/signin`,
    type: 'website',
    images: {
      url: META.ogImage,
    },
  },
  twitter: {
    title: '스터디허브 - 로그인',
    description: '스터디허브에 로그인하여 저장한 강의와 로드맵을 관리하세요.',
    images: {
      url: META.ogImage,
    },
  },
};

function LoginPage() {
  return (
    <>
      <div className='flex flex-col py-12 sm:px-6 lg:px-8 '>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-center text-3xl leading-9 font-semibold'>로그인</h2>
          <LoginForm />
          <SocialLogin />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
