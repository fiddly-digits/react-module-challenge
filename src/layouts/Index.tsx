import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <Outlet />
      <footer className='bg-neutral-200'>
        <Footer />
      </footer>
    </>
  );
}
