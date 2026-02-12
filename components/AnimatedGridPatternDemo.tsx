import { cn } from '@/lib/utils'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'

type AnimatedGridPatternDemoProps = {
  className?: string
}

export default function AnimatedGridPatternDemo({
  className,
}: AnimatedGridPatternDemoProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
    >
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          'mask-[radial-gradient(500px_circle_at_center,white,transparent)]',
          'absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />
    </div>
  )
}
