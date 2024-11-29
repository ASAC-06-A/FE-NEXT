'use client';

import { signup } from '@/app/api/authApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export function SignupForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleSingup = async ({ username, email, password }) => {
    try {
      const data = await signup({ username, email, password });

      router.push('/signin');
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='py-8 px-4 shadow sm:rounded-lg sm:px-10'>
        <form onSubmit={handleSubmit(handleSingup)} className='space-y-6'>
          <div>
            <label htmlFor='userName' className='block text-sm font-medium '>
              사용자명
            </label>
            <input
              name='username'
              type='text'
              className='mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              {...register('username', {
                required: { value: true, message: '사용자명을 입력해주세요.' },
                minLength: { value: 2, message: '사용자명은 2자 이상으로 입력해주세요.' },
              })}
            />
            {errors?.username && (
              <div className='text-red-500 mt-1'>{errors?.username?.message}</div>
            )}
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium '>
              이메일
            </label>
            <input
              name='email'
              type='email'
              className='mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              {...register('email', {
                required: { value: true, message: '이메일을 입력해주세요.' },
                pattern: { value: /^\S+@\S+$/i, message: '이메일 형식이 올바르지 않습니다.' },
              })}
            />
            {errors?.email && <div className='text-red-500 mt-1'>{errors?.email?.message}</div>}
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium '>
              비밀번호
            </label>
            <input
              name='password'
              type='password'
              className='mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              {...register('password', {
                required: { value: true, message: '비밀번호를 입력해주세요.' },
                minLength: { value: 8, message: '비밀번호는 8자 이상 20자 이하로 입력해주세요.' },
                maxLength: { value: 20, message: '비밀번호는 8자 이상 20자 이하로 입력해주세요.' },
              })}
            />
            {errors?.password && (
              <div className='text-red-500 mt-1'>{errors?.password?.message}</div>
            )}
          </div>
          <div>
            <label htmlFor='passwordConfirm' className='block text-sm font-medium '>
              비밀번호 확인
            </label>
            <input
              name='passwordConfirm'
              type='password'
              className='mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              {...register('passwordConfirm', {
                required: { value: true, message: '비밀번호 확인은 필수입니다.' },
                validate: (value) => value === watch('password') || '비밀번호가 일치하지 않습니다.',
              })}
            />
            {errors?.passwordConfirm && (
              <div className='text-red-500 mt-1'>{errors?.passwordConfirm?.message}</div>
            )}
          </div>
          <div>
            <button
              type='submit'
              className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 transition duration-150 ease-in-out dark:bg-white dark:text-gray-700 dark:border dark:border-white dark:hover:bg-transparent dark:hover:text-white hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring  focus:ring-blue-400  active:bg-blue-700'
            >
              회원가입
            </button>
          </div>
        </form>
        <div className=' mt-10 text-center text-gray-700 dark:text-gray-300'>
          이미 계정이 있으신가요?{' '}
          <Link className='text-blue-600 dark:text-blue-400 font-medium' href='/signin'>
            로그인 →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
