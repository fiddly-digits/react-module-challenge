import { items, otherItems } from '../utils/common.utils';
export default function Footer() {
  return (
    <footer className='bg-neutral-200'>
      <div className='container grid grid-cols-12 p-12 mx-auto '>
        <div className='flex flex-col items-center justify-center col-span-12 gap-2 text-sm text-center'>
          <p>
            <span className='text-indigo-600 hover:underline'>
              Dev Community
            </span>{' '}
            - A constructive and inclusive social network for software
            Developers. With you every step of your journey.
          </p>
          <ul className='flex gap-3 justify-center items-center flex-wrap whitespace-nowrap text-indigo-600 [&>*:first-child]:text-clean'>
            {items.map((item) => (
              <li className='text-decoration'>{item.name}</li>
            ))}
          </ul>
          <ul className='flex gap-3 whitespace-nowrap text-indigo-600 [&>*:first-child]:text-clean'>
            {otherItems.map((item) => (
              <li className='text-decoration'>{item.name}</li>
            ))}
          </ul>
          <p>
            Built on <span className='font-bold text-blue-900'>React</span>{' '}
            Using <span className='font-bold text-sky-400'>Tailwind</span> and{' '}
            <span className='font-bold text-blue-500'>Typescript</span>
          </p>
          <p>
            Made with 🩵 by <span className='font-bold'>fiddly-digits</span> 2023
          </p>
        </div>
      </div>
    </footer>
  );
}
