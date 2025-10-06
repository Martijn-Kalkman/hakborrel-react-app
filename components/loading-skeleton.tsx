export function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="rounded-full bg-gray-700 h-12 w-12"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  )
}

export function EventCardSkeleton() {
  return (
    <div className="animate-pulse bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden">
      <div className="h-48 bg-gray-700"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-700 rounded mb-3"></div>
        <div className="h-4 bg-gray-700 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        <div className="mt-4 h-10 bg-gray-700 rounded"></div>
      </div>
    </div>
  )
}

export function MediaCardSkeleton() {
  return (
    <div className="animate-pulse bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden">
      <div className="aspect-[4/3] bg-gray-700"></div>
    </div>
  )
}

export function AgendaCardSkeleton() {
  return (
    <div className="animate-pulse bg-black/80 backdrop-blur-sm border border-primary/30 rounded-2xl p-6">
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center min-w-[80px]">
          <div className="bg-gray-700 h-12 w-12 rounded mb-2"></div>
          <div className="bg-gray-700 h-4 w-16 rounded"></div>
        </div>
        <div className="w-16 h-16 bg-gray-700 rounded-xl"></div>
        <div className="flex-1 space-y-2">
          <div className="h-6 bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
          <div className="h-8 bg-gray-700 rounded-full w-20"></div>
        </div>
      </div>
    </div>
  )
}
