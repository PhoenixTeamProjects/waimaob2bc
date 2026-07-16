import type { ElementType, ReactNode } from 'react';

type LiquidGlassProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export function LiquidGlass({ as: Component = 'div', children, className = '' }: LiquidGlassProps) {
  return <Component className={`liquid-glass ${className}`.trim()}>{children}</Component>;
}
