import NewHeightLogo from '@/assets/NewHeightLogo';
import { twMerge } from 'tailwind-merge';

const HeroHeader = ({ className, ...props }: React.ComponentProps<'header'>) => {
  return (
    <header
      className={twMerge('font-roboto mb-12 text-[max(1.25vw,_1rem)] font-light', className)}
      {...props}
    >
      <nav className='flex items-center justify-between'>
        <a href='#' className='flex h-full items-center'>
          <NewHeightLogo className='inline-block h-4 w-auto text-white lg:h-[3vw]' />
          <span className='font-bebas translate-y-[0.35vw] lg:text-[2vw]'>
            NH
            <span className='tracking-tighter'> 21.</span>
          </span>
        </a>
        <ul className='flex justify-end gap-[6vw] lg:gap-[12vw]'>
          <li>
            <a href='#'>About building</a>
          </li>
          <li>
            <a href='#'>Features</a>
          </li>
          <li>
            <a href='#'>Location</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeroHeader;
