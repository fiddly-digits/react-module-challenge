import LeftAside from '../components/LeftAside';
import RightAside from '../components/RightAside';
import MainComponent from '../components/MainComponent';

export default function Home() {
  return (
    <>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 grid-rows-3 gap-4'>
          <LeftAside />
          <MainComponent />
          <RightAside />
        </div>
      </div>
    </>
  );
}
