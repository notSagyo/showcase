import { twMerge } from 'tailwind-merge';
import ScrollLink from './ScrollLink';

const HeroFooter = ({ className, children, ...props }: React.ComponentProps<'footer'>) => {
  return (
    <footer
      className={twMerge(
        'mt-12 flex justify-between font-roboto text-[max(1.25vw,_1rem)]',
        className,
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

