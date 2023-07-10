import MainCard from './MainCard';
import { useEffect, useState } from 'react';
//import { Outlet, Link } from 'react-router-dom';
import { PostResult } from '../utils/common.types';
import clsx from 'clsx';

export default function MainComponent() {
  const [data, setData] = useState<PostResult>();
  const [isRelevant, setRelevant] = useState(true);
  const [isLatest, setLatest] = useState(false);
  const [isTop, setTop] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/posts/')
      .then((res) => res.json())
      .then((res: PostResult) => setData(res))
      .catch((error) => alert(error));
  }, []);

  return (
    <main className='col-span-12 row-span-3 md:col-span-6 md:col-start-4 md:row-span-3'>
      <div className='inline-flex mt-3 mb-2 rounded-md' role='group'>
        <button
          type='button'
          className={clsx(
            'inline-block rounded px-3 pb-2 pt-2.5 text-lg leading-normal text-black  hover:bg-indigo-600/20',
            { 'font-bold': isRelevant }
          )}
          onClick={() => {
            setRelevant(true);
            setLatest(false);
            setTop(false);
          }}
        >
          Relevant
        </button>
        <button
          type='button'
          className={clsx(
            'inline-block rounded px-3 pb-2 pt-2.5 text-lg leading-normal text-black  hover:bg-indigo-600/20',
            { 'font-bold': isLatest }
          )}
          onClick={() => {
            setRelevant(false);
            setLatest(true);
            setTop(false);
          }}
        >
          Latest
        </button>
        <button
          type='button'
          className={clsx(
            'inline-block rounded px-3 pb-2 pt-2.5 text-lg leading-normal text-black  hover:bg-indigo-600/20',
            { 'font-bold': isTop }
          )}
          onClick={() => {
            setRelevant(false);
            setLatest(false);
            setTop(true);
          }}
        >
          Top
        </button>
      </div>
      <div className='flex flex-col gap-4 mb-4'>
        {data?.data &&
          isLatest &&
          [...data.data]
            .sort((a, b) => Number(b.postDate) - Number(a.postDate))
            .map((post) => {
              return <MainCard post={post} />;
            })}
        {data?.data &&
          isTop &&
          data.data
            .filter((post) => post.isRelevant)
            .map((post) => {
              return <MainCard post={post} />;
            })}
        {data?.data &&
          isRelevant &&
          data.data.map((post) => {
            return <MainCard post={post} />;
          })}
      </div>
    </main>
  );
}
