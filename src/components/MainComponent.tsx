import MainCard from './MainCard';

export default function MainComponent() {
  return (
    <main className='col-span-12 row-span-3 md:col-span-6 md:col-start-4 md:row-span-3'>
      <div className='inline-flex mt-3 rounded-md' role='group'>
        <button
          type='button'
          className='inline-block rounded-l px-3 pb-2 pt-2.5 text-lg leading-normal text-black'
        >
          Relevant
        </button>
        <button
          type='button'
          className='inline-block px-3 pb-2 pt-2.5 text-lg leading-normal text-black'
        >
          Latest
        </button>
        <button
          type='button'
          className='inline-block rounded-r px-3 pb-2 pt-2.5 text-lg leading-normal text-black'
        >
          Top
        </button>
      </div>
      <div className='flex flex-col gap-4'>
        <MainCard />
        <MainCard />
      </div>
    </main>
  );
}
