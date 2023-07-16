import LeftAside from '../components/LeftAside';
import RightAside from '../components/RightAside';
import MainComponent from '../components/MainComponent';

import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const [query] = useOutletContext<string>();

  return (
    <>
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
