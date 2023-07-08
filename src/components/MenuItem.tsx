interface Props {
  name: string;
  icon: string;
}

export default function MenuItem(props: Props) {
  return (
    <li>
      <a
        href=''
        className='flex items-center w-auto h-10 gap-2 rounded-md grow hover:underline hover:text-indigo-600 hover:bg-indigo-200/50  '
      >
        <span className='flex items-center justify-center'>
          <img src={props.icon} alt='home-icon' className='w-6 h-6' />
        </span>
        {props.name}
      </a>
    </li>
  );
}
