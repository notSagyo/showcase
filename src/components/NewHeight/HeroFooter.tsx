import { twMerge } from 'tailwind-merge';
import ScrollLink from './ScrollLink';

const HeroFooter = ({ className, children, ...props }: React.ComponentProps<'footer'>) => {
  return (
    <footer
      className={twMerge(
        'font-roboto mt-auto lg:mt-12 flex justify-between pt-12 text-[max(1.25vw,_1rem)]',
        className
      )}
      {...props}
    >
      <span className='font-light'>(New-York, USA)</span>
      <ScrollLink href='#' after={<>&nbsp;&rarr;</>}>
        Request a callback
      </ScrollLink>
    </footer>
  );
};

export default HeroFooter;
