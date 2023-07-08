interface Props {
  img?: string;
  endLink?: string;
}

export default function DevCommCard(props: Props) {
  return (
    <div className='block p-5 mt-2 bg-white rounded-lg outline outline-1 outline-neutral-500/20'>
      <div className='flex justify-between mb-2'>
        <p>DEV Community</p>
        <div className='flex items-center h-3'>
          <p>...</p>
        </div>
      </div>
      {props.img && (
        <a href='#!'>
          <img className='rounded-lg' src={props.img} alt='' />
        </a>
      )}
      <div className='mt-4'>
        <h5 className='mb-4 text-lg font-medium leading-tight text-neutral-800'>
          Calling all early-career developers & coding mentors!
        </h5>
        <p className='mb-4 text-base text-neutral-600'>
          Join CodeNewbie Community: a supportive space for coding newbies to
          connect & express themselves.
        </p>
        {props.endLink && (
          <a className='text-lg font-bold text-indigo-600 underline hover:text-indigo-800'>
            {props.endLink}
          </a>
        )}
      </div>
    </div>
  );
}
