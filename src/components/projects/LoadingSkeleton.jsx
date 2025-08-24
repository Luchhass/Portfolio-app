export default function LoadingSkeleton({ viewMode, count = 6 }) {
  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-18"
          : "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
      }
    >
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="block group animate-pulse">
          <div
            className={
              viewMode === "grid"
                ? "flex-row group gap-6 md:gap-8"
                : "flex group gap-6 md:gap-8"
            }
          >
            <div
              className={
                viewMode === "grid"
                  ? "relative mb-6 overflow-hidden rounded-4xl bg-black/10 dark:bg-white/10 w-full aspect-[4/3]"
                  : "relative flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 overflow-hidden rounded-2xl bg-black/10 dark:bg-white/10 aspect-square sm:h-28 md:h-32 lg:h-36"
              }
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent animate-shimmer"></div>
            </div>

            <div
              className={viewMode === "grid" ? "space-y-2" : "space-y-3 flex-1"}
            >
              <div className="h-4 md:h-5 bg-[#ef8c54] dark:bg-white/10 rounded w-24 md:w-28 mb-5"></div>

              <div className="space-y-2">
                <div
                  className={
                    viewMode === "grid"
                      ? "h-8 md:h-10 lg:h-12 bg-black/10 dark:bg-white/10 rounded w-full"
                      : "h-5 sm:h-6 md:h-7 bg-black/10 dark:bg-white/10 rounded w-3/4"
                  }
                ></div>
              </div>

              <div
                className={
                  viewMode === "grid"
                    ? "my-3 h-px w-15 bg-black/10 dark:bg-white/10"
                    : "h-px w-12 bg-black/10 dark:bg-white/10"
                }
              />

              <div className="flex gap-2 flex-wrap">
                <div className="h-3 bg-black/10 dark:bg-white/10 rounded w-16"></div>
                <div className="h-3 bg-black/10 dark:bg-white/10 rounded w-12"></div>
                <div className="h-3 bg-black/10 dark:bg-white/10 rounded w-20"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
