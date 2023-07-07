import Menu from './Menu';

export default function RightAside() {
  return (
    <aside className='hidden w-full p-2 md:flex md:flex-col md:col-span-3 md:row-span-3 border-helper'>
      <Menu />
    </aside>
  );
}
