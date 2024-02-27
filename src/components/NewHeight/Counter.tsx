import bezier from 'bezier-easing';
import { useEffect, useState } from 'react';

interface CounterProps extends React.HTMLProps<HTMLDivElement> {
  startCallback?: () => void;
  endCallback?: () => void;
  before?: React.ReactNode;
  after?: React.ReactNode;
  durationMs?: number;
  precision?: number;
  bezier?: [number, number, number, number];
}

const Counter = ({
  startCallback,
  endCallback,
  before,
  after,
  durationMs = 5000,
  precision = 0.01,
  bezier: _bezier = [0.4, 0, 0.2, 1],
  className,
  ...props
}: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const bezierEasing = bezier(..._bezier);
    startCallback?.();

    for (let i = 0; i < 1; i += precision) {
      const progress = bezierEasing(i);
      const delay = i * durationMs;

      setTimeout(() => {
        setCount(Math.floor(progress * 100 + precision));
        if (i + precision >= 1) endCallback?.();
      }, delay);
    }
  }, []);

  return (
    <div className={className} {...props}>
      {before}
      {count}
      {after}
    </div>
  );
};

export default Counter;
