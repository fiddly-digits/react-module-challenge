import Navbar from '../components/Navbar';
import { Token } from '../utils/common.types';
import { useEffect, useState } from 'react';
import TimeAgo from 'timeago-react';

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
      <header className=' bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sticky top-0'>
        {userID ? <Navbar isOnline={true} /> : <Navbar isOnline={false} />}
      </header>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 grid-rows-3 gap-4'>
          <aside className='hidden mt-36 md:flex md:col-span-1 md:row-span-1 md:col-start-3 border-helper md:flex-col md:items-center md:gap-10'>
            <div className='flex flex-col items-center justify-center text-3xl'>
              <i className='iconoir-heart hover:text-red-500' />
              <p className='text-sm text-gray-500'>0</p>
            </div>
            <div className='flex flex-col items-center justify-center text-3xl'>
              <i className='iconoir-chat-bubble-empty hover:text-yellow-500' />
              <p className='text-sm text-gray-500'>0</p>
            </div>
            <div className='flex flex-col items-center justify-center text-3xl'>
              <i className='iconoir-bookmark-empty hover:text-indigo-600' />
              <p className='text-sm text-gray-500'>0</p>
            </div>
            <div className='flex flex-col items-center justify-center -mt-6 text-3xl'>
              <i className='p-1 rounded-full iconoir-more-horiz hover:bg-indigo-200/50' />
            </div>
          </aside>
          <main className='col-span-12 row-span-3 md:col-span-6 md:col-start-4 md:row-span-3 border-helper'>
            <div className='block bg-white rounded-lg outline outline-1 outline-neutral-500/20'>
              <img
                className='rounded-t-lg'
                src='https://res.cloudinary.com/practicaldev/image/fetch/s--GRvD3XZL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2tw10f3ba9jakt6xlne3.jpg'
                alt=''
              />
              <div className='px-12 py-6'>
                <div className='flex items-center gap-1.5'>
                  <img
                    src='https://res.cloudinary.com/practicaldev/image/fetch/s--BHuURcXO--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/667361/f10c4adf-d2ec-4c66-86a3-6c67925479bb.png'
                    alt='avatar'
                    className='w-10 h-10 rounded-full'
                  />
                  <div>
                    <p className='p-0.5 text-sm rounded hover:bg-neutral-300/30'>
                      Placeholder Name
                    </p>
                    <TimeAgo
                      className='px-1 text-xs text-gray-500 hover:text-black'
                      datetime='2016-08-08 08:08:08'
                      locale='en_US'
                    />
                  </div>
                </div>
                <div className='flex gap-5 text-xl'>
                  <p>💖 0</p>
                  <p>🦄 0</p>
                  <p>🤯 0</p>
                  <p>🙌 0</p>
                  <p>🔥 0</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <h5 className='mt-2 text-5xl font-bold leading-tight text-neutral-800'>
                    Create A Random Quote Generator with HTML, CSS, and
                    JavaScript
                  </h5>
                  <div className='flex gap-6 text-sm'>
                    <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
                      #webdev
                    </p>
                    <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
                      #html
                    </p>
                    <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
                      #css
                    </p>
                    <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
                      #javascript
                    </p>
                  </div>
                  <p>
                    We software engineers don’t agree on much, but we agree on
                    this one: database schema changes are a pain in the a**.
                    Part of my job at Xata is to talk with as many developers as
                    possible - from fresh bootcamp graduates, to indie
                    developers, to principal engineers working in large teams.
                    We talk about databases in general, what issues they face,
                    the tools they use, and so on. From the people that we’ve
                    talked with, almost everyone said that schema changes and
                    schema management are one of their least favorite parts of
                    working with databases. While this sentiment is pretty
                    universal, the reasons that they bring up are not always the
                    same. Small companies or developers working on hobby
                    projects, for example, have to make lots of changes as their
                    applications grow and they discover new requirements. They’d
                    like their schema changes workflow to be as simple and
                    straight-forward as pull requests on GitHub.
                  </p>
                </div>
              </div>
              <section className='px-12 py-3 border-t-2 border-neutral-100'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-2xl font-semibold'>Top comments (0)</h3>
                  <button className='p-1.5 rounded-md outline outline-2 outline-gray-200 hover:bg-gray-200/30'>
                    Subscribe
                  </button>
                </div>
                <div className='flex w-full gap-2 mt-8'>
                  <img
                    src='https://res.cloudinary.com/practicaldev/image/fetch/s--BHuURcXO--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/667361/f10c4adf-d2ec-4c66-86a3-6c67925479bb.png'
                    alt='avatar'
                    className='w-8 h-8 rounded-full'
                  />
                  <textarea
                    name='post-comment'
                    placeholder='Add to the discussion'
                    className='h-20 border border-gray-200 rounded resize-none grow focus:border-indigo-600 focus:outline-none'
                  />
                </div>
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
                <div className='flex items-center justify-center gap-2 mt-5'>
                  <p className='text-sm text-gray-400'>Code of Conduct</p>
                  <p className='text-sm text-gray-400'>•</p>
                  <p className='text-sm text-gray-400'>Report abuse</p>
                </div>
              </section>
            </div>
          </main>
          <aside className='hidden md:flex md:col-span-3 md:col-start-10 md:col-end-13 md:row-span-4 border-helper'>
            User Detail
          </aside>
        </div>
      </div>
    </>
  );
}
