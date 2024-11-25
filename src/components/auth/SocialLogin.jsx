import { FaGithub, FaGoogle } from 'react-icons/fa';

function SocialLogin() {
  return (
    <>
      <div className='mx-4 md:mx-0 flex flex-col items-center'>
        <div className='my-10 flex w-full items-center'>
          <div className='flex-1 border-t-2 border-gray-200 dark:border-gray-400'></div>
          <span className=' text-sm uppercase mx-5 font-medium text-gray-600 dark:text-gray-300'>
            소셜 로그인
          </span>
          <div className='flex-1 border-t-2 border-gray-200 dark:border-gray-400'></div>
        </div>
      </div>
      <div className='w-full'>
        <button className='w-full max-w-xs mx-auto flex justify-center py-2 items-center px-8 border bg-slate-400 hangug shadow-sm border-transparent font-medium rounded-md text-gray-700 transition duration-150 ease-in-out hover:opacity-75 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray'>
          <FaGoogle className='mr-2 h-4 w-4' />
          Google
        </button>
        <button className='w-full max-w-xs mx-auto flex justify-center py-2 mt-4 items-center px-8 border bg-slate-400 hangug shadow-sm border-transparent font-medium rounded-md text-gray-700 transition duration-150 ease-in-out hover:opacity-75 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray'>
          <FaGithub className='mr-2 h-4 w-4' />
          GitHub
        </button>
      </div>
    </>
  );
}

export default SocialLogin;
