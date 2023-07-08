export default function MainCard() {
  return (
    <div className='block bg-white rounded-lg outline outline-1 outline-neutral-500/20'>
      <img
        className='rounded-t-lg'
        src='https://res.cloudinary.com/practicaldev/image/fetch/s--0vGV0EPT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bsi8skbulgamzqnjq7ph.png'
        alt=''
      />
      <div className='p-6'>
        <div className='flex items-center gap-1.5'>
          <img
            src='https://api.dicebear.com/6.x/big-ears-neutral/svg'
            alt='avatar'
            className='border border-black rounded-full w-7 h-7'
          />
          <div>
            <p className='p-0.5 text-sm rounded hover:bg-neutral-300/30'>
              Placeholder Name
            </p>
            <p className='px-1 text-xs'>Jul 7</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 ps-8'>
          <h5 className='mt-2 text-3xl font-bold leading-tight text-neutral-800 hover:text-indigo-600'>
            AWS CloudFormation Explained
          </h5>
          <div className='flex gap-6 text-sm'>
            <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
              #aws
            </p>
            <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
              #cloud
            </p>
            <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
              #infrastructure
            </p>
            <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
              #backend
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 p-1 rounded hover:bg-neutral-300/30'>
              <i className='text-sm iconoir-chat-bubble-empty'></i>
              <p className='text-sm'>Add Comment</p>
            </div>
            <div className='flex items-center gap-2'>
              <p className='text-xs'>9 min read</p>
              <i className='p-1 rounded iconoir-bookmark-empty hover:bg-neutral-300/30' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
