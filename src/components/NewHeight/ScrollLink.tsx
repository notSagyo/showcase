import { twMerge } from 'tailwind-merge';

interface ScrollLinkProps extends React.ComponentProps<'a'> {
  before?: React.ReactNode;
  after?: React.ReactNode;
  childrenWrapperProps?: React.ComponentProps<'span'>;
}

const ScrollLink = ({
  before,
  after,
  childrenWrapperProps,
  children,
  className,
  ...props
}: ScrollLinkProps) => {
  return (
    <a
      className={twMerge('group relative inline-block overflow-hidden py-0', className)}
      {...props}
    >
      {before}
      <span
        {...childrenWrapperProps}
        className={twMerge(
          'relative inline-block after:absolute after:left-0 after:h-full after:w-full after:border-b after:border-b-white',
          childrenWrapperProps?.className,
        )}
      >
        <span className='inline-block transition-transform duration-700 group-hover:-translate-y-[125%]'>
          {children}
        </span>
        <span
          className='absolute left-0 inline-block translate-y-[125%] transition-transform duration-700 group-hover:translate-y-0'
          aria-hidden
        >
          {children}
        </span>
      </span>
      <span
        className={
          'relative inline-block ' +
          'after:absolute after:left-0 after:h-full after:w-0 after:border-b after:border-b-white' +
          'after:transition-[width] after:duration-700 after:ease-in-out after:group-hover:w-full'
        }
      >
        {after}
      </span>
    </a>
  );
};

export default ScrollLink;
