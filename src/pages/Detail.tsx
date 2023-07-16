import PostDetailCard from '../components/PostDetailCard';
import {
  CommentsResult,
  GetAPost,
  Token,
  UserResult
} from '../utils/common.types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import MoreFromItem from '../components/MoreFromItem';

export default function Detail() {
  const [userID, setUserID] = useState<string>();
  const [post, setPost] = useState<GetAPost>();
  const [user, setUser] = useState<UserResult>();
  const [comments, setComments] = useState<CommentsResult>();

  const { id } = useParams();

  //! This is needed in order to get the current user.
  useEffect(() => {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      const payload: string = token.split('.')[1];
      const plainPayload: Token = JSON.parse(atob(payload)) as Token;
      setUserID(plainPayload.id);
    }
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/posts/${id ?? '0'}`)
      .then((res) => res.json())
      .then((res: GetAPost) => setPost(res))
      .catch((error) => alert(error));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:8080/users/${post?.data?.postOwner ?? '0'}`)
      .then((res) => res.json())
      .then((res: UserResult) => setUser(res))
      .catch((error) => alert(error));
  }, [post?.data?.postOwner]);

  useEffect(() => {
    fetch(`http://localhost:8080/comments/?postID=${id ?? '0'}`)
      .then((res) => res.json())
      .then((res: CommentsResult) => setComments(res))
      .catch((error) => alert(error));
  }, [id]);

  return (
    <>
      <div className='container mx-auto'>
        <div className='grid grid-rows-3 gap-4 grid-cols-[repeat(12]'>
          <aside className='hidden mt-32 md:flex md:col-span-1 md:row-span-1 md:col-start-1 md:flex-col md:items-center md:gap-10'>
            <div className='flex flex-col items-center justify-center text-2xl'>
              <i className='iconoir-heart hover:text-red-500' />
              <p className='text-sm text-gray-500'>{post?.data?.likes}</p>
            </div>
            <div className='flex flex-col items-center justify-center text-2xl'>
              <i className='iconoir-chat-bubble-empty hover:text-yellow-500' />
              <p className='text-sm text-gray-500'>{comments?.data?.length}</p>
            </div>
            <div className='flex flex-col items-center justify-center text-2xl'>
              <i className='iconoir-bookmark-empty hover:text-indigo-600' />
              <p className='text-sm text-gray-500'>{post?.data?.bookmarks}</p>
            </div>
            <div className='flex flex-col items-center justify-center -mt-6 text-2xl'>
              <i className='p-1 rounded-full iconoir-more-horiz hover:bg-indigo-200/50' />
            </div>
          </aside>
          <main className='col-span-12 row-span-3 py-4 md:col-span-6 md:col-start-3 md:row-span-3'>
            <PostDetailCard
              userLogged={userID}
              content={post?.data}
              postOwner={user?.data}
              comments={comments?.data}
            />
          </main>
          <aside className='col-span-12 px-2 py-4 md:flex md:flex-col md:col-span-2 md:col-start-9 md:row-span-3'>
            <div className='relative z-0 flex flex-col gap-2 px-6 pt-4 overflow-hidden bg-white rounded-lg before:bg-indigo-600 before:h-5 before:w-full before:left-0 before:-right-1 before:top-0 before:absolute'>
              <div className='relative flex items-end gap-2'>
                <img
                  src={user?.data?.picture}
                  alt='avatar'
                  className='w-12 h-12 rounded-full'
                />
                <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800'>
                  {`${user?.data?.name.first ?? 'Placeholder'} ${
                    user?.data?.name.last ?? 'Name'
                  }`}
                </h5>
              </div>
              <button className='h-10 font-semibold text-white bg-indigo-600 rounded'>
                Follow
              </button>
              <p className='mb-4 text-base text-neutral-600'>
                {user?.data?.description}
              </p>
              <div className='mb-2'>
                <p className='text-sm font-bold text-gray-600'>Location</p>
                <p className='text-gray-600'>{user?.data?.location}</p>
              </div>
              <div className='mb-2'>
                <p className='text-sm font-bold text-gray-600'>Work</p>
                <p className='text-gray-600'>{user?.data?.work}</p>
              </div>
              <div className='mb-2'>
                <p className='text-sm font-bold text-gray-600'>Joined</p>
                <TimeAgo
                  className='text-gray-600'
                  datetime={`${user?.data?.joined ?? '1688927282'}`}
                  locale='en_US'
                />
              </div>
            </div>

            <div className='block my-2 bg-white rounded-lg outline outline-1 outline-neutral-500/20'>
              <div className='flex items-center px-6 py-3 border-b-2 border-neutral-100'>
                <h2 className='text-lg font-extrabold'>
                  More from
                  <span className='text-indigo-600'>
                    {` ${user?.data?.name.first ?? 'Placeholder'} ${
                      user?.data?.name.last ?? 'Name'
                    }`}
                  </span>
                </h2>
              </div>
              <MoreFromItem />
            </div>
          </aside>
        </div>
      </div>
      <div className='bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded sticky bottom-0 h-10 flex container w-full mx-auto justify-around sm:hidden'>
        <div className='flex items-center justify-center gap-2 text-2xl'>
          <i className='iconoir-heart hover:text-red-500' />
          <p className='text-sm text-gray-500'>{post?.data?.likes}</p>
        </div>
        <div className='flex items-center justify-center gap-2 text-2xl'>
          <i className='iconoir-chat-bubble-empty hover:text-yellow-500' />
          <p className='text-sm text-gray-500'>{comments?.data?.length}</p>
        </div>
        <div className='flex items-center justify-center gap-2 text-2xl'>
          <i className='iconoir-bookmark-empty hover:text-indigo-600' />
          <p className='text-sm text-gray-500'>{post?.data?.bookmarks}</p>
        </div>
        <div className='flex items-center justify-center text-2xl'>
          <i className='p-1 rounded-full iconoir-more-horiz hover:bg-indigo-200/50' />
        </div>
      </div>
    </>
  );
}
