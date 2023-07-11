import { Comment } from '../utils/common.types';
import TimeAgo from 'timeago-react';
import { useEffect, useState } from 'react';
import { UserResult } from '../utils/common.types';

interface Props {
  comment?: Comment;
}

export default function CommentCard(props: Props) {
  const [user, setUser] = useState<UserResult>();

  useEffect(() => {
    fetch(`http://localhost:8080/users/${props.comment?.commenterID ?? 0}`)
      .then((res) => res.json())
      .then((res: UserResult) => setUser(res))
      .catch((error) => alert(error));
  }, [props.comment?.commenterID]);

  return (
    <article className='flex items-baseline gap-2 mt-5'>
      <img
        src={user?.data?.picture}
        alt='avatar'
        className='w-8 h-8 rounded-full'
      />
      <div className='flex flex-col justify-between p-2 border rounded grow border-gray-500/20'>
        <div className='flex items-center justify-between w-full gap-1'>
          <div className='flex items-center grow'>
            <p className='p-0.5 text-sm font-semibold rounded text-neutral-800 hover:bg-gray-400/10'>
              {`${user?.data?.name.first ?? 'Placeholder'} ${
                user?.data?.name.last ?? 'name'
              }`}
            </p>
            <p className='text-sm text-gray-400'>•</p>
            <TimeAgo
              className='text-sm text-gray-400'
              datetime={props.comment?.commentDate ?? '1688927282'}
              locale='en_US'
            />
          </div>
          <i className='p-1 hover:bg-gray-400/10 iconoir-more-horiz' />
        </div>
        <p className='mt-3'>{props.comment?.content}</p>
      </div>
    </article>
  );
}
