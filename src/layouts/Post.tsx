import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { PostSubmit, postSuccess } from '../utils/common.types';
import { useState } from 'react';

export default function Post() {
  const { handleSubmit, register } = useForm<PostSubmit>();
  const navigate = useNavigate();
  const [titleFocused, setTitleFocused] = useState(false);
  const [tagsFocused, setTagsFocused] = useState(false);
  const [bodyFocused, setBodyFocused] = useState(false);

  async function onSubmit(post: PostSubmit) {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    const response: Response = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token ?? 0}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        postTitle: post.postTitle,
        postBody: post.postBody,
        postImg: post.postImg,
        hashtags: {
          first: post.hashtags.first,
          second: post.hashtags.second,
          third: post.hashtags.third,
          fourth: post.hashtags.fourth
        }
      })
    });
    const res: postSuccess = (await response.json()) as postSuccess;
    if (res?.data) {
      navigate('/');
    } else {
      alert(res?.message);
    }
  }

  return (
    <>
      <div className='container h-auto mx-auto'>
        <div className='grid grid-cols-12 gap-4'>
          <nav className='flex items-center w-full col-span-12 h-14'>
            <div className='flex items-center w-3/4 gap-4'>
              <Link to='/'>
                <img
                  className='h-10'
                  src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
                  alt='devlogo'
                />
              </Link>
              <h2 className='font-semibold'>Create Post</h2>
              <div className='flex justify-end gap-3 grow'>
                <p className='font-semibold'>Edit</p>
                <p>Preview</p>
              </div>
            </div>
            <Link
              to='/'
              className='flex justify-end text-2xl iconoir-cancel grow'
            />
          </nav>
          <div className='col-span-12 row-span-3 py-4 md:col-start-2 md:col-span-8'>
            <div className='block w-full bg-white rounded-lg outline outline-1 outline-neutral-500/20'>
              <form
                className='flex flex-col w-full gap-10 px-5 pt-5 overflow-hidden'
                onSubmit={(event) => void handleSubmit(onSubmit)(event)}
              >
                <input
                  type='text'
                  placeholder='Insert your image here...'
                  className='h-10 border rounded outline-none border-gray-600/30 placeholder:p-1'
                  {...register('postImg', {
                    required: { value: true, message: 'Image is Required' },
                    minLength: {
                      value: 10,
                      message: 'Min Length Required is 10'
                    }
                  })}
                />
                <textarea
                  placeholder='New Post title here...'
                  className='h-48 text-5xl font-semibold outline-none resize-none grow'
                  onFocus={() => setTitleFocused(true)}
                  {...register('postTitle', {
                    required: { value: true, message: 'Title is required' },
                    minLength: {
                      value: 10,
                      message: 'Min Length Required is 10'
                    },
                    onBlur: () => setTitleFocused(false)
                  })}
                />
                <div>
                  <input
                    placeholder='Add First Hashtag...'
                    className='h-10 outline-none placeholder:p-1'
                    onFocus={() => setTagsFocused(true)}
                    {...register('hashtags.first', {
                      required: { value: true, message: 'Hashtag is required' },
                      minLength: {
                        value: 3,
                        message: 'Min Length Required is 3'
                      },
                      onBlur: () => setTagsFocused(false)
                    })}
                  />
                  <input
                    placeholder='Add Second Hashtag...'
                    className='h-10 outline-none placeholder:p-1'
                    onFocus={() => setTagsFocused(true)}
                    {...register('hashtags.second', {
                      required: { value: true, message: 'Hashtag is required' },
                      minLength: {
                        value: 3,
                        message: 'Min Length Required is 3'
                      },
                      onBlur: () => setTagsFocused(false)
                    })}
                  />
                  <input
                    placeholder='Add Third Hashtag...'
                    className='h-10 outline-none placeholder:p-1'
                    onFocus={() => setTagsFocused(true)}
                    {...register('hashtags.third', {
                      required: { value: true, message: 'Hashtag is required' },
                      minLength: {
                        value: 3,
                        message: 'Min Length Required is 3'
                      },
                      onBlur: () => setTagsFocused(false)
                    })}
                  />
                  <input
                    placeholder='Add Fourth Hashtag...'
                    className='h-10 outline-none placeholder:p-1'
                    onFocus={() => setTagsFocused(true)}
                    {...register('hashtags.fourth', {
                      required: { value: true, message: 'Hashtag is required' },
                      minLength: {
                        value: 3,
                        message: 'Min Length Required is 3'
                      },
                      onBlur: () => setTagsFocused(false)
                    })}
                  />
                </div>
                <div className='flex items-center justify-between h-10 px-6 -m-6 text-4xl bg-neutral-300/20'>
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
                <textarea
                  placeholder='Write your post content here...'
                  className='h-48 text-2xl outline-none resize-none grow placeholder:p-2'
                  onFocus={() => setBodyFocused(true)}
                  {...register('postBody', {
                    required: { value: true, message: 'Body is required' },
                    minLength: {
                      value: 10,
                      message: 'Min Length Required is 10'
                    },
                    onBlur: () => setBodyFocused(false)
                  })}
                />
                <div className='flex items-center gap-2 mb-4'>
                  <input
                    type='submit'
                    className='px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-600/90'
                    value='Publish'
                  />
                  <button className='px-4 py-2 rounded text-neutral-500 hover:bg-indigo-600/10 hover:text-indigo-600'>
                    Save draft
                  </button>
                  <i className='iconoir-hexagon px-3 py-2.5 rounded text-neutral-500 hover:bg-indigo-600/10 hover:text-indigo-600' />
                  <button className='px-4 py-2.5 text-sm rounded text-neutral-500 hover:bg-indigo-600/10 hover:text-indigo-600'>
                    Revert new changes
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='hidden row-span-3 py-4 md:flex md:col-start-10 md:col-span-3'>
            <article className='relative flex flex-col gap-5'>
              {titleFocused && (
                <div className='absolute w-72 top-[5rem]'>
                  <h2 className='font-bold'>Writing a Great Post Title</h2>
                  <p>
                    Think of your post title as a super short (but compelling!)
                    description — like an overview of the actual post in one
                    short sentence. Use keywords where appropriate to help
                    ensure people can find your post by search.
                  </p>
                </div>
              )}
              {tagsFocused && (
                <div className='absolute w-72 top-[20rem]'>
                  <h2 className='font-bold'>Tagging Guidelines</h2>
                  <p>
                    Tags help people find your post. Think of tags as the topics
                    or categories that best describe your post. Add up to four
                    comma-separated tags per post. Combine tags to reach the
                    appropriate subcommunities. Use existing tags whenever
                    possible. Some tags, such as “help” or “healthy debate”,
                    have special posting guidelines.
                  </p>
                </div>
              )}
              {bodyFocused && (
                <div className='absolute w-72 top-[26rem]'>
                  <h2 className='font-bold'>Editor Basics</h2>
                  <p>
                    Use Markdown to write and format posts. Embed rich content
                    such as Tweets, YouTube videos, etc. A list of supported
                    embeds. In addition to images for the post's content, you
                    can also drag and drop a cover image.
                  </p>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
