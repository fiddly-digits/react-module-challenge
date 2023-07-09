import Navbar from '../components/Navbar';
import PostDetailCard from '../components/PostDetailCard';
import { Token } from '../utils/common.types';
import { useEffect, useState } from 'react';

//TODO: Encapsulate token logic on Navbar
//FIXME: Grid logic on Main

export default function Detail() {
  const [userID, setUserID] = useState<string>();
  useEffect(() => {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    console.log(token);
    if (token) {
      const payload: string = token.split('.')[1];
      const plainPayload: Token = JSON.parse(atob(payload)) as Token;
      console.log(plainPayload.id);
      setUserID(plainPayload.id);
      //window.location.reload();
    }
  }, []);

  return (
    <>
      <header className=' bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sticky top-0 z-10'>
        {userID ? <Navbar isOnline={true} /> : <Navbar isOnline={false} />}
      </header>
      <div className='container mx-auto'>
        <div className='grid grid-rows-3 gap-4 grid-cols-[repeat(12]'>
          <aside className='hidden mt-32 md:flex md:col-span-1 md:row-span-1 md:col-start-1 md:flex-col md:items-center md:gap-10'>
            <div className='flex flex-col items-center justify-center text-2xl'>
              <i className='iconoir-heart hover:text-red-500' />
              <p className='text-sm text-gray-500'>0</p>
            </div>
            <div className='flex flex-col items-center justify-center text-2xl'>
              <i className='iconoir-chat-bubble-empty hover:text-yellow-500' />
              <p className='text-sm text-gray-500'>0</p>
            </div>
            <div className='flex flex-col items-center justify-center text-2xl'>
              <i className='iconoir-bookmark-empty hover:text-indigo-600' />
              <p className='text-sm text-gray-500'>0</p>
            </div>
            <div className='flex flex-col items-center justify-center -mt-6 text-2xl'>
              <i className='p-1 rounded-full iconoir-more-horiz hover:bg-indigo-200/50' />
            </div>
          </aside>
          <main className='col-span-12 row-span-3 py-4 md:col-span-6 md:col-start-3 md:row-span-3'>
            <PostDetailCard />
          </main>
          <aside className='col-span-12 px-2 py-4 md:flex md:flex-col md:col-span-2 md:col-start-9 md:row-span-3'>
            <div className='relative z-0 flex flex-col gap-2 px-6 pt-4 overflow-hidden bg-white rounded-lg before:bg-indigo-600 before:h-5 before:w-full before:left-0 before:-right-1 before:top-0 before:absolute'>
              <div className='relative flex items-end gap-2'>
                <img
                  src='https://res.cloudinary.com/practicaldev/image/fetch/s--BHuURcXO--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/667361/f10c4adf-d2ec-4c66-86a3-6c67925479bb.png'
                  alt='avatar'
                  className='w-12 h-12 rounded-full'
                />
                <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800'>
                  Name Placeholder
                </h5>
              </div>
              <button className='h-10 font-semibold text-white bg-indigo-600 rounded'>
                Follow
              </button>
              <p className='mb-4 text-base text-neutral-600'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className='mb-2'>
                <p className='text-sm font-bold text-gray-600'>Location</p>
                <p className='text-gray-600'>Placholder Location</p>
              </div>
              <div className='mb-2'>
                <p className='text-sm font-bold text-gray-600'>Work</p>
                <p className='text-gray-600'>Placholder Work</p>
              </div>
              <div className='mb-2'>
                <p className='text-sm font-bold text-gray-600'>Joined</p>
                <p className='text-gray-600'>Placholder Date</p>
              </div>
            </div>

            <div className='block my-2 bg-white rounded-lg outline outline-1 outline-neutral-500/20'>
              <div className='flex items-center px-6 py-3 border-b-2 border-neutral-100'>
                <h2 className='text-lg font-extrabold'>
                  More from
                  <span className='text-indigo-600'> Name Placeholder</span>
                </h2>
              </div>

              <div className='p-4 border-b-2 group border-neutral-100'>
                <p className='font-semibold text-neutral-600'>
                  Post Title Placeholder
                </p>
                <div className='flex flex-wrap gap-1'>
                  <p className='text-xs text-neutral-400'>#hashtag</p>
                  <p className='text-xs text-neutral-400'>#hashtag</p>
                  <p className='text-xs text-neutral-400'>#hashtag</p>
                  <p className='text-xs text-neutral-400'>#hashtag</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className='bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded sticky bottom-0 h-10 flex container w-full mx-auto justify-around sm:hidden'>
        <div className='flex items-center justify-center gap-2 text-2xl'>
          <i className='iconoir-heart hover:text-red-500' />
          <p className='text-sm text-gray-500'>0</p>
        </div>
        <div className='flex items-center justify-center gap-2 text-2xl'>
          <i className='iconoir-chat-bubble-empty hover:text-yellow-500' />
          <p className='text-sm text-gray-500'>0</p>
        </div>
        <div className='flex items-center justify-center gap-2 text-2xl'>
          <i className='iconoir-bookmark-empty hover:text-indigo-600' />
          <p className='text-sm text-gray-500'>0</p>
        </div>
        <div className='flex items-center justify-center text-2xl'>
          <i className='p-1 rounded-full iconoir-more-horiz hover:bg-indigo-200/50' />
        </div>
      </div>
    </>
  );
}
