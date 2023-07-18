interface Props {
  title: string;
  comments: number;
  isNew: boolean;
}

export default function HashCardItem(props: Props) {
  return (
    <div className='p-4 border-b-2 group border-neutral-100'>
      <p className='font-semibold text-neutral-600 group-hover:text-indigo-500'>
        {props.title}
      </p>
      <div className='flex'>
        {props.isNew ? (
          <p className='px-0.5 text-xs bg-yellow-500 text-amber-700'>New</p>
        ) : (
          <p className='text-xs text-neutral-400'>{`${props.comments} comments`}</p>
        )}
      </div>
    </div>
  );
}
