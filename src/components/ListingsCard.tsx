import { listings } from '../utils/common.utils';

export default function ListingsCard() {
  return (
    <div className='block my-2 bg-white rounded-lg outline outline-1 outline-neutral-500/20'>
      <div className='flex items-center justify-between px-6 py-3 border-b-2 border-neutral-100'>
        <h2 className='text-lg font-extrabold'>Listings</h2>
        <p className='text-xs font-semibold text-indigo-600'>See all</p>
      </div>
      {listings.map((list, index) => {
        return (
          <div
            key={`list ${index}`}
            className='p-4 border-b-2 group border-neutral-100'
          >
            <p className='font-semibold text-neutral-600 group-hover:text-indigo-500'>
              {list.content}
            </p>
            <p className='text-xs text-neutral-400'>{list.category}</p>
          </div>
        );
      })}
      <div className='flex justify-center px-6 py-3 group'>
        <p className='text-sm group-hover:text-indigo-500'>Create a Listing</p>
      </div>
    </div>
  );
}
