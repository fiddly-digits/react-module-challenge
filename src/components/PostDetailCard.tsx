import TimeAgo from 'timeago-react';
import CommentCard from './CommentCard';
import {
  Post,
  User,
  Comment,
  CommentSubmit,
  CommentSuccess,
  DeleteSuccess
} from '../utils/common.types';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserResult } from '../utils/common.types';
import { useForm } from 'react-hook-form';

interface Props {
  userLogged?: string;
  content?: Post;
  postOwner?: User;
  comments?: Comment[];
}

//TODO: Logic on Delete Button
//TODO: Improve Modal Logic

export default function PostDetailCard(props: Props) {
  const [LoggedUser, setLoggedUser] = useState<UserResult>();
  const [commentTextFocused, setCommentTextFocused] = useState<boolean>(false);
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<CommentSubmit>();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/users/${props.userLogged ?? '0'}`)
      .then((res) => res.json())
      .then((res: UserResult) => setLoggedUser(res))
      .catch((error) => alert(error));
  }, [props.userLogged]);

  async function onSubmit(data: CommentSubmit) {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    const response: Response = await fetch(
      `http://localhost:8080/comments/?postID=${id ?? 0}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token ?? 0}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: data.content
        })
      }
    );
    const res: CommentSuccess = (await response.json()) as CommentSuccess;
    if (res) {
      location.reload();
    } else {
      alert('Something went wrong with your comment');
    }
  }

  async function onDelete() {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    const response: Response = await fetch(
      `http://localhost:8080/posts/${id ?? 0}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token ?? 0}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const res: DeleteSuccess = (await response.json()) as DeleteSuccess;
    if (res) {
      navigate('/');
    } else {
      alert('Error in deletion');
    }
  }

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
        {props.userLogged === props.content?.postOwner && (
          <div className='flex justify-end gap-2'>
            <Link
              className='flex items-center gap-3 p-1 rounded hover:bg-indigo-200/30 hover:text-indigo-600'
              to={`/Edit/${props.content?._id ?? 'ID'}`}
            >
              <i className='text-xl iconoir-edit-pencil' />
              <p className='text-xs'>Edit Post</p>
            </Link>
            <a
              className='flex items-center gap-3 p-1 rounded hover:bg-indigo-200/30 hover:text-indigo-600'
              onClick={() => {
                if (document) {
                  (
                    document.getElementById('my_modal_1') as HTMLFormElement
                  ).showModal();
                }
              }}
            >
              <i className='text-xl iconoir-trash' />
              <p className='text-xs'>Delete Post</p>
            </a>
            <dialog id='my_modal_1' className='modal'>
              <form method='dialog' className='bg-white modal-box'>
                <h3 className='text-lg font-bold'>Caution!</h3>
                <p className='py-4'>
                  This action will permanently delete your post, are you sure?
                </p>
                <div className='modal-action'>
                  {/* if there is a button in form, it will close the modal */}
                  <button className='p-2 font-bold text-white bg-indigo-600 rounded-md'>
                    Take me back!
                  </button>
                  <button
                    className='p-2 font-bold text-white bg-red-600 rounded-md'
                    onClick={() => void onDelete()}
                  >
                    Yes. Delete It.
                  </button>
                </div>
              </form>
            </dialog>
          </div>
        )}
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
          <h3 className='text-2xl font-semibold'>
            Top comments ({props.comments?.length})
          </h3>
          <button className='p-1.5 rounded-md outline outline-2 outline-gray-200 hover:bg-gray-200/30'>
            Subscribe
          </button>
        </div>
        <div className='flex w-full gap-2 mt-8'>
          <img
            src={
              LoggedUser?.data?.picture ??
              'https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
            }
            alt='avatar'
            className='w-8 h-8 rounded-full'
          />
          <form
            className='flex flex-col grow'
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
          >
            <div
              className='flex flex-col border border-gray-200 rounded grow focus:border-indigo-600 focus:outline-none '
              onFocus={() => setCommentTextFocused(true)}
            >
              <textarea
                placeholder='Add to the discussion'
                className='h-20 resize-none placeholder:p-2 focus:outline-none'
                {...register('content', {
                  required: { value: true, message: 'Comment is Required' },
                  minLength: {
                    value: 3,
                    message: 'Min Length Required is 3'
                  }
                })}
              />
              {commentTextFocused && props.userLogged && (
                <div className='flex items-center justify-between pt-1 text-3xl border-t border-gray-400/50'>
                  <div className='flex items-center gap-2'>
                    <a className='iconoir-bold icons-style'></a>
                    <a className='iconoir-italic icons-style'></a>
                    <a className='iconoir-link icons-style'></a>
                    <a
                      className='iconoir-numbered-list-left icons-style'
                      target='_blank'
                    ></a>
                    <a className='iconoir-list icons-style'></a>
                    <a className='iconoir-underline d-none d-lg-flex icons-style'></a>
                    <a className='iconoir-quote d-none d-lg-flex icons-style'></a>
                    <a className='iconoir-code d-none d-lg-flex icons-style'></a>
                    <a className='iconoir-code-brackets-square d-none d-lg-flex icons-style'></a>
                    <a className='iconoir-flash d-none d-lg-flex icons-style'></a>
                    <a className='iconoir-media-image icons-style'></a>
                  </div>

                  <div className='flex items-center'>
                    <a className='iconoir-more-vert icons-style'></a>
                  </div>
                </div>
              )}
            </div>
            {commentTextFocused && props.userLogged && (
              <div>
                <input
                  type='submit'
                  className='h-10 px-3 mt-2 font-semibold text-white bg-indigo-600 rounded-md grow-0 hover:bg-indigo-600/90'
                />
              </div>
            )}
          </form>
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
