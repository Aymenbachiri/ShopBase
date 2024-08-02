export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden duration-300 transform bg-white dark:bg-gray-800 rounded shadow-sm animate-pulse">
      <div className="h-48 bg-gray-200 dark:bg-gray-600"></div>
      <div className="flex-grow border border-t-0 rounded-b bg-gray-100 dark:bg-gray-900 p-5">
        <div className="w-full h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="w-full h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
        <div className="w-1/2 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="w-1/2 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="w-1/2 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}
