import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <section className='w-full max-w-4xl px-4 py-6 mx-auto text-center'>
        <h1 className='text-4xl font-bold mb-4'>
          StudyHub로 흩어져있는 강의들을 원하는대로 모아보세요!
        </h1>
        <p className='text-lg'>
          다양한 강의 사이트를 이용하고 계셔서 어떤 강의를 수강하고 있는지 관리가 어려우신가요?
          <br />
          StudyHub에서 다양한 강의를 한곳에 저장하고 여러 사이트의 강의로 로드맵까지 만들어보세요!
        </p>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
        <Link
          href='/study'
          className='block p-6 bg-white  shadow-md rounded-lg text-center hover:shadow-lg transition hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-400'
        >
          <h2 className='text-2xl font-semibold mb-2 '>보고 싶은 강의를 한곳에!</h2>
          <p>여러 사이트에 분포되어 있는 강의를 한곳에 저장해서 관리하세요!</p>
        </Link>

        <Link
          href='/roadmap'
          className='block p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-400'
        >
          <h2 className='text-2xl font-semibold mb-2 '>저장한 강의로 나만의 로드맵!</h2>
          <p>저장한 강의들로 나만의 로드맵을 만들어보세요!</p>
        </Link>
      </section>
    </main>
  );
}
