import LeftAside from '../components/LeftAside';
import RightAside from '../components/RightAside';
import MainComponent from '../components/MainComponent';
import Navbar from '../components/Navbar';
import { Token } from '../utils/common.types';
import { useEffect, useState } from 'react';

export default function Home() {
  const [userID, setUserID] = useState<string>();
  const [query, setQuery] = useState<string>();
  useEffect(() => {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      const payload: string = token.split('.')[1];
      const plainPayload: Token = JSON.parse(atob(payload)) as Token;
      setUserID(plainPayload.id);
      //window.location.reload();
    }
  }, []);

  return (
    <>
      <header className=' bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sticky top-0'>
        {userID ? (
          <Navbar userID={userID} onQuery={setQuery} />
        ) : (
          <Navbar onQuery={setQuery} />
        )}
      </header>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 grid-rows-3 gap-4'>
          <LeftAside />
          <MainComponent query={query} />
          <RightAside />
        </div>
      </div>
    </>
  );
}
