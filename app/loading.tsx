export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white dark:bg-slate-950">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-20 w-20 animate-pulse rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25" />
          <div className="absolute inset-0 animate-ping rounded-2xl bg-blue-400 opacity-20" />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-lg font-semibold text-slate-800 dark:text-white">
            Loading
          </span>
          <span className="animate-[bounce_1s_infinite_0ms] text-lg font-semibold text-slate-800 dark:text-white">.</span>
          <span className="animate-[bounce_1s_infinite_200ms] text-lg font-semibold text-slate-800 dark:text-white">.</span>
          <span className="animate-[bounce_1s_infinite_400ms] text-lg font-semibold text-slate-800 dark:text-white">.</span>
        </div>
      </div>
    </div>
  )
}