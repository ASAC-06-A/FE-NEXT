import Card from '@/components/study/Card';

function CardList({ studyDatas, handleDelete }) {
  return (
    <section className='text-gray-600 body-font '>
      <div className='container py-6 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {studyDatas.map((studyData, index) => (
            <Card key={index} studyData={studyData} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardList;
