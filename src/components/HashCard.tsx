import HashCardItem from './HashCardItem';
interface Props {
  hash: string;
}

export default function HashCard(props: Props) {
  return (
    <div className='block my-2 rounded-lg outline outline-1 outline-neutral-500/20'>
      <div className='flex items-center px-6 py-3 border-b-2 border-neutral-100'>
        <h2 className='text-lg font-extrabold'>{props.hash}</h2>
      </div>
      <HashCardItem title='What is Doom Scrolling?' comments={0} isNew={true} />
      <HashCardItem
        title='What was your win this week?'
        comments={17}
        isNew={false}
      />
    </div>
  );
}
