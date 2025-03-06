import { throttle } from 'lodash-es';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const CustomCursor = ({ className, style, children, ...props }: React.ComponentProps<'div'>) => {
  const [position, setPosition] = useState<{ x: string | number; y: string | number }>({
    x: '50vw',
    y: '50vh',
  });

  useEffect(() => {
    const onMouseMove = throttle((e: MouseEvent) => setPosition({ x: e.pageX, y: e.pageY }), 50);

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      className={twMerge(
        'pointer-events-none fixed z-20 size-0 -translate-x-1/2 -translate-y-1/2 [backface-visibility:visible] lg:size-[3.5vw]',
        'rounded-full backdrop-invert transition-all duration-300 ease-out',
        className,
      )}
      {...props}
      style={{ top: position.y, left: position.x, ...style }}
    >
      {children}
    </div>
  );
};

export default CustomCursor;
