import DevCommCard from './DevCommCard';
import HashCard from './HashCard';
import ListingsCard from './ListingsCard';

//TODO: Make hashcard even more dynamic

export default function RightAside() {
  return (
    <aside className='hidden px-2 py-4 md:flex md:flex-col md:col-span-3 md:col-start-10 md:row-span-3  '>
      <DevCommCard img='https://rb.gy/mfaj5' endLink='→ Get in on the fun!' />
      <ListingsCard />
      <HashCard hash='#discuss' />
      <HashCard hash='#javascript' />
    </aside>
  );
}
