//TODO: Create Dropdown menu

export default function Online() {
  return (
    <div className='flex items-center gap-2'>
      <a
        href=''
        className='hidden md:block whitespace-nowrap text-indigo-600 rounded outline outline-1 px-[15px] py-[6px] outline-indigo-600 hover:bg-indigo-600 hover:text-white hover:underline'
      >
        Create Post
      </a>
      <a className='px-2 md:hidden hover:rounded-lg hover:bg-indigo-200/50 hover:text-indigo-600'>
        <i className='mt-2 text-2xl iconoir-search'></i>
      </a>
      <a className='px-2 hover:rounded-lg hover:bg-indigo-200/50 hover:text-indigo-600'>
        <i className='mt-2 text-2xl iconoir-bell'></i>
      </a>
      <button>
        <img
          src='https://api.dicebear.com/6.x/big-ears-neutral/svg'
          alt='avatar'
          className='rounded-full mt-z w-7 h-7 hover:outline hover:outline-indigo-200/50'
        />
      </button>
    </div>
  );
}
