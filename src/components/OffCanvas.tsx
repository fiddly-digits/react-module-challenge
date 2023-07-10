import Menu from './Menu';
import SocialMenu from './SocialMenu';
//<i className='text-2xl iconoir-cancel' />

export default function Offcanvas() {
  return (
    <div className='drawer-side '>
      <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
      <ul className='h-full p-4 bg-white menu w-80'>
        <div className='flex items-center justify-between '>
          <p className='text-xl font-bold'>Dev Community</p>
        </div>
        <Menu isOther={false} />
        <Menu isOther={true} />
        <SocialMenu />
      </ul>
    </div>
  );
}
