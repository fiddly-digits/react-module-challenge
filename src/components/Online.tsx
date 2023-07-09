import { UserResult } from '../utils/common.types';
import { useState, useEffect } from 'react';
interface Props {
  userID: string;
}

export default function Online(props: Props) {
  const [loggedUser, setLoggedUser] = useState<UserResult>();

  useEffect(() => {
    fetch(`http://localhost:8080/users/${props.userID}`)
      .then((res) => res.json())
      .then((res: UserResult) => setLoggedUser(res))
      .catch((error) => alert(error));
  }, [props.userID]);

  return (
    <div className='flex items-center gap-2'>
      <a
        href=''
        className='hidden md:block whitespace-nowrap text-indigo-600 rounded outline outline-1 px-[15px] py-[6px] outline-indigo-600 hover:bg-indigo-600 hover:text-white hover:underline'
      >
        Create Post
      </a>
      <a className='px-2 md:hidden hover:rounded-lg hover:bg-indigo-200/50 hover:text-indigo-600'>
        <i className='mt-2 text-2xl iconoir-search'></i>
      </a>
      <a className='px-2 hover:rounded-lg hover:bg-indigo-200/50 hover:text-indigo-600'>
        <i className='mt-2 text-2xl iconoir-bell'></i>
      </a>

      <div className='dropdown dropdown-bottom dropdown-end'>
        <a tabIndex={0}>
          <img
            src={loggedUser?.data?.picture}
            alt='avatar'
            className='rounded-full mt-z w-7 h-7 hover:outline hover:outline-indigo-200/50'
          />
        </a>
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52'
        >
          <li className='border-b border-gray-300'>
            <p>
              {`${loggedUser?.data?.name.first ?? 'Placeholder'} ${
                loggedUser?.data?.name.last ?? 'Name'
              }`}
            </p>
          </li>
          <li>
            <a
              onClick={() => {
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
                location.reload();
              }}
            >
              Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
