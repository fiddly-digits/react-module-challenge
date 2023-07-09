import TimeAgo from 'timeago-react';
import CommentCard from './CommentCard';
import { Post, User, Comment } from '../utils/common.types';

interface Props {
  content?: Post;
  postOwner?: User;
  comments?: Comment[];
}

export default function PostDetailCard(props: Props) {
  return (
    <article className='block w-full bg-white rounded-lg outline outline-1 outline-neutral-500/20'>
      <img
        className='object-contain w-full h-auto rounded-t-lg'
        src={props.content?.postImg}
        alt='post-header'
      />
      <div className='px-12 py-6'>
        <div className='flex items-center gap-1.5'>
          <img
            src={props.postOwner?.picture}
            alt='avatar'
            className='w-10 h-10 rounded-full'
          />
          <div>
            <p className='p-0.5 text-sm rounded hover:bg-neutral-300/30'>
              {`${props.postOwner?.name.first ?? 'Placeholder'} ${
                props.postOwner?.name.last ?? 'Name'
              }`}
            </p>
            <TimeAgo
              className='px-1 text-xs text-gray-500 hover:text-black'
              datetime={`${props.content?.postDate ?? '1688927282'}`}
              locale='en_US'
            />
          </div>
        </div>
        <div className='flex gap-5 text-xl'>
          <p>{`💖 ${props.content?.likes ?? 0}`}</p>
          <p>🦄 0</p>
          <p>🤯 0</p>
          <p>🙌 0</p>
          <p>🔥 0</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h5 className='mt-2 text-5xl font-bold leading-tight text-neutral-800'>
            {props.content?.postTitle}
          </h5>
          <div className='flex gap-6 text-sm'>
            <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
              {props.content?.hashtags.first}
            </p>
            <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
              {props.content?.hashtags.second}
            </p>
            <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
              {props.content?.hashtags.third}
            </p>
            <p className='p-1 rounded hover:outline hover:outline-1 hover:outline-slate-400 hover:bg-slate-400/20'>
              {props.content?.hashtags.fourth}
            </p>
          </div>
          <p>{props.content?.postBody}</p>
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
            className='h-20 border border-gray-200 rounded resize-none grow focus:border-indigo-600 focus:outline-none placeholder:p-2'
          />
        </div>
        {props?.comments?.map((comment) => {
          return <CommentCard comment={comment} />;
        })}

        <div className='flex items-center justify-center gap-2 mt-5'>
          <p className='text-sm text-gray-400'>Code of Conduct</p>
          <p className='text-sm text-gray-400'>•</p>
          <p className='text-sm text-gray-400'>Report abuse</p>
        </div>
      </section>
    </article>
  );
}
