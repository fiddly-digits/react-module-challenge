import { Link } from 'react-router-dom';

export default function Offline() {
  return (
    <div className='flex items-center gap-2'>
      <Link
        to='/Login'
        className='hidden md:block whitespace-nowrap text-neutral-700 rounded px-[15px] py-[6px] hover:bg-indigo-200/50 hover:text-indigo-600 hover:underline'
      >
        Log in
      </Link>
      <a className='px-2 md:hidden hover:rounded-lg hover:bg-indigo-200/50 hover:text-indigo-600'>
        <i className='mt-2 text-2xl iconoir-search'></i>
      </a>
      <Link
        to='/Login'
        className='whitespace-nowrap text-indigo-600 rounded outline outline-1 px-[15px] py-[6px] outline-indigo-600 hover:bg-indigo-600 hover:text-white hover:underline'
      >
        Create account
      </Link>
    </div>
  );
}
