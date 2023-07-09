//TODO: Cambiar ... por Iconoir Elipsis

export default function CommentCard() {
  return (
    <article className='flex items-baseline gap-2 mt-5'>
      <img
        src='https://res.cloudinary.com/practicaldev/image/fetch/s--BHuURcXO--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/667361/f10c4adf-d2ec-4c66-86a3-6c67925479bb.png'
        alt='avatar'
        className='w-8 h-8 rounded-full'
      />
      <div className='flex flex-col justify-between px-2 py-4 border rounded grow border-gray-500/20'>
        <div className='flex items-center justify-between w-full gap-1'>
          <div className='flex items-center grow'>
            <p className='p-0.5 text-sm font-semibold rounded text-neutral-800 hover:bg-gray-400/10'>
              Placeholder Name
            </p>
            <p className='text-sm text-gray-400'>•</p>
            <p className='text-sm text-gray-400'>Jul 10</p>
          </div>
          <p className='p-1 hover:bg-gray-400/10'>...</p>
        </div>
        <p className='mt-3'>This is a comment Placeholder</p>
      </div>
    </article>
  );
}
