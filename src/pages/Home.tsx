import Navbar from '../components/Navbar';
import LeftAside from '../components/LeftAside';
import RightAside from '../components/RightAside';
export default function Home() {
  return (
    <>
      <header className=' bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
        <Navbar isOnline={true} />
      </header>

      <div className='container mx-auto'>
        <div className='grid grid-cols-12 grid-rows-3 gap-4'>
          <LeftAside />
          <main className='col-span-12 row-span-3 md:col-span-6 md:col-start-4 md:row-span-3 border-helper'>
            Main
          </main>
          {/* <aside className='hidden md:flex md:col-span-3 md:col-start-10 md:row-span-3 border-helper'>
            Cards Aside
          </aside> */}
          <RightAside />
        </div>
        <footer className='grid grid-cols-12 border-helper'>Footer</footer>
      </div>
    </>
  );
}
