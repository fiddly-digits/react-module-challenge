import MenuItem from './MenuItem';
import { items, otherItems } from '../utils/common.utils';

interface Props {
  isOther: boolean;
}

export default function Menu(props: Props) {
  return (
    <nav className={!props.isOther ? 'mt-4 mb-4' : 'mb-4'}>
      {props.isOther && <h2 className='py-2 text-lg font-bold'>Other</h2>}
      <ul>
        {!props.isOther
          ? items.map((item) => {
              console.log(item);
              return <MenuItem name={item.name} icon={item.icon} />;
            })
          : otherItems.map((OtherItem) => {
              console.log(OtherItem);
              return <MenuItem name={OtherItem.name} icon={OtherItem.icon} />;
            })}
      </ul>
    </nav>
  );
}
