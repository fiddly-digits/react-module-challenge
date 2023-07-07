import { popularHashtags } from '../utils/common.utils';
export default function PopularTags() {
  return (
    <div className='mb-2'>
      <h2 className='py-2 text-lg font-bold'>Popular Tags</h2>
      <div className='flex flex-col h-[40vh]  overflow-y-auto'>
        {popularHashtags.map((popularHashtag) => {
          return (
            <a className='p-2 hover:rounded-lg hover:bg-indigo-200/50 hover:text-indigo-600 hover:underline'>
              {popularHashtag.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
