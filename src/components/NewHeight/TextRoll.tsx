import { twMerge } from 'tailwind-merge';

interface TextRollProps extends React.ComponentProps<'span'> {
  mounted: boolean;
  wrapperProps?: React.ComponentProps<'span'>;
}

const TextRoll = ({ mounted, wrapperProps, className, children, ...props }: TextRollProps) => {
  return (
    <span {...wrapperProps} className={twMerge('overflow-hidden', wrapperProps?.className)}>
      <span
        className={twMerge(
          'inline-block transition-transform delay-300 duration-700 ease-[cubic-bezier(0.5,0.55,0,1)]',
          !mounted && 'translate-y-[125%]',
          className,
        )}
        {...props}
      >
        {children}
      </span>
    </span>
  );
};

export default TextRoll;
