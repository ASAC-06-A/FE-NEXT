import SignupForm from '@/components/auth/SignupForm';
import SocialLogin from '@/components/auth/SocialLogin';
import { META } from '@/constants/metadata';

export const metadata = {
  title: '스터디허브 - 회원가입',
  description: '스터디허브에 회원가입하고 강의를 저장하고 로드맵을 만들어보세요.',
  openGraph: {
    title: '스터디허브 - 회원가입',
    description: '스터디허브에 회원가입하고 강의를 저장하고 로드맵을 만들어보세요.',
    url: `${META.url}/signup`,
    type: 'website',
    images: {
      url: META.ogImage,
    },
  },
  twitter: {
    title: '스터디허브 - 회원가입',
    description: '스터디허브에 회원가입하고 강의를 저장하고 로드맵을 만들어보세요.',
    images: {
      url: META.ogImage,
    },
  },
};

function SignupPage() {
  return (
    <>
      <div className='flex flex-col py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-center text-3xl leading-9 font-semibold'>회원가입</h2>
          <SignupForm />
          <SocialLogin />
        </div>
      </div>
    </>
  );
}

export default SignupPage;
