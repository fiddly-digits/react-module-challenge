import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Token } from '../utils/common.types';

export default function Index() {
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
      {userID ? (
        <Navbar userID={userID} onQuery={setQuery} />
      ) : (
        <Navbar onQuery={setQuery} />
      )}
      <Outlet context={query} />
      <Footer />
    </>
  );
}
