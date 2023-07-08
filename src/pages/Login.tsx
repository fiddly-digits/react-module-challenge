export default function Login() {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-12 grid-rows-3 gap-4'>
        <div className='col-span-12 row-span-3 py-5 md:col-span-5 md:col-start-5'>
          <div className='block p-6 bg-white rounded-lg outline outline-1 outline-neutral-500/20'>
            <h5 className='mb-1 text-3xl font-bold leading-tight text-center text-neutral-800'>
              Welcome to DEV Community
            </h5>
            <p className='mb-4 text-base text-center text-neutral-600'>
              DEV Community is a community of 1,096,472 amazing developers
            </p>
            <div className='flex flex-col gap-2'>
              <button className='flex items-center justify-center h-12 gap-2 font-semibold text-white bg-black rounded-md'>
                <i className='fa-brands fa-apple' />
                Continue with Apple
              </button>
              <button className='flex items-center justify-center h-12 gap-2 font-semibold text-white bg-blue-900 rounded-md'>
                <i className='fa-brands fa-facebook' />
                Continue with Facebook
              </button>
              <button className='flex items-center justify-center h-12 gap-2 font-semibold text-white rounded-md bg-neutral-800'>
                <i className='fa-brands fa-github' />
                Continue with GitHub
              </button>
              <button className='flex items-center justify-center h-12 gap-2 font-semibold text-white rounded-md bg-sky-500'>
                <i className='fa-brands fa-twitter' />
                Continue with Twitter
              </button>
            </div>
            <div className='relative flex justify-center p-4 after:content-[" "] after:border after:border-gray-400 after:block after:absolute after:w-full after:rounded after:top-[25px] after:z-10'>
              <p className='z-20 px-2 text-sm bg-white text-neutral-600'>
                Have a password? Continue with your email address
              </p>
            </div>
            <form
              action='submit'
              className='flex flex-col justify-center gap-3'
            >
              <label htmlFor='user-input'>Email</label>
              <div className='rounded h-9 outline outline-2 outline-neutral-900/50 hover:outline-2 hover:outline-indigo-600'>
                <input type='text' className='user-input' id='user-input' />
              </div>
              <label htmlFor='user-input'>Password</label>
              <div className='rounded h-9 outline outline-2 outline-neutral-900/50 hover:outline-2 hover:outline-indigo-600'>
                <input type='text' className='pwd-input' id='pwd-input' />
              </div>
              <div className='flex items-center gap-3'>
                <input
                  type='checkbox'
                  className='w-4 h-4 rounded accent-indigo-600 bg-grey-700'
                  id='check'
                />
                <label htmlFor='check'>Remember me</label>
              </div>
              <input
                type='submit'
                className='h-12 font-semibold text-white bg-indigo-600 rounded-md'
                value='Continue'
              />
            </form>
            <p className='p-5 text-sm text-center text-indigo-600'>
              I forgot my password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
