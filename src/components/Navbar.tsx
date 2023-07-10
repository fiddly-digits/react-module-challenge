import Online from './Online';
import Offline from './Offline';
import { Link } from 'react-router-dom';
import Offcanvas from './OffCanvas';

interface Props {
  userID?: string;
  isOnline?: boolean;
}

export default function Navbar(props: Props) {
  return (
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
              <form
                action='Search'
                className='justify-between hidden grow md:rounded-md md:flex md:outline md:outline-1 outline-gray-500/50 hover:outline-2 hover:outline-indigo-600'
              >
                <input
                  type='text'
                  name='search'
                  className='rounded-md search-bar grow'
                  placeholder='Search...'
                />
                <button
                  type='submit'
                  aria-label='search'
                  className='px-1 text-3xl rounded-md hover:bg-indigo-200/50'
                >
                  <i className='iconoir-search'></i>
                </button>
              </form>
            </div>
            {props.userID ? <Online userID={props.userID} /> : <Offline />}
          </div>
        </nav>
      </div>
      <Offcanvas />
    </div>
  );
}
