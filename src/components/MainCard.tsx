import { useEffect, useState } from 'react';
import { Post, UserResult } from '../utils/common.types';
import TimeAgo from 'timeago-react';
import { Link } from 'react-router-dom';

interface Props {
  post: Post;
}

export default function MainCard(props: Props) {
  const [postOwner, setPostOwner] = useState<UserResult>();

  useEffect(() => {
    fetch(`http://localhost:8080/users/${props.post.postOwner}`)
      .then((res) => res.json())
      .then((res: UserResult) => setPostOwner(res))
      .catch((error) => alert(error));
  });

  return (
    <div className='block bg-white rounded-lg outline outline-1 outline-neutral-500/20'>
      <img className='rounded-t-lg' src={props.post.postImg} alt='' />
      <div className='p-6'>
        <div className='flex items-center gap-1.5'>
          <img
            src={postOwner?.data?.picture}
            alt='avatar'
            className='border border-black rounded-full w-7 h-7'
          />
          <div>
            <p className='p-0.5 text-sm rounded hover:bg-neutral-300/30'>
              {`${postOwner?.data?.name.first ?? 'placeholder'} ${
                postOwner?.data?.name.last ?? 'Name'
              }`}
            </p>
            <TimeAgo
              className='px-1 text-xs text-gray-500 hover:text-black'
              datetime={props.post.postDate}
              locale='en_US'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 ps-8'>
          <Link to={`/Detail/${props.post._id}`}>
            <h5 className='mt-2 text-3xl font-bold leading-tight text-neutral-800 hover:text-indigo-600'>
              {props.post.postTitle}
            </h5>
          </Link>
          <div className='flex gap-6 text-sm'>
            <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
              {props.post.hashtags.first}
            </p>
            <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
              {props.post.hashtags.second}
            </p>
            <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
              {props.post.hashtags.third}
            </p>
            <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
              {props.post.hashtags.fourth}
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 p-1 rounded hover:bg-neutral-300/30'>
              <i className='z-0 text-sm iconoir-chat-bubble-empty' />
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
