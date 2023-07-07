import MenuItem from './MenuItem';
import { items } from '../utils/common.utils';

export default function Menu() {
  return (
    <nav className='mt-4 mb-4'>
      <ul>
        {items.map((item) => {
          console.log(item);
          return <MenuItem name={item.name} icon={item.icon} />;
        })}
      </ul>
    </nav>
  );
}
