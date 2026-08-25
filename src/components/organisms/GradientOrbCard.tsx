import { motion } from 'motion/react';
import { GradientOrb } from '../atoms/GradientOrb';
import { Display } from '../atoms/Typography';
import type { ReactNode } from 'react';

type GradientColor = 'mint' | 'peach' | 'lavender' | 'sky' | 'rose';

interface GradientOrbCardProps {
  title: string;
  variant: GradientColor;
  children: ReactNode;
  className?: string;
}

export function GradientOrbCard({
  title,
  variant,
  children,
  className = '',
}: GradientOrbCardProps) {
  return (
    <motion.article
      className={`relative overflow-hidden bg-canvas-soft rounded-xxl p-8 ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <GradientOrb color={variant} size={280} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative flex flex-col gap-4 text-center items-center">
        <Display as="h3" size="sm">
          {title}
        </Display>
        <div className="font-body text-[15px] leading-[1.47] tracking-[0.15px] text-body max-w-[480px]">
          {children}
        </div>
      </div>
    </motion.article>
  );
}
