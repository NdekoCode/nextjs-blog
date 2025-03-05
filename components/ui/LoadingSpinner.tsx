import { cn } from '@/lib/utils';

const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "animate-spin inline-block size-6 border-3 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500",
        className
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
