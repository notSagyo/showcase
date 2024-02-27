import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import Hero from './Hero';
import HeroFooter from './HeroFooter';
import HeroHeader from './HeroHeader';
import CustomCursor from './CustomCursor';

const NewHeight = ({ children, ...props }: React.ComponentProps<'div'>) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div
      className='min-w-screen relative flex min-h-screen flex-col overflow-hidden bg-black px-[2vw] text-white'
      {...props}
    >
      <CustomCursor
        className={twJoin(
          'transition-[inset,opacity] delay-[0ms,1s] duration-[0.3s,1s]',
          !loaded && 'opacity-0',
        )}
      />
      <div className='flex min-h-screen w-full flex-col py-[1vw]'>
        <HeroHeader
          className={twJoin('transition-opacity delay-1000 duration-1000', !loaded && 'opacity-0')}
        />
        <Hero onLoad={() => setLoaded(true)} />
        <HeroFooter
          className={twJoin('transition-opacity delay-1000 duration-1000', !loaded && 'opacity-0')}
        />
      </div>
      {children}
    </div>
  );
};

export default NewHeight;
