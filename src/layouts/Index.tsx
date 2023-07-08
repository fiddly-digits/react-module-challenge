import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <header className=' bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sticky top-0'>
        <Navbar isOnline={false} />
      </header>
      <Outlet />
      <footer className='bg-neutral-200'>
        <Footer />
      </footer>
    </>
  );
}
