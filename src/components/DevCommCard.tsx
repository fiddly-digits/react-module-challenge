interface Props {
  img?: string;
  endLink?: string;
}

export default function DevCommCard(props: Props) {
  return (
    <div className='block rounded-lg p-5 mt-2 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
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
        <h5 className='mb-4 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
          Calling all early-career developers & coding mentors!
        </h5>
        <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
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
