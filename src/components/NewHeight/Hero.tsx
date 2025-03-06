import { useEffect, useState } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import Counter from './Counter';
import ScrollLink from './ScrollLink';
import TextRoll from './TextRoll';

type HeroProps = React.ComponentProps<'div'> & {
  onLoad?: () => void;
};

const imageUrl =
  'https://res.cloudinary.com/sagyo/image/upload/v1708926447/web/building_dqm0hp.webp';

const Hero = ({ onLoad, className, ...props }: HeroProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    loaded && onLoad?.();
  }, [loaded]);

  return (
    <section
      className={twMerge('relative my-auto grid grid-cols-3 gap-[1vw] lg:grid-cols-12', className)}
      {...props}
    >
      <div
        className={
          'order-0 relative col-span-3 h-[23vw] items-baseline overflow-hidden font-bebas lg:col-span-7 lg:h-[14vw]'
        }
      >
        <h1>
          <TextRoll className='text-[18vw] lg:text-[9vw]' mounted={loaded}>
            New&nbsp;
          </TextRoll>
          <TextRoll className='text-[32vw] leading-[0.85] lg:text-[19vw]' mounted={loaded}>
            Height
          </TextRoll>
        </h1>
        <span className='text-[9vw] leading-[0.85]'>
          <span className='absolute bottom-0 left-0 animate-fade-in-out opacity-0 [animation-delay:1000ms]'>
            Time
          </span>
          <span className='absolute bottom-0 right-0 animate-fade-in-out text-[9vw] opacity-0 [animation-delay:3000ms]'>
            to experience
          </span>
        </span>
      </div>
      <div
        className={twJoin(
          'order-3 col-span-3 flex w-fit flex-col justify-between px-[1vw] font-roboto transition-opacity delay-1000 duration-1000 lg:order-1 lg:col-span-5 lg:ml-auto',
          !loaded && 'opacity-0',
        )}
      >
        <p className='text-[max(1.25vw,_1rem)] font-light leading-snug lg:w-[22vw]'>
          # At our residential haven, we redefine the concept of luxury living by offering an array
          of exclusive services and distinctive features tailored to elevate your lifestyle
        </p>
        <ScrollLink
          href='#'
          className='my-auto inline-block w-fit text-[max(1.25vw,_1rem)] lg:text-[1.75vw]'
          after={<>&nbsp;&rarr;</>}
        >
          Select apartment
        </ScrollLink>
      </div>
      <div className='relative order-1 col-span-3 h-[28vh] lg:order-2 lg:col-span-7 lg:h-[13.5vw]'>
        <div
          className='h-full w-full bg-cover bg-left'
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div
          className={twMerge(
            'absolute right-0 top-0 h-full bg-black transition-[width] delay-300 duration-[5000ms]',
            started ? 'w-0' : 'w-full',
          )}
        />
      </div>
      <span className='pointer-events-none relative order-2 col-span-3 overflow-hidden font-bebas lg:order-3 lg:col-span-5'>
        <span className='inline-block'>
          <TextRoll
            mounted={loaded}
            className='block text-[16vw] leading-[0.8] lg:text-[10vw]'
            wrapperProps={{ className: 'block' }}
          >
            in
          </TextRoll>
          <TextRoll mounted={loaded} className='text-[26vw] leading-[0.8] lg:text-[10vw]'>
            your
          </TextRoll>
        </span>
        <TextRoll mounted={loaded} className='max-w-1 text-[44vw] leading-[0.7] lg:text-[19vw]'>
          life
        </TextRoll>
        <Counter
          className={twJoin(
            'absolute right-0 top-0 text-[19vw] leading-[0.825] transition-opacity delay-300 duration-500',
            loaded && 'opacity-0',
          )}
          after='%'
          endCallback={() => setLoaded(true)}
          startCallback={() => setStarted(true)}
        />
      </span>
    </section>
  );
};

export default Hero;

