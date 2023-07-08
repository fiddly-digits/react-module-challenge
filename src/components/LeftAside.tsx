import Menu from './Menu';
import PopularTags from './PopularTags';
import SocialMenu from './SocialMenu';
import DevCommCard from './DevCommCard';

export default function LeftAside() {
  return (
    <aside className='hidden w-full p-2 md:flex md:flex-col md:col-span-3 md:row-span-3  '>
      <Menu isOther={false} />
      <Menu isOther={true} />
      <SocialMenu />
      <PopularTags />
      {/* //TODO: Fix hardcoded text in DevCommCard  */}
      <DevCommCard img='https://rb.gy/mfaj5' endLink='→ Get in on the fun!' />
      <DevCommCard />
    </aside>
  );
}
