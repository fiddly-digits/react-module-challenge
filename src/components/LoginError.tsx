interface Props {
  message?: string;
}

export default function LoginError(props: Props) {
  return (
    <div className='block p-6 mb-3 rounded-lg bg-red-500/30 outline outline-1 outline-red-500'>
      <h2 className='font-semibold text-red-500'>Unable To Login</h2>
      <p className='text-red-600'>{props.message}</p>
    </div>
  );
}
