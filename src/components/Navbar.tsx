import Online from './Online';
import Offline from './Offline';
import { Link } from 'react-router-dom';
import Offcanvas from './OffCanvas';
import { useState, useRef } from 'react';

interface Props {
  userID?: string;
  onQuery?(query: string): void;
}

export default function Navbar(props: Props) {
  const [query, setQuery] = useState('');
  const queryInput = useRef<HTMLInputElement>(null);

  function onAddItem() {
    props.onQuery?.(query);
    setQuery('');
    queryInput.current?.blur();
  }
  function onEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') onAddItem();
  }

  return (
    <header className=' bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sticky top-0 z-10'>
      <div className='drawer'>
        <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
        <div className='flex flex-col drawer-content'>
          <nav className='container grid grid-cols-12 mx-auto h-14'>
            <div className='flex items-center justify-between col-span-12 px-2'>
              <div className='flex items-center w-1/2 gap-2'>
                <div className='flex-none md:hidden'>
                  <label
                    htmlFor='my-drawer-3'
                    className='btn btn-square btn-ghost'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='inline-block w-6 h-6 stroke-current'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                      ></path>
                    </svg>
                  </label>
                </div>
                <Link to='/'>
                  <img
                    className='h-10'
                    src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
                    alt='devlogo'
                  />
                </Link>
                <div className='justify-between hidden grow md:rounded-md md:flex md:outline md:outline-1 outline-gray-500/50 hover:outline-2 hover:outline-indigo-600'>
                  <input
                    ref={queryInput}
                    type='text'
                    name='search'
                    className='rounded-md search-bar grow'
                    placeholder='Search...'
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyUp={onEnter}
                    value={query}
                  />
                  <button
                    aria-label='search'
                    className='px-1 text-3xl rounded-md hover:bg-indigo-200/50'
                    onClick={onAddItem}
                  >
                    <i className='iconoir-search'></i>
                  </button>
                </div>
              </div>
              {props.userID ? <Online userID={props.userID} /> : <Offline />}
            </div>
          </nav>
        </div>
        <Offcanvas />
      </div>
    </header>
  );
}
