
const AnalyticsLoading = () => {
    return (
        <div className="p-8">
            <div className="animate-pulse">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                    </div>
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                    </div>
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <div className="inline-flex items-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-300">Loading analytics data...</span>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsLoading;
