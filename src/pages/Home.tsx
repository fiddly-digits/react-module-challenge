import Navbar from '../components/Navbar';
import LeftAside from '../components/LeftAside';
import RightAside from '../components/RightAside';
import Footer from '../components/Footer';
import MainComponent from '../components/MainComponent';

export default function Home() {
  return (
    <>
      <header className=' bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sticky top-0'>
        <Navbar isOnline={true} />
      </header>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 grid-rows-3 gap-4'>
          <LeftAside />
          <MainComponent />
          <RightAside />
        </div>
      </div>
      <footer className='bg-neutral-200'>
        <Footer />
      </footer>
    </>
  );
}
