import Navbar from '../components/Navbar';
export default function Register() {
  return (
    <>
      <header className=' bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sticky top-0'>
        <Navbar />
      </header>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 grid-rows-3 gap-4'>
          <div className='col-span-12 row-span-3 py-5 md:col-span-5 md:col-start-5'>
            <div className='block p-6 bg-white rounded-lg outline outline-1 outline-neutral-500/20'></div>
          </div>
        </div>
      </div>
    </>
  );
}
